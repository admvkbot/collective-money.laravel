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

   public function deleteProject($project_id)
   {
      Project::firstWhere('id', $project_id)->delete();
   }

   public function detachTgMessageProject($project_id)
   {
      $project = Project::where('id', $project_id)->find(1);
      $project->tg_messages()->detach();
   }

   public function getProjectByString($filter)
   {
      if (!$filter['query']) {
         return "";
      }
      //return  Project::first();
      return Project::firstWhere('name', $filter['query']);
   }
}
