<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\User;
use App\Board;
use App\Todo;
use App\Task;
use App\Comment;
use App\Background;

class CrudController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $del_id)
    {

        // if (Board::where('user_id'== Auth::user()->id) ==  Board::where('board_id'== $board_id)){
        $model = $request->model;

        if ($model == 'User' ) {
            $del = User::find($del_id);
        } else if ($model == 'Board' ) {
            // Only owner can delete

            if ( Board::where('user_id' == Auth::user()->id) )
            {
                $del = Board::find($del_id);
            }
        } else if ($model == 'Todo' ) {
            $del = Todo::find($del_id);
        } else if ($model == 'Task' ) {
            $del = Task::find($del_id);
        } else if ($model == 'Comment' ) {
            $del = Comment::find($del_id);
        } else if ($model == 'Background' ) {
            $del = Background::find($del_id);
        }

        $del->delete();

        return back();
    }
    // ->where('user_id', Auth::user()->id)
}
