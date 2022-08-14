<?php

namespace App\Http\Controllers\ProductActivity;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\ApiController;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ProductActivity;
use Illuminate\Support\Facades\Auth;

//use App\Http\Controllers\Auth;

class CreateController extends BaseController
{
   public function __invoke(Request $request)
   {
      $is_moderator = ApiController::checkModerator() ? true : false;

      $data = $request->instance();
      $out = ProductActivity::firstOrCreate([
         'product_id' => $data['product_id'],
         'product_activitie_type_id' => $data['activity_id'],
         'close_at' => $data['date'],
         'description' => $data['description'],
         'source_url' => $data['url'],
         'is_moderated' => $is_moderator,
         'moderate_id' => 0,
      ]);
      //$data['product_id'] = $out->id;
      //$out = $this->serviceIndex->insertIndex($data);
      return response()->json($out);
   }
}
