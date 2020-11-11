<?php

namespace App;
use Illuminate\Database\Eloquent\Model;


class Todo extends Model
{
    public function tasks() {
        return $this->hasMany(Task::class);
        // return $this->hasMany('App\Task');
    }

    public function boards()
    {
        return $this->belongsTo(Board::class);
        // return $this->belongsTo('App\Board');
    }

    // Protect with attributes from table
    // protected $guarded = [];
}
