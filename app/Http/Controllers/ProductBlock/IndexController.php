<?php

namespace App\Http\Controllers\ProductBlock;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductBlockResourceCollection;
use Illuminate\Http\Request;
use App\Models\ProductStatus;
use App\Http\Controllers\API\ApiController;

class IndexController extends Controller
{
   public function __invoke($id)
   {
      if (!ApiController::checkModerator())
         return response()->json([]);

      $out = ProductStatus::where('product_id', $id)
         ->orderByDesc('date')
         ->get();
      //return response()->json($out);     
      return new ProductBlockResourceCollection($out);
   }
}
