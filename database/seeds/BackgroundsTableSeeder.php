<?php

use Illuminate\Database\Seeder;

class BackgroundsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Background::create([
            'name' => 'clair',
        ]);

        App\Background::create([
            'name' => 'lien',
        ]);

        App\Background::create([
            'name' => 'mur',
        ]);

        App\Background::create([
            'name' => 'paper',
        ]);

        App\Background::create([
            'name' => 'playa',
        ]);

        App\Background::create([
            'name' => 'trait',
        ]);
    }
}
