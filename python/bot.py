import logging
import configparser
from telegram import Update, InlineQueryResultArticle, InputTextMessageContent, InlineKeyboardMarkup, InlineKeyboardMarkup, InlineKeyboardButton
from telegram.ext import filters, MessageHandler, ApplicationBuilder, CallbackContext, CommandHandler, InlineQueryHandler, ContextTypes
from sys import exit
import mysql.connector as conn
import re
import base64
import urllib.parse
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import os
from datetime import datetime
import sys

config = configparser.ConfigParser()
config.read("config.ini")

path = config['All']['path']
stdout = path + '/bot_out.log'
stderr = path + '/bot_err.log'
token = config['Bot']['token']

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

db = None
cursor = None


def mysql_init():
    global db
    global cursor
    db = conn.connect(
        host=config['MySQL']['host'],
        user=config['MySQL']['user'],
        password=config['MySQL']['password'],
        database=config['MySQL']['database'])
    cursor = db.cursor()


def get_user_info(update):
    return update['message']['chat']


def check_is_registered(user_id):
    global db
    global cursor
    sql = "SELECT * FROM users WHERE tg_id = '" + str(user_id) + "' LIMIT 1"
    cursor.execute(sql)
    user_data = cursor.fetchall()
    db.commit()
    for row in user_data:
        return row[0]
    return False


def check_invite(user_id, invite):
    global db
    global cursor
    sql = "SELECT * FROM users WHERE tg_id != '" + str(user_id) + "' AND invite='" + invite + "' LIMIT 1"
    cursor.execute(sql)
    user_data = cursor.fetchall()
    db.commit()
    for row in user_data:
        return row
    return False


def get_invite(update):
    try:
        params = update['message']['text'].split(' ')
        pattern = "^[\w_]{"+config['Bot']['invite_length']+"}$"
        if params[1] and re.search(pattern, params[1]):
            return params[1]
    except:
        pass
    return False


user_id = None
user_username = None
def encrypt(raw):
    key = config['Bot']['key']
    raw = pad(raw.encode(), 16)
    cipher = AES.new(key.encode('utf-8'), AES.MODE_ECB)
    return base64.b64encode(cipher.encrypt(raw))


def encrypt_aes(id, username, invite):
    message = 'id=' + str(id) + '&username=' + username + '&invite=' + invite
    return urllib.parse.quote_plus(encrypt(message).decode("utf-8", "ignore"))


def extract_unique_code(text):
    # Extracts the unique_code from the sent /start command.
    return text.split()[1] if len(text.split()) > 1 else None


invite = False
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    global user_id
    global user_username
    global invite
    user = get_user_info(update)
    user_id = user['id']
    user_username = user['username']

    if not check_is_registered(user['id']):
        await context.bot.send_message(chat_id=update.effective_chat.id, text="Приветствуем в экосистеме Collective Money!\n"
                                                                          "Это бот, необходимый для работы с ней.")
        invite = get_invite(update)
        if invite:
            master_user = check_invite(user_id, invite)
            print(master_user)
            if master_user:
                await context.bot.send_message(chat_id=update.effective_chat.id,
                                               text="Вы приглашены пользователем @" + master_user[3])
            else:
                await context.bot.send_message(chat_id=update.effective_chat.id,
                                               text="Ссылка устарела.\nОбратитесь к пригласившему вас пользователю.")
                return False
        else:
            await context.bot.send_message(chat_id=update.effective_chat.id,
                                           text="Регистрация в Collective Money возможна только по приглашению.\n"
                                                "Приглашение можно получить от любого пользователя из сообщества @collectivemoney")
            return False

        await url(update, context)
    else:
        if user.first_name:
            name = user['first_name']
        else:
            name = user['username']
        update.message.text = 'С возвращением, ' + name + '!'
        await echo(update, context)

async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await context.bot.send_message(chat_id=update.effective_chat.id, text=update.message.text)


async def caps(update: Update, context: CallbackContext):
    text_caps = ' '.join(context.args).upper()
    await context.bot.send_message(chat_id=update.effective_chat.id, text=text_caps)


async def inline_caps(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.inline_query.query
    if not query:
        return
    results = []
    results.append(
        InlineQueryResultArticle(
            id=query.upper(),
            title='Caps',
            input_message_content=InputTextMessageContent(query.upper())
        )
    )
    await context.bot.answer_inline_query(update.inline_query.id, results)


async def url_handler():
    print('OK')


async def url(update: Update, context: CallbackContext) -> None:
    keyboard = [
        [
            InlineKeyboardButton("Option 1", callback_data="1"),
            InlineKeyboardButton("Option 2", callback_data="2"),
        ],
        [InlineKeyboardButton("Option 3", callback_data="3")],
    ]
    #await update.message.reply_text("Please choose:", reply_markup=markup)
    str = encrypt_aes(user_id, user_username, invite)
    btn = InlineKeyboardButton(text='Перейти', url='https://collective.money/sign-up?q=' + str)
    markup = InlineKeyboardMarkup([[btn]])
    await context.bot.send_message(chat_id=update.effective_chat.id, text='Продолжите регистрацию на сайте Collective Money', reply_markup=markup)


async def unknown(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Sorry, I didn't understand that command.")


def set_pipe():
    global path
    f = open(path + '/pipe_bot', 'w+')
    f.close()


def check_pipe():
    global path
    return os.path.isfile(path + '/pipe_bot')


def del_pipe():
    global path
    os.remove(path + '/pipe_bot')


def log_time(string, file=""):
    if file:
        f = open(file, "a+")
        f.write(str(datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f')[:-3]) + ': ' + string + "\n")
        f.close()
    else:
        print(str(datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f')[:-3]) + ': ' + string)


if 1:
    #if check_pipe():
    #    log_time("Terminated")
    #    sys.exit()
    #set_pipe()
    mysql_init()
    log_time('START BOT')
    sys.stderr.flush()
    with open(stderr, 'a+') as stderr:
        os.dup2(stderr.fileno(), sys.stderr.fileno())

    sys.stdout.flush()
    with open(stdout, 'a+') as stdout:
        os.dup2(stdout.fileno(), sys.stdout.fileno())



if __name__ == '__main__':


    application = ApplicationBuilder().token(token).build()

    start_handler = CommandHandler('start', start)
    echo_handler = MessageHandler(filters.TEXT & (~filters.COMMAND), echo)
    caps_handler = CommandHandler('caps', caps)
    inline_caps_handler = InlineQueryHandler(inline_caps)
    #url_button_handler = MessageHandler('Message', url)

    unknown_handler = MessageHandler(filters.COMMAND, unknown)
    #welcome_handler = MessageHandler(commands=['start'])


    application.add_handler(CommandHandler("url", url))
    application.add_handler(echo_handler)
    application.add_handler(start_handler)
    application.add_handler(caps_handler)
    application.add_handler(inline_caps_handler)

    application.add_handler(unknown_handler)

    application.run_polling()
