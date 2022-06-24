<?php

namespace App\Http\Controllers\Scam;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Scam;
use App\Http\Controllers\API\ApiController;

class EditController extends Controller
{
   public function __invoke($project_id, Request $request)
   {
      if (ApiController::checkModerator()) {
         $data = $request->instance();

         $out = "";

         return response()->json($out);
      }
      return response()->json([]);
   }
}
