<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_statuses', function (Blueprint $table) {
            $table->id();
            $table->integer('project_id');
            $table->string('name');
            $table->tinyInteger('stage')->defaut(0);
            $table->text('description')->nullable();
            $table->datetime('date');
            $table->string('button1')->nullable();
            $table->string('button2')->nullable();
            $table->string('button3')->nullable();
            $table->string('button4')->nullable();
            $table->string('button5')->nullable();
            $table->enum('status', ['unverified', 'verified'])->defaut('unverified');

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
        Schema::dropIfExists('project_statuses');
    }
}
