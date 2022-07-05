<?php

namespace App\Http\Controllers\Scam;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SearchProductController extends BaseController
{
   public function __invoke(Request $request)
   {
      $filter = $request->instance();

      $out = $this->serviceProduct->getProductByString($filter);

      return response()->json($out);
   }
}
