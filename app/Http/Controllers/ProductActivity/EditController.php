<?php

namespace App\Http\Controllers\ProductActivity;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\ApiController;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ProductActivity;
use Illuminate\Support\Facades\Auth;

//use App\Http\Controllers\Auth;

class EditController extends BaseController
{
   public function __invoke( $activity_id, Request $request)
   {
      if (ApiController::checkModerator()) {

         $data = $request->instance();
         $out = ProductActivity::where('id', $activity_id)
            ->update([
               'product_id' => $data['product_id'],
               'product_activitie_type_id' => $data['activity_id'],
               'close_at' => $data['date'],
               'description' => $data['description'],
               'source_url' => $data['url'],
               'is_moderated' => true,
            ]);
         //$data['product_id'] = $out->id;
         //$out = $this->serviceIndex->insertIndex($data);
         return response()->json($out);
      }
      return response()->json([]);
   }
}
