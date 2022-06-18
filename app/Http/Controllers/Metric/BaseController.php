<?php

namespace App\Http\Controllers\Metric;

use App\Http\Controllers\Controller;
use App\Services\Metric\Service;

class BaseController extends Controller
{
   public $service;

   public function __construct(Service $service)
   {
      $this->service = $service;
   }
}
