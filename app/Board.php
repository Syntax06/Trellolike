<?php

namespace App;
use Illuminate\Database\Eloquent\Model;


class Board extends Model
{
    public function todos()
    {
        return $this->hasMany(Todo::class);
        // return $this->hasMany('App\Todo');
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
        // return $this->belongsTo('App\User');
    }

    // Protect with attributes from table
    // protected $guarded = [];

}
