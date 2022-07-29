<?php

namespace App\Http\Controllers\ProductActivity;

use App\Http\Controllers\Controller;
use App\Services\ProductActivity\Service;

class BaseController extends Controller
{
   public $service;

   public function __construct(Service $service)
   {
      $this->service = $service;   
   }
}
