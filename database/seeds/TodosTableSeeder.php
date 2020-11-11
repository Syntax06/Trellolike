<?php

use Illuminate\Database\Seeder;

use App\Todo;
use App\Task;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Todo::class, 75)->create();

        // factory(Todo::class, 2)->create()->each(function($todo) {
        //     $todo->tasks()->saveMany(factory(Task::class, 7)->create([
        //         'todo_id' => $todo->id
        //     ]));
        // });
    }
}
