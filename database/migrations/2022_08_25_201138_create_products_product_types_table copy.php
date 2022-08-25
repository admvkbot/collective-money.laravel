<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   /**
    * Run the migrations.
    *
    * @return roduct
    */
   public function up()
   {
      Schema::create('products_product_types', function (Blueprint $table) {
         $table->unsignedBigInteger('product_id');
         $table->unsignedBigInteger('product_type_id');

         $table->index('product_id', 'products_product_types_product_idx');
         $table->index('product_type_id', 'products_product_types_product_type_idx');

         $table->foreign('product_id', 'products_product_types_product_fk')->on('products')->references('id');
         $table->foreign('product_type_id', 'products_product_types_product_type_fk')->on('product_types')->references('id');

      });
   }

   /**
    * Reverse the migrations.
    *
    * @return roduct
    */
   public function down()
   {
      Schema::dropIfExists('products_product_types');
   }
};
