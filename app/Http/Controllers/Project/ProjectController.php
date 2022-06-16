<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;


class ProjectController extends Controller
{
   public function __invoke($id)
   {
      $project = Project::where('id', $id)
         ->first();
      //$project = Project::find(1);
         //dd($project);
         //dd($project->tg_messages()->attach(array(296676, 296668))->toSql());
         //dd($project->tg_messages()->detach());
      return response()->json($project);
   }
}
