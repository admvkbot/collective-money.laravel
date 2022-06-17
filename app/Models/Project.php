<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
   protected $table = 'projects';
   protected $guarded = false;
   
   public function tg_messages()
   {
      return $this->belongsToMany(TgMessage::class, 'message_projects', 'project_id', 'message_id');//->using(MessageProject::class);;
   }

}
