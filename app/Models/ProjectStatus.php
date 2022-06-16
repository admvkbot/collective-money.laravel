<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectStatus extends Model
{
   protected $table = 'project_statuses';
   protected $guarded = false;

   protected $fillable = [
     'project_id',
     'name',
     'stage',
     'date',
     'button1',
     'button2',
     'button3',
     'button4',
     'button5',
     'status',
     'description'
 ];


}
