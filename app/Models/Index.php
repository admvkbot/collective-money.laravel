<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Index extends Model
{
   protected $table = 'indexes';
   protected $guarded = false;

   protected $fillable = [
      'product_id',
      'field',
      'is_primary'
 ];

}
