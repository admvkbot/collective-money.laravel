<?php

namespace App\Http\Controllers\Chart;

use Illuminate\Http\Request;


class DayRatingChartController extends BaseController
{
   public function __invoke($product_id)
   {   
      $result = $this->service->getDayChartData($product_id);
      $chart = $this->service->collectDayRatingChartData($result);

      return response()->json($chart);
   }
}
