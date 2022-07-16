<?php

namespace App\Services\Chart;

use App\Models\DayTgMetric;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use App\Actions\Repository;

class Service
{

   public function getDayChartData($product_id): Collection
   {
      $date_yesterday = Carbon::today()->subSecond()->toDateTimeString();
      $date_start = Carbon::today()->subMonth()->toDateTimeString();
      
      return DayTgMetric::where('product_id', $product_id)
         ->where('date', '<', $date_yesterday)
         ->where('date', '>', $date_start)
         ->get();
   }

   public function collectDayChartData($collection): object
   {
      $chart = (object) [
         'labels' => [],
         'datasets' => [(object)['label' => "WTS", 'data' => [],], (object)['label' => "WTB", 'data' => [],]],
         'first' => [0, 0],
         'last' => [0, 0],
      ];
      //dd($collection);
      $i = 0;
      $max = count($collection) - 1;
      //$collection = [];
      foreach ($collection as $row) {
         $month_begin = Carbon::parse($row->date)->format('F');
         $month_end = Carbon::today()->format('F');
         $label = Carbon::parse($row->date)->format('d');
         if ($i == 0)
            $label = "{$month_begin}, {$label}";
         if ($i == $max)
            $label = "{$month_end}, {$label}";
         array_push($chart->labels, $label);
         array_push($chart->datasets[0]->data, $row->quantity_wts);
         array_push($chart->datasets[1]->data, $row->quantity_wtb);
         $i++;
      }
      //dd($chart);
      return $chart;
   }

   public function collectDayCostChartData($collection): object
   {
      $chart = (object) [
         'labels' => [],
         'datasets' => [(object)['label' => "Цена предложения", 'data' => [],], (object)['label' => "Цена спроса", 'data' => [],]],
         'first' => [0, 0],
         'last' => [0, 0],
      ];
      //dd($collection);
      $i = 0;
      $max = count($collection) - 1;
      //$collection = [];
      foreach ($collection as $row) {
         $month_begin = Carbon::parse($row->date)->format('F');
         $month_end = Carbon::today()->format('F');
         $label = Carbon::parse($row->date)->format('d');
         if ($i == 0)
            $label = "{$month_begin}, {$label}";
         if ($i == $max)
            $label = "{$month_end}, {$label}";
         array_push($chart->labels, $label);
         array_push($chart->datasets[0]->data, $row->cost_wts_min);
         array_push($chart->datasets[1]->data, $row->cost_wtb_max);
         $i++;
      }
      //dd($chart);
      return $chart;
   }

   public function collectDayRatingChartData($collection): object
   {
      $chart = (object) [
         'labels' => [],
         'datasets' => [(object)['label' => "Rating", 'data' => [],]],
         'first' => [0, 0],
         'last' => [0, 0],
      ];
      $i = 0;
      $max = count($collection) - 1;
      //$collection = [];
      foreach ($collection as $row) {
         $month_begin = Carbon::parse($row->date)->format('F');
         $month_end = Carbon::today()->format('F');
         $label = Carbon::parse($row->date)->format('d');
         if ($i == 0)
            $label = "{$month_begin}, {$label}";
         if ($i == $max)
            $label = "{$month_end}, {$label}";
         array_push($chart->labels, $label);
         $metric = (object) array(
            'num_all' => $row->quantity_all,
            'num_id' => $row->quantity_id,
            'num_wtb' => $row->quantity_wtb,
            'num_wts' => $row->quantity_wts,
         );
         $rating = Repository::collectRating($metric);
         array_push($chart->datasets[0]->data, $rating);
         $i++;
      }
      //dd($chart);
      return $chart;
   }
}
