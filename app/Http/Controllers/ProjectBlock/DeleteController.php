<?php

namespace App\Http\Controllers\ProjectBlock;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProjectStatus;
use App\Http\Controllers\API\ApiController;

class DeleteController extends Controller
{
    public function __invoke($id)
    {
      if (ApiController::checkModerator()) {
         return ProjectStatus::firstWhere('id', $id)->delete();
      }  
    }
}
