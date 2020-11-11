<?php

namespace App;
use Illuminate\Database\Eloquent\Model;


class Task extends Model
{
    public function comments() {
        return $this->hasMany(Comment::class);
        // return $this->hasMany('App\Comment');
    }

    public function todos()
    {
        return $this->belongsTo(Todo::class);
        // return $this->belongsTo('App\Todo');
    }

    // Protect with attributes from table
    // protected $guarded = [];
}
