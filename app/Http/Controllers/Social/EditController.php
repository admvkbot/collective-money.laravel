<?php

namespace App\Http\Controllers\Social;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Social;

class EditController extends Controller
{
   public function __invoke(Request $request)
   {
     $data = $request->instance();

     $social = Social::where('id', $data['id'])
         ->find(1);

         $social->account_id = $data['account_id'];
         $social->socialid = $data['socialid'];
         $social->social_network_id = $data['social_network_id'];
         $social->url = $data['url'];
         $social->description = $data['description'];

         $out = $social->save();

    return response()->json($out);
   }
}
