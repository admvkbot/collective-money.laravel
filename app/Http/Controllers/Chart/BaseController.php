<?php

namespace App\Http\Controllers\Chart;

use App\Http\Controllers\Controller;
use App\Services\Chart\Service;

class BaseController extends Controller
{
   public $service;

   public function __construct(Service $service)
   {
      $this->service = $service;
   }
}
