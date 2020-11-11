<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\User;
use App\Board;
use App\Todo;
use App\Task;
use App\Comment;

class AdminController extends Controller
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
    //     $board=new Board();
    //     $board->user_id = Auth::User()->id;
    //     $board->owner_id = Auth::User()->id;
    //     $board->boardName=$request->boardName;
    //     $board->background=$request->background;
    // $board->save();
    // return back();
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
    public function show()
    {
        $userss = User::all();
        $board = Board::all();
        $todo = Todo::all();
        $task = Task::all();
        $com = Comment::all();

        return view ('admin', [
            "userss" => $userss,

            "board" => $board,
            "todo" => $todo,
            "task" => $task,
            "com" => $com
        ]);
    }

    public function role(Request $req, $id)
    {
        if ($id != Auth::User()->id)
        {
            $reroll = User::find($id);
            $reroll->role = $req->switchRole;
            $reroll->save();
        }

        return back();
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
    public function destroy($id)
    {

        if ($id != Auth::User()->id)
        {
            $del = User::find($id);
            $del->delete();
        }
            return back();

    }
}

// return redirect('destroy', 'User');
// return redirect(url('/user/crud', [$id, 'User']));
