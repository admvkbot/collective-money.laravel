<?php

namespace App\Http\Controllers\Index;

use App\Http\Controllers\Controller;
use App\Services\Index\Service;

class BaseController extends Controller
{
   public $service;

   public function __construct(Service $service)
   {
      $this->service = $service;
   }
}
