<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessageProjectsTable extends Migration
{
   /**
    * Run the migrations.
    *
    * @return void
    */
   public function up()
   {
      Schema::create('tg_message_project', function (Blueprint $table) {
         $table->unsignedBigInteger('message_id');
         $table->unsignedBigInteger('project_id');

         $table->index('message_id', 'tg_message_project_message_idx');
         $table->index('project_id', 'tg_message_project_project_idx');

         $table->foreign('message_id', 'tg_message_project_message_fk')->on('tg_messages')->references('id');
         $table->foreign('project_id', 'tg_message_project_project_fk')->on('projects')->references('id');
      });
   }

   /**
    * Reverse the migrations.
    *
    * @return void
    */
   public function down()
   {
      Schema::dropIfExists('tg_message_project');
   }
}
