<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductStatus extends Model
{
   protected $table = 'product_statuses';
   protected $guarded = false;

   protected $fillable = [
     'product_id',
     'name',
     'stage',
     'date',
     'button1',
     'button2',
     'button3',
     'button4',
     'button5',
     'status',
     'description'
 ];


}
