<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTgPhotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tg_photos', function (Blueprint $table) {
            $table->bigInteger('id')->primary()->unique()->unsigned();
            //$table->primary('id')->unique();
            $table->tinyInteger('dc_id')->nullable();
            $table->boolean('has_video')->default(false);
            //$table->string('stripped_thumb')->nullable();
            $table->char('stripped_thumb', 64)->charset('binary')->nullable();
            $table->timestamps();

            //$table->charset = 'utf8mb4';
            //$table->collation = 'utf8mb4_unicode_ci';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tg_photos');
    }
}
