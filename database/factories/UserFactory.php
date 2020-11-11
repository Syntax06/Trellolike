<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

use App\User;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->firstname,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => 'xxxxxxxxx', // password
        'remember_token' => Str::random(10),
        'surname' => $faker->lastname,
        'birthday' => $faker->date($format = 'Y-m-d', $max = 'now')
    ];
});

// $factory->define(User::class, function (Faker $faker) {
//     return [
//         'name' => 'Cos',
//         'role' => 'admin',
//         'email' => '8costa21@gmail.com',
//         'email_verified_at' => now(),
//         'password' => 'wxcwxcwxc', // password
//         'remember_token' => Str::random(10),
//         'surname' => 'Cos',
//         'birthday' => $faker->date($format = 'Y-m-d', $max = 'now')
//     ];
// });

