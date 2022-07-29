<?php

namespace App\Http\Controllers\ProductActivity;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductActivity;


class IndexController extends BaseController
{
   public function __invoke($product_id, Request $request)
   {
      $data = $request->instance();
      $activities = $this->service->getProductActivities($product_id, $data);
      return response()->json($activities);
   }
}
