<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTgChannelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tg_channels', function (Blueprint $table) {
            $table->bigInteger('id')->primary()->unique()->unsigned();
            //$table->bigInteger("channel_id")->unsigned()->nullable()->unique();
            $table->string("url")->nullable();
            $table->string("title")->nullable();
            $table->string("username")->nullable();
            $table->boolean("is_chat")->default(false);
            $table->bigInteger("photo_id")->unsigned()->nullable();
            $table->text("description")->nullable();
            $table->string("access_hash")->nullable();
            $table->boolean("is_active")->default(true);
            $table->integer("product_type_id")->default(0); // если указан primary_type_id, то он является приоритетным для добавления проектов выбранного типа
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
        Schema::dropIfExists('tg_channels');
    }
}
