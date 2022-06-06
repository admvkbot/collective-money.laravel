<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserDataController extends Controller
{
    public function __invoke() {
      return auth()->user()->privilege;
      //return 0;
    }
}
   