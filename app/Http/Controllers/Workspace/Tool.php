<?php

namespace App\Http\Controllers\Workspace;

//use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class Tool
{
    static public function generateInvite($length)
    {
      $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      $charactersLength = strlen($characters);
      $randomString = '';
      for ($i = 0; $i < $length; $i++) {
         $randomString .= $characters[rand(0, $charactersLength - 1)];
      }
      return $randomString; 
    }
}
