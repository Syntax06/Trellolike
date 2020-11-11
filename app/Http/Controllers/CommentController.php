<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Comment;
// use App\User;

use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    // public function index()
    // {
    //     return view ('task.task');
    // }


    public function store(Request $request, $task_id)
    {
        $request->validate(
            [
                'comment' => 'required',
            ]);

        $com = new Comment();
            $com->owner_id = Auth::User()->id;
            $com->comment=$request->comment;
            $com->task_id=$task_id;
        $com->save();

        return back();
    }

    public function destroy($del_id)
    {
        // $del = Comment::find($del_id);
        // $del->delete();

        // return back();
    }
    public function update(Request $request, $edit_id)
    {
        $request->validate(
            [
                'cmName' => 'required',
            ]);
            
        $cos = Comment::find( $edit_id);

        $cos->comment = $request->cmName;

        $cos->save();

        return back();
    }


}
