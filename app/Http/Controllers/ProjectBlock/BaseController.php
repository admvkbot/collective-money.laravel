<?php

namespace App\Http\Controllers\ProjectBlock;

use App\Http\Controllers\Controller;
use App\Services\ProjectBlock\Service;

class BaseController extends Controller
{
   public $service;

   public function __construct(Service $service)
   {
      $this->service = $service;
   }
}
