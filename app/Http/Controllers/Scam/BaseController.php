<?php

namespace App\Http\Controllers\Scam;

use App\Http\Controllers\Controller;
use App\Services\Scam\Service;
use App\Services\TgUser\Service as ServiceTgUser;
use App\Services\Project\Service as ServiceProject;

class BaseController extends Controller
{
   public $service;

   public function __construct(Service $service, ServiceTgUser $serviceTgUser, ServiceProject $serviceProject)
   {
      $this->service = $service;
      $this->serviceTgUser = $serviceTgUser;
      $this->serviceProject = $serviceProject;
   }
}
