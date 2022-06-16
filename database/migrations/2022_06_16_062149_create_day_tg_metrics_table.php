<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDayTgMetricsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('day_tg_metrics', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('project_id');
            $table->dateTime('date');
            $table->unsignedInteger('quantity_all')->default(0);
            $table->unsignedInteger('quantity_id')->default(0);
            $table->unsignedInteger('quantity_wts')->default(0);
            $table->unsignedInteger('quantity_wtb')->default(0);
            $table->unsignedInteger('quantity_scam')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('day_tg_metrics');
    }
}
