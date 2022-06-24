<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   /**
    * Run the migrations.
    *
    * @return void
    */
   public function up()
   {
      Schema::create('tg_pre_scams', function (Blueprint $table) {
         $table->unsignedBigInteger('tg_message_id');
         $table->unsignedBigInteger('tg_user_id')->nullable();
         $table->unsignedBigInteger('project_id')->nullable();
         $table->string('tg_username')->nullable();
      });
   }

   /**
    * Reverse the migrations.
    *
    * @return void
    */
   public function down()
   {
      Schema::dropIfExists('tg_pre_scams');
   }
};
