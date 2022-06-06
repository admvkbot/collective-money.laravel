<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Social extends Model
{
   protected $table = 'socials';
   protected $quarded = false;

   protected $fillable = [
      'account_id',
      'socialid',
      'url',
      'status',
      'wsubscribe',
      'social_network_id',
      'description'
 ];


}
