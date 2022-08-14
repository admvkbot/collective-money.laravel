<?php

namespace App\Http\Controllers\ProductActivity;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DeleteController extends BaseController
{
    public function __invoke($activity_id)
    {
       $this->service->deleteActivity($activity_id);
    }
}
