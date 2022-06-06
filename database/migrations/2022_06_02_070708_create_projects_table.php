<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->tinyInteger('status')->default(0);
            $table->tinyInteger('rating')->default(0);
            $table->integer('num_tg_mesages')->default(0);
            $table->integer('num_tg_users')->default(0);
            $table->string('website_name')->nullable();
            $table->string('website_url')->nullable();
            $table->string('discord')->nullable();
            $table->string('twitter')->nullable();
            $table->string('medium')->nullable();
            $table->string('youtube')->nullable();
            $table->string('telegram')->nullable();
            $table->string('logo_url')->nullable();
            $table->integer('price')->nullable();
            $table->text('description')->nullable();
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
        Schema::dropIfExists('projects');
    }
}
