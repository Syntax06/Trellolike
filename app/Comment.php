<?php

namespace App;
use Illuminate\Database\Eloquent\Model;


class Comment extends Model
{
    public function tasks()
    {
        return $this->belongsTo(Task::class);
        // return $this->belongsTo('App\Task');
    }

    // Protect with attributes from table
    // protected $guarded = [];
}
