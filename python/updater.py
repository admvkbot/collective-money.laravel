import configparser
import json
import time

from datetime import date, datetime, timedelta

import mysql.connector as conn
import sys

config = configparser.ConfigParser()
config.read("config.ini")
