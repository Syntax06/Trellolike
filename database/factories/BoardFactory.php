<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Board;
use App\User;

use Illuminate\Support\Collection;
use Faker\Generator as Faker;

$factory->define(Board::class, function (Faker $faker) {
    return [
        'boardName' => $faker->name,
        // $table->set('shareId',[])->nullable(),

        'user_id' => User::all()->pluck('id')->shuffle()->first()

    ];
});

// 'user_id' => factory(User::class)->create()->id
// find($attributes['user_id'])
