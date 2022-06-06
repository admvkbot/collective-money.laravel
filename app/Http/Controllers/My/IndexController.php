<?php

namespace App\Http\Controllers\My;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{
    public function __invoke()
    {
       $id =  Auth::id();
       $out = User::where('id', $id)->select(
         'name', 
         'email',
         'tg_username',
         'tg_id',
         'parent_id',
         'invite'
       )
       ->first();
       return response()->json($out);
    }
}
