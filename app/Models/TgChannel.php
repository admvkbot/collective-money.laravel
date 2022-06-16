<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TgChannel extends Model
{
   protected $table = 'tg_channels';
   protected $guarded = false;

   protected $fillable = [
      'id',
      'url',
      'title',
      'username',
      'is_chat',
      'photo_id',
      'description',
      'access_hash',
      'is_active'
   ];
   protected $primaryKey = 'id'; // or null
   public $incrementing = false;
}
