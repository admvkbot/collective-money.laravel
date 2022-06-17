import configparser
import json
import time
import pytz

from datetime import date, datetime, timedelta

import mysql.connector as conn
import sys

config = configparser.ConfigParser()
config.read("config.ini")

# Присваиваем значения внутренним переменным
is_first = int(config['Updater']['first-run'])

db = None
cursor = None


class Project(object):
    def __init__(self, id, is_indexed):
        self.id = id
        self.is_indexed = is_indexed


class Index(object):
    def __init__(self, field):
        self.field = field


class Id(object):
    def __init__(self, id):
        self.id = id


class TgMessage(object):
    def __init__(self, id, tg_message_id, channel_id, date, user_id, message):
        self.id = id
        self.tg_message_id = tg_message_id
        self.channel_id = channel_id
        self.date = date
        self.user_id = user_id
        self.message = message


class TgMetric(object):
    def __init__(self, id, num_all, num_id, num_wts, num_wtb, num_scam, date):
        self.id = id
        self.num_all = num_all
        self.num_id = num_id
        self.num_wts = num_wts
        self.num_wtb = num_wtb
        self.num_scam = num_scam
        self.date = date


def mysql_init():
    global db
    global cursor
    db = conn.connect(
        host=config['MySQL']['host'],
        user=config['MySQL']['user'],
        password=config['MySQL']['password'],
        database=config['MySQL']['database'])
    cursor = db.cursor()


def mysql_get_all_projects():
    global cursor
    sql = "SELECT id, is_indexed FROM projects WHERE is_indexed"
    cursor.execute(sql)
    data = cursor.fetchall()
    out = []
    for row in data:
        project = Id(
            row[0],
        )
        out.insert(0, project)
    return out


def mysql_get_no_index_projects():
    global cursor
    sql = "SELECT id, is_indexed FROM projects WHERE NOT is_indexed"
    cursor.execute(sql)
    data = cursor.fetchall()
    out = []
    for row in data:
        project = Project(
            row[0],
            row[1],
        )
        out.insert(0, project)
    return out


def mysql_get_indexes(project_id):
    global cursor
    sql = "SELECT field FROM indexes WHERE project_id=" + str(project_id)
    cursor.execute(sql)
    data = cursor.fetchall()
    out = []
    for row in data:
        index = Index(
            row[0],
        )
        out.insert(0, index)
    return out


def mysql_get_messages_by_indexes(indexes):
    global cursor
    str = ""
    i = 0
    for index in indexes:
        if i:
            str = str + " OR"
        str = str + " message LIKE '%" + index.field + "%'"
        i = i + 1
    sql = "SELECT id FROM tg_messages WHERE" + str
    cursor.execute(sql)
    data = cursor.fetchall()
    out = []
    for row in data:
        message = Id(
            row[0],
        )
        out.insert(0, message)
    return out


def mysql_count_tg_users_by_dates(date_start, date_end, project_id=None, whereto=''):
    global cursor
    str_project_id = ""
    if not project_id:
        sql = "SELECT COUNT(DISTINCT(user_id)) FROM tg_messages" \
              " WHERE date > '" + str(date_start) + "'" \
              " AND date < '" + str(date_end) + "'"
    else:
        str_whereto = ""
        if whereto:
            str_whereto = " AND tg_messages.message LIKE '%" + whereto + "%'"
        sql = "SELECT COUNT(DISTINCT(tg_user_tg_channel.user_id)) FROM tg_messages INNER JOIN tg_message_project ON tg_messages.id = tg_message_project.message_id" \
              " INNER JOIN tg_user_tg_channel ON tg_messages.user_id = tg_user_tg_channel.user_id" \
              " WHERE tg_message_project.project_id=" + str(project_id) + \
              " AND tg_messages.date > '" + str(date_start) + "'" \
              " AND tg_messages.date < '" + str(date_end) + "'" \
              + str_whereto
    cursor.execute(sql)
    data = cursor.fetchall()
#    out = []
#    for row in data:
#        message = TgMessage(
#            row[0],
#            row[1],
#            row[2],
#            row[3],
#            row[4],
#            row[5],
#        )
#        out.insert(0, message)
    return data[0][0]


def mysql_detach(project_id):
    global db
    global cursor
    sql = "DELETE FROM tg_message_project WHERE project_id=" + str(project_id)
    cursor.execute(sql)
    db.commit()


def mysql_attach(messages, project_id):
    global db
    global cursor
    for message in messages:
        sql = "INSERT INTO tg_message_project (message_id, project_id) VALUES (%s, %s)"
        val = (
            message.id,
            project_id
        )
        cursor.execute(sql, val)
    db.commit()


def mysql_set_project_indexed(project_id, status):
    global db
    global cursor
    sql = "UPDATE projects SET is_indexed=" + str(status) + " WHERE id=" + str(project_id)
    cursor.execute(sql)
    db.commit()


def mysql_get_first_message():
    global cursor
    sql = "SELECT * FROM tg_messages ORDER BY date LIMIT 1"
    cursor.execute(sql)
    data = cursor.fetchall()
    out = []
    for row in data:
        message = TgMessage(
            row[0],
            row[1],
            row[2],
            row[3],
            row[4],
            row[5],
        )
        return message
    return None


def mysql_delete_metric(project_id, metric, table):
    global db
    global cursor
    sql = f"DELETE FROM {table} WHERE project_id={project_id} AND date='{metric.date}'"
    cursor.execute(sql)
    db.commit()


def mysql_put_metric(project_id, metric, table):
    global db
    global cursor
    if 1:
        sql = f"INSERT INTO {table} (project_id, date, quantity_all, quantity_id, quantity_wts, quantity_wtb, quantity_scam) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        val = (
            project_id,
            metric.date,
            metric.num_all,
            metric.num_id,
            metric.num_wts,
            metric.num_wtb,
            metric.num_scam,
        )
        cursor.execute(sql, val)
    db.commit()


def put_metric(project_id, metric, type):
    if type == 'day':
        mysql_put_tg_users_to_project(project_id, metric.num_id)
    mysql_delete_metric(project_id, metric, type+'_tg_metrics')
    return mysql_put_metric(project_id, metric, type+'_tg_metrics')


def mysql_put_rating(project_id, rating):
    global db
    global cursor
    sql = f"SELECT rating FROM projects WHERE id={project_id}"
    cursor.execute(sql)
    data = cursor.fetchall()
    for row in data:
        rating_past = row[0]

    sql = f"UPDATE projects SET rating_past={rating_past} WHERE id={project_id}"
    cursor.execute(sql)
    sql = f"UPDATE projects SET rating={rating} WHERE id={project_id}"
    cursor.execute(sql)
    db.commit()


def mysql_put_tg_users_to_project(project_id, num_id):
    global db
    global cursor
    sql = f"SELECT num_tg_users FROM projects WHERE id={project_id}"
    cursor.execute(sql)
    data = cursor.fetchall()
    for row in data:
        num_past = row[0]
    sql = f"UPDATE projects SET num_tg_users_past={num_past} WHERE id={project_id}"
    cursor.execute(sql)
    sql = f"UPDATE projects SET num_tg_users={num_id} WHERE id={project_id}"
    cursor.execute(sql)
    db.commit()


def change_day(day_str):
    tmp = list(day_str)
    tmp[3] = '0'
    tmp[4] = '1'
    day_str = ''.join(tmp)
    return day_str


def create_metrics(project_id, date, type='day'):
        match type:
            case 'day':
                date_start = datetime.strptime(date.strftime('%m/%d/%y') + ' 00:00:00', '%m/%d/%y %H:%M:%S')
                date_end = datetime.strptime(date.strftime('%m/%d/%y') + ' 23:59:59', '%m/%d/%y %H:%M:%S')
            case 'week':
                date_start = datetime.strptime(date.strftime('%m/%d/%y') + ' 00:00:00', '%m/%d/%y %H:%M:%S')
                date_end = datetime.strptime((date + timedelta(days=6)).strftime('%m/%d/%y') + ' 23:59:59', '%m/%d/%y %H:%M:%S')
            case 'month':
                date_start = datetime.strptime(change_day(date.strftime('%m/%d/%y') + ' 00:00:00'), '%m/%d/%y %H:%M:%S')
                date_end = datetime.strptime(change_day((date + timedelta(days=31)).strftime('%m/%d/%y') + ' 00:00:00'), '%m/%d/%y %H:%M:%S') - timedelta(seconds=1)

        num_all_messages = mysql_count_tg_users_by_dates(date_start, date_end, project_id=None, whereto='')
        num_id_messages = mysql_count_tg_users_by_dates(date_start, date_end, project_id=project_id, whereto='')
        num_wts_messages = mysql_count_tg_users_by_dates(date_start, date_end, project_id=project_id, whereto='WTS')
        num_wtb_messages = mysql_count_tg_users_by_dates(date_start, date_end, project_id=project_id, whereto='WTB')
        metric = TgMetric(
            None,
            num_all_messages,
            num_id_messages,
            num_wts_messages,
            num_wtb_messages,
            0,
            date_end
        )
        return metric

# вычисление рейтинга по метрикам
def collect_rating(metric):
    # соотношение количества активных пользователей Tg и активных по проекту - ?%
    # соотношение количества активных WTS и WTB по проекту - ?%
    # если какая-то метрика = 0, то возвращается рейтинг типа "Недостаточно данных" (0)
    # если помметка scam, то рейтинг делится на (10 * metric.num_scam)
    if not metric.num_all or not metric.num_id or not metric.num_wtb or not metric.num_wts:
        return 0

    rating = (metric.num_id / metric.num_all + metric.num_wtb / metric.num_wts) * 100
    if metric.num_scam:
        rating = rating / (10 * metric.num_scam)
    return int(round(rating))


tz = pytz.timezone(config['Grabber']['timezone'])

if __name__ == '__main__':
    mysql_init()
    print('start')
    if 1:
        if is_first:
            no_index_projects = mysql_get_no_index_projects()
            for project in no_index_projects:
                indexes = mysql_get_indexes(project.id)
                if indexes:
                    print(len(indexes), 'ключей')
                    messages = mysql_get_messages_by_indexes(indexes)
                    print(len(messages), 'сообщений')
                    mysql_detach(project.id)
                    mysql_attach(messages, project.id)
                    mysql_set_project_indexed(project.id, 1)

#            date_begin = tz.localize(mysql_get_first_message().date)
            date_begin = mysql_get_first_message().date
            print("date_begin:", date_begin)
#            date_now = tz.localize(datetime.now())
            date_yesterday = datetime.now() - timedelta(days=1)
            print("date_now:", date_yesterday)

            all_projects = mysql_get_all_projects()
            for project in all_projects:
                date_item = date_begin
                while date_item <= date_yesterday:
                    metric_day = create_metrics(project.id, date_item, 'day')
                    put_metric(project.id, metric_day, 'day')
                    date_item = date_item + timedelta(days=1)
                    rating = collect_rating(metric_day)
                    mysql_put_rating(project.id, rating)

                date_item = date_begin
                while date_item <= date_yesterday - timedelta(days=7):
                    metric_week = create_metrics(project.id, date_item, 'week')
                    put_metric(project.id, metric_week, 'week')
                    date_item = date_item + timedelta(days=7)

                date_item = date_begin
                while date_item <= date_yesterday:
                    metric_month = create_metrics(project.id, date_item, 'month')
                    put_metric(project.id, metric_month, 'month')
                    date_item = datetime.strptime(change_day((date_item + timedelta(days=31)).strftime('%m/%d/%y') + ' 00:00:00'), '%m/%d/%y %H:%M:%S')



