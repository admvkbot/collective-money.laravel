<?php

namespace App\Services\Project;

use App\Models\Project;

class Service
{
   public function storePathLogo($project_id, $path)
   {
      return Project::where('id', $project_id)
         ->update(['logo_url' => $path]);
   }
}
