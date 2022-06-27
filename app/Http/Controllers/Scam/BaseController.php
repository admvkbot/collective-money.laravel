<?php

namespace App\Http\Controllers\Scam;

use App\Http\Controllers\Controller;
use App\Services\Scam\Service;
use App\Services\TgUser\Service as ServiceTgUser;
use App\Services\Product\Service as ServiceProduct;

class BaseController extends Controller
{
   public $service;

   public function __construct(Service $service, ServiceTgUser $serviceTgUser, ServiceProduct $serviceProduct)
   {
      $this->service = $service;
      $this->serviceTgUser = $serviceTgUser;
      $this->serviceProduct = $serviceProduct;
   }
}
