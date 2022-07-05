<?php

namespace App\Http\Controllers\Chart;

use Illuminate\Http\Request;


class TgDayWTChartController extends BaseController
{
   public function __invoke($product_id, Request $request)
   {   
      //$params = $request->instance();
      //dd(public_path('storage') );
      //dd(storage_path('app/public'));
      $result = $this->service->getDayChartData($product_id);//, $params);
      $chart = $this->service->collectDayChartData($result);
      //$result = DayTgMetric::where('id', $top)->sortBy('quantity_id')->get(3);

      //$out = $this->service->collectChartData($result);
      //$product = Product::find(1);
      //dd($product);
      //dd($product->tg_messages()->attach(array(296676, 296668))->toSql());
      //dd($product->tg_messages()->detach());
      return response()->json($chart);
   }
}
