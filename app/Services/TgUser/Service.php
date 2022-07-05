<?php

namespace App\Services\TgUser;

use App\Models\TgMessage;
use App\Models\TgUser;
//use Illuminate\Support\Facades\DB;

class Service
{
   public function getTgUserByString($filter)
   {
      if (!$filter['query']) {
         return "";
      }
      //return  TgUser::first();
      return  TgUser::firstWhere('username', $filter['query']);
   }
}
