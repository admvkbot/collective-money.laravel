import configparser
import json
import time

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


def mysql_init():
    global db
    global cursor
    db = conn.connect(
        host=config['MySQL']['host'],
        user=config['MySQL']['user'],
        password=config['MySQL']['password'],
        database=config['MySQL']['database'])
    cursor = db.cursor()


def mysql_get_no_index_projects():
    global db
    global cursor
    sql = "SELECT id, is_indexed FROM projects WHERE NOT is_indexed"
    cursor.execute(sql)
    data = cursor.fetchall()
    db.commit()
    out = []
    for row in data:
        project = Project(
            row[0],
            row[1],
        )
        out.insert(0, project)
    return out


def mysql_get_indexes(project_id):
    global db
    global cursor
    sql = "SELECT field FROM indexes WHERE project_id=" + str(project_id)
    cursor.execute(sql)
    data = cursor.fetchall()
    db.commit()
    out = []
    for row in data:
        index = Index(
            row[0],
        )
        out.insert(0, index)
    return out


def mysql_get_messages_by_indexes(indexes):
    global db
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
    db.commit()
    out = []
    for row in data:
        message = Id(
            row[0],
        )
        out.insert(0, message)
    return out


def mysql_detach(project_id):
    global db
    global cursor
    sql = "DELETE FROM tg_message_project WHERE project_id=" + str(project_id)
    result = cursor.execute(sql)
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
        result = cursor.execute(sql, val)
    db.commit()


def mysql_set_project_indexed(project_id, status):
    global db
    global cursor
    sql = "UPDATE projects SET is_indexed=" + str(status) + " WHERE id=" + str(project_id)
    result = cursor.execute(sql)
    db.commit()


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



