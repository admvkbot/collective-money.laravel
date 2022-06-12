<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Http\Controllers\API\ApiController;

class EditController extends Controller
{
   public function __invoke($project_id, Request $request)
   {
      if (ApiController::checkModerator()) {
         $data = $request->instance();

         $out = Project::where('id', $project_id)
            ->update([
               'name' => $data['name'],
               'project_type_id' => $data['type'],
               'website_url' => $data['url'],
               'discord' => $data['discord'],
               'twitter' => $data['twitter'],
               'medium' => $data['medium'],
               'youtube' => $data['youtube'],
               'telegram' => $data['telegram'],
               'description' => $data['description'],
            ]);

         return response()->json($out);
      }
      return response()->json([]);
   }
}
