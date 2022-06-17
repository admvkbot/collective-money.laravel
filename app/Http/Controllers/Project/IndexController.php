<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;

class IndexController extends Controller
{
   public function __invoke($top, Request $request)
   {
      $filter = $request->instance();
      $out = Project::where(function ($query) use ($filter) {
         $query->where('name', 'LIKE', '%' . $filter['filter'] . '%')
            ->orWhere('website_url', 'LIKE', '%' . $filter['filter'] . '%');
      });
      if ($top) {
         $out = $out->limit($top);
      }
      $out = $out->toBase()->get();
      return response()->json($out);
   }
}
