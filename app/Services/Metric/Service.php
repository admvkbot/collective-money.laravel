<?php

namespace App\Services\Metric;

use App\Models\DayTgMetric;
use App\Models\WeekTgMetric;
use App\Models\MonthTgMetric;

class Service
{
   public function deleteMetricsByProjectId($project_id)
   {
      DayTgMetric::where('project_id', $project_id)->delete();
      WeekTgMetric::where('project_id', $project_id)->delete();
      MonthTgMetric::where('project_id', $project_id)->delete();
   }
}
