<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTgMessageProductTable extends Migration
{
   /**
    * Run the migrations.
    *
    * @return roduct
    */
   public function up()
   {
      Schema::create('tg_message_product', function (Blueprint $table) {
         $table->unsignedBigInteger('message_id');
         $table->unsignedBigInteger('product_id');
         $table->boolean('is_scam')->default(false);

         $table->index('message_id', 'tg_message_product_message_idx');
         $table->index('product_id', 'tg_message_product_product_idx');

         $table->foreign('message_id', 'tg_message_product_message_fk')->on('tg_messages')->references('id');
         $table->foreign('product_id', 'tg_message_product_product_fk')->on('products')->references('id');

      });
   }

   /**
    * Reverse the migrations.
    *
    * @return roduct
    */
   public function down()
   {
      Schema::dropIfExists('tg_message_product');
   }
}
