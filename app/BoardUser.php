<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

use \App\User;
use \App\Board;


class BoardUser extends Model
{

    public $timestamps = false;
    public $table = 'board_user';
    // public function users()
    // {
    //     return $this->hasMany(User::class);
    // }

    // public function boards()
    // {
    //     return $this->hasMany(Board::class);
    // }
}

