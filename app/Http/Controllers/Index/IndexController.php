<?php

namespace App\Http\Controllers\Index;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Index;

class IndexController extends BaseController
{
   public function __invoke($project_id, Request $request)
   {
      return response()->json($this->service->getIndexesByProjectId($project_id));
   }
}
