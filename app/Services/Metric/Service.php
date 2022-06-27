<?php

namespace App\Services\Metric;

use App\Models\DayTgMetric;
use App\Models\WeekTgMetric;
use App\Models\MonthTgMetric;

class Service
{
   public function deleteMetricsByProductId($product_id)
   {
      DayTgMetric::where('product_id', $product_id)->delete();
      WeekTgMetric::where('product_id', $product_id)->delete();
      MonthTgMetric::where('product_id', $product_id)->delete();
   }
}
