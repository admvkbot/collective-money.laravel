<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTgMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tg_messages', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('tg_message_id')->unsigned();
            $table->bigInteger('channel_id')->unsigned()->nullable();
            $table->datetime('date');
            $table->bigInteger('user_id')->unsigned();
            $table->text('message');
            $table->integer('project_id')->default(0); // 0-новое, 1-в отбросы
            $table->boolean('is_scam')->default(false);
            $table->boolean('is_scam_verified')->default(false);
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
        Schema::dropIfExists('tg_messages');
    }
}
