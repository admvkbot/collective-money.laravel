<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductType extends Model
{
   protected $table = 'product_types';
   protected $guarded = false;

   protected $fillable = [
     'name',
     'description'
 ];

 public function products() {
   return $this->belongsToMany(Product::class, 'products_product_types', 'product_type_id', 'product_id');
}

}


