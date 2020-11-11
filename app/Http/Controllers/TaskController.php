<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
// VERIF SI TASK OU TODO
use App\Task;

use Illuminate\Support\Facades\Auth;        // Need for get user login

class TaskController extends Controller
{
    // public function index()
    // {
    //     return view ('task.task');
    // }


    public function store(Request $request, $todo_id)
    {
        $request->validate(
            [
                'taskContent' => 'required',
            ]);

            $tk = new Task();
                $tk->owner_id = Auth::User()->id;
                $tk->taskContent=$request->taskContent;
                $tk->todo_id=$todo_id;
            $tk->save();

            return back();
    }

    public function destroy($del_id)
    {
        // $del = Task::find($del_id);
        // $del->delete();

        // return back();
    }

    public function update(Request $request, $edit_id)
    {
        $request->validate(
            [
                'tName' => 'required',
            ]);


        $cos = Task::find( $edit_id);

        $cos->taskContent = $request->tName;

        $cos->save();

        return back();
    }

}
