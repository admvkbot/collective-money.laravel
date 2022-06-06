import configparser
import json
import time

from telethon.sync import TelegramClient
from telethon import connection

# для корректного переноса времени сообщений в json
from datetime import date, datetime, timedelta
import pytz

# классы для работы с каналами
from telethon.tl.functions.channels import GetParticipantsRequest, JoinChannelRequest, LeaveChannelRequest, GetFullChannelRequest
from telethon.tl.types import ChannelParticipantsSearch, PeerUser

# класс для работы с сообщениями
from telethon.tl.functions.messages import GetHistoryRequest, GetFullChatRequest
from telethon.tl.functions.users import GetFullUserRequest

import mysql.connector as conn
import sys

from collections import UserList

config = configparser.ConfigParser()
config.read("config.ini")

# Присваиваем значения внутренним переменным
api_id = int(config['Telegram']['api_id'])
api_hash = config['Telegram']['api_hash']
username = config['Telegram']['username']

client = TelegramClient(username, api_id, api_hash)
#proxy = (proxy_server, proxy_port, proxy_key)
#client = TelegramClient(username, api_id, api_hash), connection=connection.ConnectionTcpMTProxyRandomizedIntermediate, proxy=proxy)

client.start()

db = None
cursor = None


class Channel(object):
    def __init__(self, id, url, title, photo, access_hash, username, invite_users, description, is_active):
        self.id = id
        self.url = url
        self.title = title
        self.photo = photo
        self.access_hash = access_hash
        self.username = username
        self.invite_users = invite_users
        self.description = description
        self.is_active = is_active


def mysql_init():
    global db
    global cursor
    db = conn.connect(
        host=config['MySQL']['host'],
        user=config['MySQL']['user'],
        password=config['MySQL']['password'],
        database=config['MySQL']['database'])
    cursor = db.cursor()


def mysql_put_message(message):
    global db
    global cursor
    sql = "INSERT INTO tg_messages (id, channel_id, date, user_id, message) VALUES (%s, %s, %s, %s, %s)"
    #print(message['date'])
    val = (
        message['id'],
        message['peer_id']['channel_id'],
        message['date'],
        message['from_id']['user_id'],
        message['message']
    )
    try:
        cursor.execute(sql, val)
        db.commit()
        return True
    except:
        return False


def mysql_get_user_info(user_id):
    global db
    global cursor
    user_data = ()
    sql = "SELECT * FROM tg_users WHERE id = '" + str(user_id) + "' LIMIT 1"
    cursor.execute(sql)
    user_data = cursor.fetchall()
    db.commit()
    for row in user_data:
        return {
            'id': row[0],
            'is_bot': row[1],
            'first_name': row[2],
            'last_name': row[3],
            'username': row[4],
            'photo_id': row[5],
            'lang_code': row[6],
            'number_messages': row[7],
        }


def mysql_put_user_info(user):
    global db
    global cursor
    photo_id = None
    if not user.username:
        user.bot = False
        user.first_name = None
        user.last_name = None
        user.photo = None
        user.lang_code = None
    if user.photo:
        photo_id = user.photo.photo_id
#ON DUPLICATE KEY UPDATE name="A", age=19
    sql = "INSERT INTO tg_users (id, is_bot, first_name, last_name, username, photo_id, lang_code, number_messages, is_channel)" \
          " VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = (
        user.id,
        user.bot,
        user.first_name,
        user.last_name,
        user.username,
        photo_id,
        user.lang_code,
        user.number_messages,
        user.is_channel
    )
    try:
        cursor.execute(sql, val)
        db.commit()
    except:
        return False

def mysql_increment_user_info(user_id):
    global db
    global cursor
    sql = "UPDATE IGNORE tg_users SET number_messages = number_messages + 1 WHERE id='"+str(user_id)+"'"
    try:
        cursor.execute(sql)
        db.commit()
    except:
        return False


def mysql_get_all_channels():
    global db
    global cursor
    sql = "SELECT * FROM tg_channels"
    cursor.execute(sql)
    channel_data = cursor.fetchall()
    db.commit()
    out = []
    #print(channel_data)
    for row in channel_data:
        channel = Channel(
            row[0],
            row[1],
            row[2],
            row[3],
            row[4],
            row[5],
            row[6],
            row[7],
            row[8]
        )
        out.insert(0, channel)
    return out


def mysql_update_channel(channel, photo_id):
    global db
    global cursor
    url = 'https://t.me/' + channel.username
    sql = "UPDATE IGNORE tg_channels SET id=%s, title=%s, is_chat=%s, photo_id=%s, username=%s, access_hash=%s WHERE url=%s"
    var = (channel.id, channel.title, channel.megagroup, photo_id, channel.username, channel.access_hash, url)
    try:
        cursor.execute(sql, var)
        db.commit()
    except:
        return False


def mysql_insert_or_update_photo(photo):
    global db
    global cursor
    #print(photo)
    sql = "INSERT INTO tg_photos (id, dc_id, has_video, stripped_thumb)" \
          " VALUES (%s, %s, %s, %s)  ON DUPLICATE KEY UPDATE dc_id=%s, has_video=%s, stripped_thumb=%s"
    val = (
        photo.photo_id,
        photo.dc_id,
        photo.has_video,
        photo.stripped_thumb,
        photo.dc_id,
        photo.has_video,
        photo.stripped_thumb
    )
    try:
        cursor.execute(sql, val)
        db.commit()
    except:
        return False


def mysql_insert_or_update_user_channel(user_id, channel_id):
    global db
    global cursor
    sql = "INSERT INTO tg_user_tg_channel (user_id, channel_id) VALUES (%s, %s)"
    val = (
        user_id,
        channel_id
    )
    #try:
    if 1:
        cursor.execute(sql, val)
        db.commit()
    #except:
    #    return False


async def tg_get_user_info(channel, user_id):
    try:
        user_data = await client(GetFullUserRequest(
            id=user_id
        ))
    except:
        return False
    return user_data.user


def reconnect():
    global client
    client.disconnect()
    client = None
    print('reconnect')
    time.sleep(10)

    client = TelegramClient(username, api_id, api_hash)
    client.start()


async def dump_all_participants(channel):
    """Записывает json-файл с информацией о всех участниках канала/чата"""
    offset_user = 0    # номер участника, с которого начинается считывание
    limit_user = 100   # максимальное число записей, передаваемых за один раз
    all_participants = []   # список всех участников канала
    filter_user = ChannelParticipantsSearch('')
    count = 0

    while True:
        participants = await client(GetParticipantsRequest(channel,
            filter_user, offset_user, limit_user, hash=0))
        if not participants.users:
            break
        all_participants.extend(participants.users)
        offset_user += len(participants.users)

        all_users_details = []  # список словарей с интересующими параметрами участников канала
        count = count + 1

        for participant in all_participants:
            all_users_details.append({"id": participant.id,
                                      "first_name": participant.first_name,
                                      "last_name": participant.last_name,
                                      "user": participant.username,
                                      "phone": participant.phone,
                                      "is_bot": participant.bot})

        with open('channel_users.json', 'w', encoding='utf8') as outfile:
            json.dump(all_users_details, outfile, ensure_ascii=False)

        if count > 10:
            break


async def dump_all_messages(channel):
    global cursor
    global db
    global parsing_messages_flag
    global flag_start
    """Записывает json-файл с информацией о всех сообщениях канала/чата"""
    offset_msg = 0    # номер записи, с которой начинается считывание
    limit_msg = 100   # максимальное число записей, передаваемых за один раз

    all_messages = []   # список всех сообщений
    total_messages = 0
    total_count_limit = 0  # поменяйте это значение, если вам нужны не все сообщения

    class User(object):
        def __init__(self, id, username, number_messages, is_channel):
            self.id = id
            self.username = username
            self.number_messages = number_messages
            self.is_channel = is_channel

    class DateTimeEncoder(json.JSONEncoder):
        '''Класс для сериализации записи дат в JSON'''
        def default(self, o):
            if isinstance(o, datetime):
                return o.isoformat()
            if isinstance(o, bytes):
                return list(o)
            return json.JSONEncoder.default(self, o)

    while True:
        if parsing_messages_flag:
            offset_msg = 0
        history = await client(GetHistoryRequest(
            peer=channel,
            offset_id=offset_msg,
            offset_date=None, add_offset=0,
            limit=limit_msg, max_id=0, min_id=0,
            hash=0))
        if not history.messages:
            print("No messages")
            break
        messages = history.messages
        for message in messages:
            #print(message.to_dict())
            is_channel = False

            if message.date < tz.localize(datetime.now() - timedelta(days=int(config['Bot']['timedelta']))):
                print('Сообщения спаршены')
                parsing_messages_flag = True
                flag_start = True
                break
            message_dict = message.to_dict()

            try:
                user_id = message_dict['from_id']['user_id']
                #print("User:", user_id)
            except KeyError:
                user_id = message_dict['from_id']['channel_id']
                print("Channel:", user_id)
                is_channel = True
                message_dict['from_id']['user_id'] = user_id

            if not mysql_put_message(message_dict) and not parsing_messages_flag and not int(config['Bot']['first-run']):
                print('Новые сообщения спаршены')
                parsing_messages_flag = True
                flag_start = True
                break

            #print(PeerUser(user_id))
            mysql_user_data = mysql_get_user_info(user_id)
            #print(await client.get_entity(PeerUser(user_id)))
            if not mysql_user_data:
                tg_user_data = await tg_get_user_info(channel, PeerUser(user_id))
                if is_channel:
                    print("--", tg_user_data)
                if tg_user_data:
                    tg_user_data.number_messages = 1
                    tg_user_data.is_channel = is_channel
                    if tg_user_data.photo:
                        mysql_insert_or_update_photo(tg_user_data.photo)
                else:
                    tg_user_data = User(user_id, None, 1, is_channel)
                mysql_put_user_info(tg_user_data)
            else:
                mysql_increment_user_info(user_id)

            mysql_insert_or_update_user_channel(user_id, channel.id)

        offset_msg = messages[len(messages) - 1].id
        total_messages = total_messages + 1
        if total_count_limit != 0 and total_messages >= total_count_limit:
            print("Граббер: Достигнут лимит количества сообщений")
            break

#        with open('channel_messages.json', 'w', encoding='utf8') as outfile:
#            json.dump(all_messages, outfile, ensure_ascii=False, cls=DateTimeEncoder)

        if parsing_messages_flag:
            time.sleep(3)
            break

mysql_init()
tz = pytz.timezone(config['Bot']['timezone'])
parsing_messages_flag = False
url = config['Telegram']['url_channel']

channels = mysql_get_all_channels()

flag_start = True

async def main():
    global flag_start
    global parsing_messages_flag
    global channels
    if int(config['Bot']['first-run']):
        item_channel = None
        print("flag_start:", flag_start)
        #await dump_all_participants(channel)
        while len(channels):
            parsing_messages_flag = False
            print("WHILE:", flag_start)
            if flag_start:
                item_channel = channels.pop()
                print(item_channel.url)
            if not item_channel.is_active:
                time.sleep(1)
                continue
            url = item_channel.url
            channel = await client.get_entity(url)
            if flag_start:
                mysql_insert_or_update_photo(channel.photo)
                mysql_update_channel(channel, channel.photo.photo_id)
                await client.get_participants(channel, limit=5000)
            flag_start = False
            await dump_all_messages(channel)
        sys.exit()
    else:
        while len(channels):
            parsing_messages_flag = False
            if flag_start:
                item_channel = channels.pop()
            if not item_channel.is_active:
                continue
            url = item_channel.url
            channel = await client.get_entity(url)
            if flag_start:
                mysql_insert_or_update_photo(channel.photo)
                mysql_update_channel(channel, channel.photo.photo_id)
                await client.get_participants(channel, limit=5000)
            flag_start = False
            await dump_all_messages(channel)

        channels = mysql_get_all_channels()

        while len(channels) and 0:
            parsing_messages_flag = True
            item_channel = channels.pop()
            if not item_channel.is_active:
                continue
            url = item_channel.url
            channel = await client.get_entity(url)
            if flag_start:
                mysql_insert_or_update_photo(channel.photo)
                mysql_update_channel(channel, channel.photo.photo_id)
                await client.get_participants(channel, limit=5000)
            flag_start = False
            await dump_all_messages(channel)



    #result = await client(GetFullUserRequest(id=522023645))
    #print(result)

with client:
        client.loop.run_until_complete(main())
