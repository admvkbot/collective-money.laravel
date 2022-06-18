<?php

namespace App\Services\Index;

use App\Models\Index;
use App\Models\Project;

class Service
{
   public function getIndexesByProjectId($project_id)
   {
      return Index::where('project_id', $project_id)
      ->toBase()
      ->get();
   }
   public function eraseIndex($project_id)
   {
      return Index::where('project_id', $project_id)
         ->delete();
   }

   public function insertIndex($data)
   {
      $query = [];

      $keys = explode("\n", $data['index']);

      foreach ($keys as $row) {
         if ($row) 
            Index::insert(['project_id' => $data['project_id'], 'field' => $row]);      
      }

      Project::where('id', $data['project_id'])->update(['is_indexed' => False]);

      return count($keys);
   }
}
