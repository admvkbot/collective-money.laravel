<?php

namespace App\Http\Controllers\ProjectBlock;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectBlockResourceCollection;
use Illuminate\Http\Request;
use App\Models\ProjectStatus;
use App\Http\Controllers\API\ApiController;

class IndexController extends Controller
{
   public function __invoke($id)
   {
      if (!ApiController::checkModerator())
         return response()->json([]);

      $out = ProjectStatus::where('project_id', $id)
         ->orderByDesc('date')
         ->get();
      //return response()->json($out);     
      return new ProjectBlockResourceCollection($out);
   }
}
