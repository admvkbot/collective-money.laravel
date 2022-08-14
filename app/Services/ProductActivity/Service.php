<?php

namespace App\Services\ProductActivity;

use App\Models\ProductActivity;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class Service
{
   public function addActivities($collection)
   {
      $date_now = new \DateTime('now');
      foreach ($collection as &$item) {
         $activity = DB::table('product_activities')
            ->join('product_activity_types', 'product_activities.product_activitie_type_id', '=', 'product_activity_types.id')
            ->where('product_activities.product_id', $item->id)
            ->where('close_at', '>', $date_now)
            ->where('is_moderated', true)
            ->select(
               'product_activities.id',
               'product_activitie_type_id',
               'close_at',
               'product_activity_types.badge_name',
               'colour_marker as color'
            )
            ->get();
         /*->toBase()->get();*/
         $item->badges = $activity;
      }
      return $collection;
   }

   public function getProductActivities($product_id, $data)
   {
      $date_now = new \DateTime('now');
      $collection = DB::table('product_activities')
         ->where('product_id', $product_id)
         ->join('product_activity_types', 'product_activities.product_activitie_type_id', '=', 'product_activity_types.id');
      if ($data["is_active"]) {
         $collection = $collection->where('close_at', '>', $date_now);
      }
      if ($data["max"]) {
         $collection = $collection->limit($data["max"]);
      }
      return $collection->orderByDesc('close_at')->select('product_activities.id', 'product_activity_types.id as type_id', 'name', 'close_at', 'source_url as url', 'product_activities.description')->get();
   }

   public function deleteActivity($activity_id) {
      return ProductActivity::firstWhere('id', $activity_id)->delete();
   }
}
