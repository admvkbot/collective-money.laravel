<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTgUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tg_users', function (Blueprint $table) {
            $table->bigInteger('id')->primary()->unique()->unsigned();
            //$table->bigInteger("user_id")->unsigned()->unique();
            $table->string("username")->nullable();
            $table->boolean("is_bot")->default(false);
            $table->string("first_name")->nullable();
            $table->string("last_name")->nullable();
            $table->bigInteger("photo_id")->unsigned()->nullable();
            $table->string("lang_code")->nullable();
            $table->bigInteger("number_messages")->unsigned()->default(1);
            $table->boolean("is_channel")->default(false);
            $table->boolean("is_active")->default(true);
            $table->text("description")->nullable();
            $table->tinyInteger("rating")->default(0);
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
        Schema::dropIfExists('tg_users');
    }
}
