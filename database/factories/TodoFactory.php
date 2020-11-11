<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Todo;
use App\Board;

use Illuminate\Support\Collection;
use Faker\Generator as Faker;

$factory->define(Todo::class, function (Faker $faker) {
    return [
        'todoName' => $faker->name,
        'board_id' => Board::all()->pluck('board_id')->shuffle()->first()

    ];
});

// 'board_id' => factory(Board::class)->create()->id
