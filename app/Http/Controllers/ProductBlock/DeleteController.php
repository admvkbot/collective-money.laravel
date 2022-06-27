<?php

namespace App\Http\Controllers\ProductBlock;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductStatus;
use App\Http\Controllers\API\ApiController;

class DeleteController extends Controller
{
    public function __invoke($id)
    {
      if (ApiController::checkModerator()) {
         return $this->service->deleteBlock($id);
      }  
    }
}
