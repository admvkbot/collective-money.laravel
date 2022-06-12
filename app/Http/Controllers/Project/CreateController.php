<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\ApiController;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;

//use App\Http\Controllers\Auth;

class CreateController extends Controller
{
   public function __invoke(Request $request)
   {

      if (ApiController::checkModerator()) {

         $data = $request->instance();
         $out = Project::firstOrCreate([
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
      return response()->json('[]');
   }
}
