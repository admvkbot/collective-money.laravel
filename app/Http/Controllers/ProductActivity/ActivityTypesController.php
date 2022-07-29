<?php

namespace App\Http\Controllers\ProductActivity;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductActivityType;


class ActivityTypesController extends Controller
{
   public function __invoke()
   {
      $type = ProductActivityType::toBase()->get();
      return response()->json($type);
   }
}
