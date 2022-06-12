<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectType extends Model
{
   protected $table = 'project_types';
   protected $quarded = false;

   protected $fillable = [
     'name',
     'description'
 ];


}
