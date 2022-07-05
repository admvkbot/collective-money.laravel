<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;


class ProductModeratorController extends Controller
{
   public function __invoke($id)
   {
      $product = Product::where('id', $id)
         ->first();
      //$product = Product::find(1);
         //dd($product);
         //dd($product->tg_messages()->attach(array(296676, 296668))->toSql());
         //dd($product->tg_messages()->detach());
      return response()->json($product);
   }
}
