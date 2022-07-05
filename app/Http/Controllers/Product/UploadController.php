<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UploadController extends BaseController
{
    public function __invoke($product_id, Request $request)
    {
      $path = $request->file('file')->store('uploads', 'public');
      //dd (asset("/storage/{$path}"));
      if ($path) {
         $this->service->storePathLogo($product_id, "/storage/{$path}");
         //$this->service->storeLogo($path, $resource);
      }
      return response()->json("/storage/{$path}");
   }
}
