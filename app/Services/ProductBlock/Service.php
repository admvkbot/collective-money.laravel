<?php

namespace App\Services\ProductBlock;

use App\Models\ProductStatus;

class Service
{
   public function deleteBlock($id)
   {
      return ProductStatus::firstWhere('id', $id)->delete();
   }

   public function deleteBlocksByProductId($product_id)
   {
      return ProductStatus::where('product_id', $product_id)->delete();
   }

}
