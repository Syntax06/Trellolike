<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use App\Task;

use Illuminate\Support\Collection;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'comment' => $faker->text(20),
        'task_id' => Task::all()->pluck('task_id')->shuffle()->first()
    ];
});

// 'task_id' => factory(Task::class)->create()->id


