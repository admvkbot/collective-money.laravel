<?php

namespace App\Http\Controllers\Scam;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends BaseController
{
   public function __invoke(Request $request)
   {
      $filter = $request->instance();

      $out = $this->service->getNewScamTgMessages($request, $filter);

      return response()->json($out);
   }
}
