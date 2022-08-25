<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Controllers\API\ApiController;

class EditController extends BaseController
{
   public function __invoke($product_id, Request $request)
   {
      if (ApiController::checkModerator()) {
         $data = $request->instance();

         $out = Product::where('id', $product_id)
            ->update([
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
         $this->service->insertProductTypes($data);
         return response()->json($out);
      }
      return response()->json([]);
   }
}
