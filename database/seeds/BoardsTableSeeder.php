<?php

use Illuminate\Database\Seeder;

use App\Board;
use App\Todo;

class BoardsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Board::class, 50)->create();

        // factory(Board::class, 11)->create()->each(function($board) {
        //     $board->todos()->saveMany(factory(Todo::class, 4)->create([
        //         'board_id' => $board->id
        //     ]));
        // });
    }
}
