<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Account;
use App\Models\SocialNetwork;
use App\Models\Social;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{

   public function index()
   {
       return 0;
   }
   
   public function getAllAccounts()
   {      
      $out = Account::get();
      return response()->json($out);
   }

   public function getAccountData($account_id)
   {      
      $out = Account::where('id', $account_id)->first();
      return response()->json($out);
   }

   public function getAllSocialNetworks()
   {      
      $out = SocialNetwork::get();
      return response()->json($out);
   }

   private function resultToIds($result) {
      $out = [];
      foreach ($result as $item)
         foreach ($item as $key => $value)   
            array_push($out, $value);
      return $out;
   }

   public function getSocialNetworks($account_id)
   {   
      $result = Social::where('account_id', $account_id)->select('social_network_id')->toBase()->get();
      //dd($result);
      $ids = $this->resultToIds($result);

      $out = SocialNetwork::whereNotIn('id', $ids)
         ->get();
      return response()->json($out);
   }

   public function getAllSocials()
   {      
      $out = DB::table('socials')
      ->join('social_networks', 'socials.social_network_id', '=', 'social_networks.id')
      ->select('socials.*', 'social_networks.name')
      ->get();
      return response()->json($out);
   }

   public function getReferers(Request $request)
   {      
      $filter = $request->instance();
      $id = Auth::id();
//      $id = 1; //!!!
      $out = User::where('parent_id', '=', $id)
      ->where(function ($query) use ($filter) {
         $query->where('name', 'LIKE', '%'.$filter['filter'].'%')
               ->orWhere('tg_username', 'LIKE', '%'.$filter['filter'].'%');
      })
      ->select('name', 'tg_username')
      ->get();
      return response()->json($out);
   }

   public function getMessages(Request $request)
   {      
      $filter = $request->instance();
      $out = DB::table('tg_messages')
            ->join('tg_users', 'tg_messages.user_id', '=', 'tg_users.id')
            ->join('tg_channels', 'tg_messages.channel_id', '=', 'tg_channels.id')
            ->where(function ($query) use ($filter) {
                  $query->where('tg_messages.message', 'LIKE', '%'.$filter['filter'].'%')
                        ->orWhere('tg_users.username', 'LIKE', '%'.$filter['filter'].'%')
                        ->orWhere('tg_users.first_name', 'LIKE', '%'.$filter['filter'].'%')
                        ->orWhere('tg_users.last_name', 'LIKE', '%'.$filter['filter'].'%');
            })
            ->orderByDesc('date')
            ->limit(10)
            ->select('message', 'tg_users.username', 'first_name', 'last_name', 'tg_channels.username AS channel_username', 
                     'tg_channels.url AS channel_url', 'tg_channels.title AS channel_title', 'tg_messages.date')
            ->get();
      //->select('name', 'tg_username')
      return response()->json($out);
   }
}
