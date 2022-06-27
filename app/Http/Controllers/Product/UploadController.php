<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UploadController extends BaseController
{
    public function __invoke($product_id, Request $request)
    {
      $path = $request->file('file')->store('uploads', 'public');
      if ($path) {
         $this->service->storePathLogo($product_id, "/storage/{$path}");
      }
      return response()->json("/storage/{$path}");
   }
}
