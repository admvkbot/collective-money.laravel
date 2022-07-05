<?php

namespace App\Http\Controllers\Scam;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SearchTgUserController extends BaseController
{
   public function __invoke(Request $request)
   {
      $filter = $request->instance();

      $out = $this->serviceTgUser->getTgUserByString($filter);

      return response()->json($out);
   }
}
