<?php

namespace App\Http\Controllers\ProductBlock;

use App\Http\Controllers\Controller;
use App\Services\ProductBlock\Service;

class BaseController extends Controller
{
   public $service;

   public function __construct(Service $service)
   {
      $this->service = $service;
   }
}
