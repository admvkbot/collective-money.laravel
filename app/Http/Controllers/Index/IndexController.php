<?php

namespace App\Http\Controllers\Index;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Index;

class IndexController extends Controller
{
   public function __invoke($project_id, Request $request)
   {
      $out = Index::where('project_id', $project_id)
         ->toBase()
         ->get();
      return response()->json($out);
   }
}
