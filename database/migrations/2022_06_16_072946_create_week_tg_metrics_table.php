<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWeekTgMetricsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return roduct
     */
    public function up()
    {
        Schema::create('week_tg_metrics', function (Blueprint $table) {
         $table->id();
         $table->unsignedInteger('product_id');
         $table->dateTime('date');
         $table->unsignedInteger('quantity_all')->default(0);
         $table->unsignedInteger('quantity_id')->default(0);
         $table->unsignedInteger('quantity_wts')->default(0);
         $table->unsignedInteger('quantity_wtb')->default(0);
         $table->unsignedInteger('quantity_scam')->default(0);
         $table->unsignedInteger('cost_wts_max')->nullable();
         $table->unsignedInteger('cost_wts_min')->nullable();
         $table->unsignedInteger('cost_wtb_max')->nullable();
         $table->unsignedInteger('cost_wtb_min')->nullable();
         $table->timestamps();
     });
    }

    /**
     * Reverse the migrations.
     *
     * @return roduct
     */
    public function down()
    {
        Schema::dropIfExists('week_tg_metrics');
    }
}
