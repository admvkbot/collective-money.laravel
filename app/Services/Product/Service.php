<?php

namespace App\Services\Product;

use App\Models\Product;

class Service
{
   public function storePathLogo($product_id, $path)
   {
      return Product::where('id', $product_id)
         ->update(['logo_url' => $path]);
   }

   public function deleteProduct($product_id)
   {
      Product::firstWhere('id', $product_id)->delete();
   }

   public function detachTgMessageProduct($product_id)
   {
      $product = Product::where('id', $product_id)->find(1);
      $product->tg_messages()->detach();
   }

   public function getProductByString($filter)
   {
      if (!$filter['query']) {
         return "";
      }
      //return  Product::first();
      return Product::firstWhere('name', $filter['query']);
   }

   public function getUriByName($str)
   {
      return preg_replace('/_/', '-', preg_replace('/\W/', '', preg_replace('/\s/', '_', strtolower($str))));
   }
}
