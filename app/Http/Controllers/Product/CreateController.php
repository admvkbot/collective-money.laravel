<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\ApiController;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;

//use App\Http\Controllers\Auth;

class CreateController extends BaseController
{
   public function __invoke(Request $request)
   {

      if (ApiController::checkModerator()) {

         $data = $request->instance();
         $out = Product::firstOrCreate([
            'name' => $data['name'],
            'uri' => $this->service->getUriByName($data['name']),
            /*'product_type_id' => $data['type'],*/
            'website_url' => $data['url'],
            'discord' => $data['discord'],
            'twitter' => $data['twitter'],
            'medium' => $data['medium'],
            'youtube' => $data['youtube'],
            'telegram' => $data['telegram'],
            'description' => $data['description'],
         ]);
         $data['product_id'] = $out->id;
         $out = $this->serviceIndex->insertIndex($data);
         $this->service->insertProductTypes($data);         
         return response()->json($out);
      }
      return response()->json('[]');
   }
}
