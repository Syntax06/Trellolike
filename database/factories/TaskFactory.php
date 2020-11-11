<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Task;
use App\Todo;

use Illuminate\Support\Collection;
use Faker\Generator as Faker;

$factory->define(Task::class, function (Faker $faker) {
    return [
        'taskContent' => $faker->text(14),
        'todo_id' => Todo::all()->pluck('todo_id')->shuffle()->first()
    ];
});

// 'todo_id' => factory(Todo::class)->create()->id
