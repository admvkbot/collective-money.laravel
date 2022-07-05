<?php

namespace App\Services\Scam;

use App\Models\TgMessage;
use Illuminate\Support\Facades\DB;

class Service
{
   public function getNewScamTgMessages($filter)
   {
      return  DB::table('tg_messages')
         ->join('tg_users', 'tg_messages.user_id', '=', 'tg_users.id')
         ->join('tg_channels', 'tg_messages.channel_id', '=', 'tg_channels.id')
         ->where(function ($query) use ($filter) {
            $query->where('message', 'LIKE', '%' . $filter['filter'] . '%')
               ->orWhere('tg_users.username', 'LIKE', '%' . $filter['filter'] . '%')
               ->orWhere('first_name', 'LIKE', '%' . $filter['filter'] . '%')
               ->orWhere('last_name', 'LIKE', '%' . $filter['filter'] . '%');
         })
         ->where('is_scam', true)
         ->where('is_scam_verified', false)
         ->select(
            'tg_messages.id',
            'message',
            'tg_users.username',
            'first_name',
            'last_name',
            'tg_channels.username AS channel_username',
            'tg_channels.url AS channel_url',
            'tg_channels.title AS channel_title',
            'tg_messages.date'
         )
         ->limit(50)
         ->get();
   }
}
