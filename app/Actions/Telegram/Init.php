<?php

namespace App\Actions\Telegram;

use NotificationChannels\Telegram\TelegramUpdates;


class Init
{
    public static function test()
    {
         $updates = TelegramUpdates::create()
         // (Optional). Get's the latest update. NOTE: All previous updates will be forgotten using this method.
         // ->latest()
         
         // (Optional). Limit to 2 updates (By default, updates starting with the earliest unconfirmed update are returned).
         ->limit(2)
         
         // (Optional). Add more params to the request.
         ->options([
            'timeout' => 0,
         ])
         ->get();
   
         if($updates['ok']) {
               // Chat ID
               $chatId = $updates['result'][0]['message']['chat']['id'];
         }    
    }
}
