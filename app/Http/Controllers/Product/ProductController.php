<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;


class ProductController extends BaseController
{
   public function __invoke($product_uri)
   {
      $product = $this->service->getProductByUri($product_uri);
      return response()->json($product);
   }
}
