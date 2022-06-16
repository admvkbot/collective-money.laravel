<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TgUser extends Model
{
   protected $table = 'tg_users';
   protected $guarded = false;

   protected $fillable = [
      'id',
      'username',
      'is_bot',
      'first_name',
      'last_name',
      'photo_id',
      'lang_code',
      'number_messages',
      'is_channel',
      'description',
      'is_active',
      'rating'
   ];
   protected $primaryKey = 'id'; // or null
   public $incrementing = false;
}
