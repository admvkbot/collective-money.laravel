<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TgMessage extends Model
{
   protected $table = 'tg_messages';
   protected $quarded = false;

   protected $fillable = [
      'id',
      'channel_id',
      'date',
      'user_id',
      'message',
      'is_primary'
   ];
   protected $primaryKey = 'id'; // or null
   public $incrementing = false;
}
