<?php

namespace App\Services\Product;

use App\Models\Product;
use App\Models\ProductActivity;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class Service
{
   public function storePathLogo($product_id, $path)
   {
      return Product::where('id', $product_id)
         ->update(['logo_url' => $path]);
   }

   public function insertProductTypes($data)
   {
      $types = $data["type"];
      $product_id = $data['product_id'];
      $this->detachProductsProductTypes($product_id);
      foreach ($types as $item) {
         DB::table('products_product_types')->insert(['product_id' => $product_id, 'product_type_id' => $item]);
      }      
   }

   /*public function storeLogo($path, $resource): void
   {
      Storage::disk('public')->put($path, $resource);
   }*/

   public function deleteProduct($product_id)
   {
      Product::firstWhere('id', $product_id)->delete();
   }

   public function detachTgMessageProduct($product_id)
   {
      $product = Product::find($product_id);
      $product->tg_messages()->detach();
   }

   public function detachProductsProductTypes($product_id)
   {
      $product = Product::find($product_id);
      $product->product_types()->detach();
   }

   public function getProductByString($filter)
   {
      if (!$filter['query']) {
         return "";
      }
      //return  Product::first();
      return Product::firstWhere('name', $filter['query']);
   }

   public function getProductsByString($filter)
   {
      $products = Product::where(function ($query) use ($filter) {
         $query->where('name', 'LIKE', '%' . $filter . '%')
            ->orWhere('website_url', 'LIKE', '%' . $filter . '%');
      });


      return $products;
      //return Product::firstWhere('name', $filter['query']);
   }


   public function getUriByName($str)
   {
      return preg_replace('/_/', '-', preg_replace('/\W/', '', preg_replace('/\s/', '_', strtolower($str))));
   }

   public function getProductByUri($uri): object
   {
      return DB::table('products')
         ->join('product_types', 'products.product_type_id', '=', 'product_types.id')
         ->where('uri', $uri)
         ->select(
            'products.id',
            'products.name',
            'products.status',
            'products.rating',
            'products.rating_past',
            'products.num_tg_users',
            'products.num_tg_users_past',
            'products.website_url',
            'products.discord',
            'products.twitter',
            'products.medium',
            'products.youtube',
            'products.telegram',
            'products.logo_url',
            'products.is_locked',
            'products.is_indexed',
            'products.description',
            'products.product_status_id',
            'product_types.name as type',
            )
         ->first();
   }
}
