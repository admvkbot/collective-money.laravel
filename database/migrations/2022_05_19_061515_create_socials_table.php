<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('socials', function (Blueprint $table) {
            $table->id();
            //$table->integer('account_id');
            $table->string('url');
            $table->integer('status')->default(1);
            $table->string('socialid');
            $table->boolean('wsubscribe')->default(true);
            $table->text('description')->nullable();
            $table->timestamps();

            $table->foreignId('account_id')->index()->constrained()->cascadeOnDelete();//->references('id')->on('accounts');;
            $table->foreignId('social_network_id')->index()->constrained()->cascadeOnDelete();//->references('id')->on('social_networks');;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('socials', function(Blueprint $table)
      {
         $table->dropForeign('socials_account_id_foreign'); //
      });
      Schema::table('socials', function(Blueprint $table)
      {
         $table->dropForeign('socials_social_network_id_foreign'); //
      });
      Schema::dropIfExists('socials');
    }
}
