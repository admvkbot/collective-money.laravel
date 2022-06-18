<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DeleteController extends BaseController
{
    public function __invoke($project_id)
    {
       $this->service->detachTgMessageProject($project_id);
       $this->serviceIndex->eraseIndex($project_id);
       $this->serviceBlock->deleteBlocksByProjectId($project_id);
       $this->serviceMetric->deleteMetricsByProjectId($project_id);
       $this->service->deleteProject($project_id);
    }
}
