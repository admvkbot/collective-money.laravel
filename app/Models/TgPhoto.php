<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TgPhoto extends Model
{
   protected $table = 'tg_photos';
   protected $quarded = false;

   protected $fillable = [
      'id',
      'dc_id',
      'has_video',
      'stripped_thumb'
   ];
   protected $primaryKey = 'id'; // or null
   public $incrementing = false;
}
