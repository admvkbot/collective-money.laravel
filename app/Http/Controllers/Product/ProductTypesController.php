<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductTypesResource;
use Illuminate\Http\Request;
use App\Models\Product;


class ProductTypesController extends Controller
{
   public function __invoke($id)
   {
      $product_types = Product::find($id)->product_types;
      //return response()->json($product_types);
      $rawResult = ProductTypesResource::collection($product_types);
      $result = [];
      foreach ($rawResult as $item) {
         array_push($result, $item->id);
      }
      return response()->json($result);
      //return ProductTypesResource::collection($product_types);
   }
}
