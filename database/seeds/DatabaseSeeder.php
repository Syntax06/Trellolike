<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        $this->call([
            UsersTableSeeder::class,
            // BoardsTableSeeder::class,
            // TodosTableSeeder::class,
            // TasksTableSeeder::class,
            // CommentsTableSeeder::class,
            BackgroundsTableSeeder::class,
        ]);
    }
}
