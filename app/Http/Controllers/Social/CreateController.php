<?php

namespace App\Http\Controllers\Social;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Social;
//use App\Http\Controllers\Auth;

class CreateController extends Controller
{
    public function __invoke(Request $request)
    {
      //$userId = $request->user()->id;
      $data = $request->instance();
      //dd($data);
      $out = Social::firstOrCreate([
         'account_id' => $data['accountId'],
         'socialid' => $data['socialid'],
         'social_network_id' => $data['socialNetworkId'],
         'url' => $data['url'],
         'description' => $data['description'],
     ]);
     return response()->json($out);
    }
}
