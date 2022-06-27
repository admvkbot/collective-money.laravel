<?php

namespace App\Http\Controllers\ProductBlock;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductStatus;
use App\Http\Controllers\API\ApiController;

//use App\Http\Controllers\Auth;

class CreateController extends Controller
{
    public function __invoke(Request $request)
    {

      if (ApiController::checkModerator()) {
         $data = $request->instance();

         $buttons = explode(',', $data['buttons']);

         $out = ProductStatus::firstOrCreate([
            'product_id' => $data['productId'],
            'name' => $data['name'],
            'stage' => $data['stage'],
            'description' => $data['description'],
            'date' => $data['date'],
            'button1' => isset($buttons[0]) ? $buttons[0] : Null,
            'button2' => isset($buttons[1]) ? $buttons[1] : Null,
            'button3' => isset($buttons[2]) ? $buttons[2] : Null,
            'button4' => isset($buttons[3]) ? $buttons[3] : Null,
            'button5' => isset($buttons[4]) ? $buttons[4] : Null,
        ]);
        return response()->json($out);
   

      }
      return response()->json('[]');
    }
}
