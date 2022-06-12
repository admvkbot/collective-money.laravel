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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->nullable();
            $table->string('tg_username')->unique();
            $table->bigInteger('tg_id')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->bigInteger('parent_id');
            $table->tinyInteger('activity')->default(0);
            $table->string('invite');
            $table->integer('status')->default(1);
            $table->tinyInteger('type')->default(0); // 0 - юзер, 1 - модер, 2 - админ, 3 - суперадмин
            $table->rememberToken();
            $table->foreignId('current_team_id')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
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
        Schema::dropIfExists('users');
    }
};
