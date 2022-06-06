<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Account;
//use App\Http\Controllers\Auth;

class CreateController extends Controller
{
    public function __invoke(Request $request)
    {
      $userId = $request->user()->id;
      $data = $request->instance();
      $out = Account::firstOrCreate([
         'user_id' => $userId,
         'name' => $data['name'],
         'email' => $data['email'],
         'description' => $data['description'],
         'status' => 0,
         'level_status' => 0,
     ]);
     return response()->json($out);
    }
}
