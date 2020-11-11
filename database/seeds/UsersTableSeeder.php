<?php

use Illuminate\Database\Seeder;

use App\User;
use App\Board;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(User::class, 20)->create();



        // factory(User::class, 10)->create()->each(function($user) {
        //     $user->boards()->saveMany(factory(Board::class, 5)->create([
        //         'user_id' => $user->id
        //         ]));
        //     });

        App\User::create([
            'name' => 'Cos',
            'role' => 'admin',
            'password' => '$2y$10$wAvx3fYyH8awNU.uTK50uezk/dWAK5esxYr7djSI0Phy77u30LU/q',
            'email' => '8costa21@gmail.com',
        ]);

        App\User::create([
            'name' => 'Cedric',
            'role' => 'admin',
            'password' => '$2y$10$R2i4dAYvHapDD.J9AcC2M.XA9LbVldfS5JCENVy4.AA/e4U50k3n2',
            'email' => 'elliott_ced@hotmail.com',
        ]);

        App\User::create([
            'name' => 'Steven',
            'role' => '',
            'password' => '$2y$10$wAvx3fYyH8awNU.uTK50uezk/dWAK5esxYr7djSI0Phy77u30LU/q',
            'email' => '8costa21@gmail.com',
        ]);

        App\User::create([
            'name' => 'Mathieu',
            'role' => 'admin',
            'password' => '$2y$10$z2AiYRPdiiyDkhpzGe2iz.z7tgu8PIb1g7fOpWL2WuacaNQsajoiW',
            'email' => 'mathieu1d@mg.com',
        ]);
    }
}
