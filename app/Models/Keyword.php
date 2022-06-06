<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
   protected $table = 'keywords';
   protected $quarded = false;

   protected $fillable = [
     'keyword',
     'type',
 ];


}
