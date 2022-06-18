<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Services\Project\Service;
use App\Services\Index\Service as ServiceIndex;
use App\Services\ProjectBlock\Service as ServiceBlock;
use App\Services\Metric\Service as ServiceMetric;

class BaseController extends Controller
{
   public $service;
   public $serviceIndex;
   public $serviceBlock;
   public $serviceMetric;

   public function __construct(Service $service, ServiceIndex $serviceIndex, ServiceBlock $serviceBlock, ServiceMetric $serviceMetric)
   {
      $this->service = $service;
      $this->serviceIndex = $serviceIndex;
      $this->serviceBlock = $serviceBlock;
      $this->serviceMetric = $serviceMetric;
   }
}
