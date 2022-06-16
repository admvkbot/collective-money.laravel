<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $table = 'accounts';
    protected $guarded = false;

    protected $fillable = [
      'user_id',
      'name',
      'email',
      'description',
      'status',
      'level_status',
  ];


}
