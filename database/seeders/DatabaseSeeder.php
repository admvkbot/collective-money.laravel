<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
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
            'project_type_id' => 1
         ],
         [
            'id' => 2,
            'url' => 'https://t.me/terncrypto_otc',
            'project_type_id' => 1
         ],
    ];
     DB::table('tg_channels')->insert(
        $data
     );

     $data = [
      [
         'name' => 'Test',
         'website_name' => 'test.com',
         'website_url' => 'https://google.com',
         'rating' => 73,
         'twitter' => 'https://twitter.com/',
         'num_tg_users' => 66,
         'logo_url' => '/images/uploads/project-logo-1.png'
      ],
      [
         'name' => 'Test2',
         'website_name' => 'test2.com',
         'website_url' => 'https://google.com',
         'rating' => 49,
         'twitter' => 'https://twitter.com/',
         'num_tg_users' => 13,
         'logo_url' => '/images/uploads/project-logo-2.png'
      ]
     ];
     DB::table('projects')->insert(
         $data
     );

     $data = [
      [
          'name' => 'Криптопроекты',
          'description' => 'Описание'
      ],
      ];
      DB::table('project_types')->insert(
         $data
      );


   }
         //\App\Models\Social::factory(10)->create();
}
