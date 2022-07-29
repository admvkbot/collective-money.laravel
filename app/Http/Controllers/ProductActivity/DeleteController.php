<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DeleteController extends BaseController
{
    public function __invoke($product_id)
    {
       $this->service->detachTgMessageProduct($product_id);
       $this->serviceIndex->eraseIndex($product_id);
       $this->serviceBlock->deleteBlocksByProductId($product_id);
       $this->serviceMetric->deleteMetricsByProductId($product_id);
       $this->service->deleteProduct($product_id);
    }
}
