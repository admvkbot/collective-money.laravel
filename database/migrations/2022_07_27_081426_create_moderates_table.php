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
        Schema::create('moderates', function (Blueprint $table) {
            $table->id();
            $table->string('action');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('moderator_id')->nullable();
            $table->text('description')->nullable();
            $table->text('message_to_user')->nullable();
            $table->text('message_to_admin')->nullable();
            $table->tinyInteger('status')->default(0); // 1 - ожидание связи с юзером, 2 - на аппрув админу
            $table->tinyInteger('verdict')->default(0); // 0 - немодерировано, 1 - одобрено, 2 - отклонено
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
        Schema::dropIfExists('moderates');
    }
};
