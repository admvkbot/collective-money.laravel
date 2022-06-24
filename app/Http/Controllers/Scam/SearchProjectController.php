<?php

namespace App\Http\Controllers\Scam;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SearchProjectController extends BaseController
{
   public function __invoke(Request $request)
   {
      $filter = $request->instance();

      $out = $this->serviceProject->getProjectByString($filter);

      return response()->json($out);
   }
}
