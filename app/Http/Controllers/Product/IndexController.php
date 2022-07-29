<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends BaseController
{
   public function __invoke($top, Request $request)
   {
      $filter = $request->instance();
      $products = $this->service->getProductsByString($filter['filter']);
      if ($top) {
         $products = $products->limit($top);
      }
      $products = $products->toBase()->get();
      $products = $this->servicePoductActivity->addActivities($products);
      return response()->json($products);
   }
}
