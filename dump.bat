mysqldump -uroot -pconnect cm products product_statuses indexes tg_messages tg_message_product tg_users tg_channels tg_photos tg_user_tg_channel day_tg_metrics week_tg_metrics month_tg_metrics > cm-tg.sql
rem mysqldump -uroot -pconnect cm tg_photos > cm-tg2.sql
