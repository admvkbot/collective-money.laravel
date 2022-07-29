<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
   /**
    * Seed the application's database.
    *
    * @return roduct
    */
   public function run()
   {
      $data = [
         [
            'name' => 'Master',
            'tg_username' => 'Master',
            'tg_id' => 1253913400,
            'password' => 'gdfkjghdkfjg',
            'invite' => '1q2w3e4',
            'parent_id' => 0,
            'type' => 0
         ],
         [
            'name' => 'Adm_S_R',
            'tg_username' => 'Adm_S_R',
            'tg_id' => 125391340,
            'password' => '$2y$10$OmRafBMLGCDYSmvSKqyc6e47DynSBAXijcf1iXDyBDtrj/tARakXK',
            'invite' => 'qiAxmbh',
            'parent_id' => 1,
            'type' => 1
         ]
      ];
      DB::table('users')->insert(
         $data
      );

      $data = [
         [
            'name' => 'Twitter',
            'description' => 'Устанавливается в seed'
         ],
      ];
      DB::table('social_networks')->insert(
         $data
      );

      $data = [
         [
            'id' => 1,
            'url' => 'https://t.me/doubletop_otc',
            'product_type_id' => 1
         ],
         [
            'id' => 2,
            'url' => 'https://t.me/terncrypto_otc',
            'product_type_id' => 1
         ],
      ];
      DB::table('tg_channels')->insert(
         $data
      );

      $data = [
         [
            'name' => 'Mimi\'s Adventure',
            'uri' => 'mimis-adventure',
            'product_type_id' => 1,
            'website_url' => 'https://google.com',
            'rating' => 1,
            'twitter' => 'https://twitter.com/',
            'num_tg_users' => 0,
            'logo_url' => '/images/uploads/product-logo-1.png'
         ],
         [
            'name' => 'Pengsol',
            'uri' => 'pengsol',
            'product_type_id' => 1,
            'website_url' => 'https://google.com',
            'rating' => 1,
            'twitter' => 'https://twitter.com/',
            'num_tg_users' => 0,
            'logo_url' => '/images/uploads/product-logo-2.png'
         ]
      ];
      DB::table('products')->insert(
         $data
      );

      $data = [
         [
            'name' => 'Криптопроекты',
            'description' => 'Описание'
         ],
      ];
      DB::table('product_types')->insert(
         $data
      );

      $data = [
         [
            'name' => 'Получение White List',
            'badge_name' => 'WL',
            'description' => '',
            'colour_marker' => 'primary'
         ],
         [
            'name' => 'Получение роли в Discord',
            'badge_name' => 'Discord Role',
            'description' => '',
            'colour_marker' => 'secondary'
         ],
         [
            'name' => 'Розыгрыш токенов',
            'badge_name' => 'Token Game',
            'description' => '',
            'colour_marker' => 'success'
         ],
         [
            'name' => 'Ретродроп',
            'badge_name' => 'Retrodrop',
            'description' => '',
            'colour_marker' => 'danger'
         ],
         [
            'name' => 'Аирдроп токенов',
            'badge_name' => 'Airdrop Token',
            'description' => '',
            'colour_marker' => 'warning'
         ],
         [
            'name' => 'Тестнет',
            'badge_name' => 'Testnet',
            'description' => '',
            'colour_marker' => 'info'
         ],
         [
            'name' => 'Амбасcадорская программа',
            'badge_name' => 'Ambassador',
            'description' => '',
            'colour_marker' => 'dark'
         ],
         [
            'name' => 'Нода',
            'badge_name' => 'Node',
            'description' => '',
            'colour_marker' => 'primary'
         ],
         [
            'name' => 'TGE  - генерация токенов',
            'badge_name' => 'TGE',
            'description' => '',
            'colour_marker' => 'success'
         ],
         [
            'name' => 'Листинг на бирже',
            'badge_name' => 'Listing',
            'description' => '',
            'colour_marker' => 'warning'
         ],
      ];
      DB::table('product_activity_types')->insert(
         $data
      );
   }
   //\App\Models\Social::factory(10)->create();
}
