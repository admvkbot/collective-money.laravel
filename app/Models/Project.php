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
     'project_type_id',
     'status',
     'rating',
     'num_tg_mesages',
     'num_tg_users',
     'website_name',
     'website_url',
     'discord',
     'twitter',
     'medium',
     'youtube',
     'telegram',
     'logo_url',
     'price',
     'is_locked',
     'description',
 ];

}
