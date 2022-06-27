<?php

namespace App\Http\Controllers\Index;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Index;
use App\Http\Controllers\API\ApiController;

class EditController extends BaseController
{
   public function __invoke(Request $request)
   {
      if (ApiController::checkModerator()) {
         $data = $request->instance();

         $this->service->eraseIndex($data['product_id']);

         $out = $this->service->insertIndex($data);

         return response()->json($out);
      }
      return response()->json([]);
   }
}
