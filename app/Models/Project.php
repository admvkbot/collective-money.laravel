<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
   protected $table = 'projects';
   protected $quarded = false;

   protected $fillable = [
     'name',
     'status',
     'rating',
     'num_tg_mesages',
     'num_tg_users',
     'website_name',
     'website_url',
     'description',
 ];

}
