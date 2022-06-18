<?php

namespace App\Services\ProjectBlock;

use App\Models\ProjectStatus;

class Service
{
   public function deleteBlock($id)
   {
      return ProjectStatus::firstWhere('id', $id)->delete();
   }

   public function deleteBlocksByProjectId($project_id)
   {
      return ProjectStatus::where('project_id', $project_id)->delete();
   }

}
