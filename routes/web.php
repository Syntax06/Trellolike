<?php

use App\Admin;

use App\User;

Route::get('/', function () {return view('welcome');})->name('/');
Route::get('/auto', 'AutoController@auto')->name('auto');
Route::get('presentation', function () {return view('presentation');})->name('presentation');



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


// ROUTING [Authentifier]
// > /user/profile/
// > /user/dashboard/
// > /user/board/

// ADMIN ROUTES----------------
// ----------------------------
Route::prefix('admin')->middleware('admin')->group(function () {
    Route::get('/', 'AdminController@show')->name('admin');
    Route::post('/role/{id}', 'AdminController@role')->name('arole')
    ->where('edit_id', '[0-9]+');
    Route::post('/destroy/{id}', 'AdminController@destroy')->name('adestroy')
    ->where('edit_id', '[0-9]+');

});

// AUTH ROUTES----------------
// ----------------------------
Route::prefix('user/')->middleware('auth')->group(function () {
    // DASHBOARD :  Meta View: manage all Todos (my and share)
    Route::get('/dashboard', 'BoardController@index')->name('board');
    Route::post('/dashboard', 'BoardController@store')->name('board.store');
    Route::post('/dashboard/edit/{edit_id}', 'BoardController@update')->name('board.update')
        ->where('edit_id', '[0-9]+');

    Route::get('/profile', 'ProfileController@index')->name('profile');
    Route::post('/profile', 'ProfileController@update')->name('profile.update');

    Route::prefix('board/')->group(function () {
        Route::get('/{board_id}', 'TodoController@show')->name('todo')
            ->where('board_id', '[0-9]+');
        Route::post('/{board_id}', 'TodoController@store')->name('todo.store')
            ->where('board_id', '[0-9]+');
        Route::put('/edit/{todo_id}', 'TodoController@update')->name('todo.update')
            ->where('todo_id', '[0-9]+');
    });

    Route::post('/task/{task_id}', 'TaskController@store')->name('task.store')
        ->where('task_id', '[0-9]+');
    Route::put('/task/edit/{task_id}', 'TaskController@update')->name('task.update')
        ->where('task_id', '[0-9]+');

    Route::put('/com/{comment_id}', 'CommentController@store')->name('comment.store')
        ->where('comment_id', '[0-9]+');
    Route::put('/com/edit/{comment_id}', 'CommentController@update')->name('comment.update')
        ->where('comment_id', '[0-9]+');

        // Master D. (pending)
    Route::post('/crud{id}', 'CrudController@destroy')->name('destroy')
        ->where('id', '[0-9]+');


        Route::post('/pivot', 'BoardUserController@create')->name('pivot');


});



// Test User === admin
// Route::middleware('admin')->group(function () {
//     // Page Compte Admin
// });
