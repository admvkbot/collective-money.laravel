<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            //$table->integer('user_id');
            $table->string('name');
            $table->string('email')->unique();
            $table->text('description')->nullable();
            $table->integer('status');
            $table->integer('level_status');


            $table->timestamps();

            //$table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->index()->constrained()->cascadeOnDelete();//->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('accounts', function(Blueprint $table)
         {
           $table->dropForeign('accounts_user_id_foreign'); //
         });
      Schema::dropIfExists('accounts');
    }
}
