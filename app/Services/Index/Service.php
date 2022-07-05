<?php

namespace App\Services\Index;

use App\Models\Index;
use App\Models\Product;

class Service
{
   public function getIndexesByProductId($product_id)
   {
      return Index::where('product_id', $product_id)
      ->toBase()
      ->get();
   }
   public function eraseIndex($product_id)
   {
      return Index::where('product_id', $product_id)
         ->delete();
   }

   public function insertIndex($data)
   {
      $query = [];

      $keys = explode("\n", $data['index']);

      foreach ($keys as $row) {
         if ($row) 
            Index::insert(['product_id' => $data['product_id'], 'field' => $row]);      
      }

      Product::where('id', $data['product_id'])->update(['is_indexed' => False]);

      return count($keys);
   }
}
