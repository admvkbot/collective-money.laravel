<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UploadController extends BaseController
{
    public function __invoke($project_id, Request $request)
    {
      $path = $request->file('file')->store('uploads', 'public');
      if ($path) {
         $this->service->storePathLogo($project_id, "/storage/{$path}");
      }
      return response()->json("/storage/{$path}");
   }
}
