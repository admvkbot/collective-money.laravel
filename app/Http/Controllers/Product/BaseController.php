<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Services\Product\Service;
use App\Services\Index\Service as ServiceIndex;
use App\Services\ProductBlock\Service as ServiceBlock;
use App\Services\Metric\Service as ServiceMetric;
use App\Services\ProductActivity\Service as ServicePoductActivity;

class BaseController extends Controller
{
   public $service;
   public $serviceIndex;
   public $serviceBlock;
   public $serviceMetric;
   public $servicePoductActivity;

   public function __construct(Service $service, ServiceIndex $serviceIndex, ServiceBlock $serviceBlock, ServiceMetric $serviceMetric, ServicePoductActivity $servicePoductActivity)
   {
      $this->service = $service;
      $this->serviceIndex = $serviceIndex;
      $this->serviceBlock = $serviceBlock;
      $this->serviceMetric = $serviceMetric;
      $this->servicePoductActivity = $servicePoductActivity;
   }
}
