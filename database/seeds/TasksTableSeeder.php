<?php

use Illuminate\Database\Seeder;

use App\Task;
use App\Comment;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Task::class, 100)->create();

        // factory(Task::class, 3)->create()->each(function($task) {
        //     $task->comments()->saveMany(factory(Comment::class, 5)->create([
        //         'task_id' => $task->id
        //     ]));
        // });
    }
}
