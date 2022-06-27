<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class IndexController extends Controller
{
   public function __invoke($top, Request $request)
   {
      $filter = $request->instance();
      $out = Product::where(function ($query) use ($filter) {
         $query->where('name', 'LIKE', '%' . $filter['filter'] . '%')
            ->orWhere('website_url', 'LIKE', '%' . $filter['filter'] . '%');
      });
      if ($top) {
         $out = $out->limit($top);
      }
      $out = $out->toBase()->get();
      return response()->json($out);
   }
}
