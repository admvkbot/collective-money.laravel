<?php

namespace App\Http\Controllers\API\Chart;

use App\Models\DayTgMetric;
use Illuminate\Http\Request;
use App\Models\Project;


class TgChartController extends BaseController
{
   public function __invoke($top, Request $request)
   {
      $chart = (object) [
         'labels' => ['Apr', 'May', 'June'],
         'datasets' => [(object)['label' => "Y", 'data' => [10, 20, 15],], (object)['label' => "Y", 'data' => [12, 18, 15],], (object)['label' => "Y", 'data' => [20, 17, 15],]]
      ];
      $params = $request->instance();
      $result = DayTgMetric::where('id', $top)->sortBy('quantity_id')->get(3);

      $out = $this->service->collectChartData($result);
      //$project = Project::find(1);
      //dd($project);
      //dd($project->tg_messages()->attach(array(296676, 296668))->toSql());
      //dd($project->tg_messages()->detach());
      return response()->json($chart);
   }
}
