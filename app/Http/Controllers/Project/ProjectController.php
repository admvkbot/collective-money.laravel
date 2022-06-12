<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;


class ProjectController extends Controller
{
   public function __invoke($id)
   {
      $out = Project::where('id', $id) 
         /*->toBase()*/
         ->first();
      return response()->json($out);
   }
}
