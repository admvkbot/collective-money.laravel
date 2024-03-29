<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
   protected $table = 'products';
   protected $guarded = false;
   
   public function tg_messages()
   {
      return $this->belongsToMany(TgMessage::class, 'tg_message_product', 'product_id', 'message_id');//->using(MessageProduct::class);;
   }

   public function product_types()
   {
      return $this->belongsToMany(ProductType::class, 'products_product_types', 'product_id', 'product_type_id');//->using(MessageProduct::class);;
   }
}
