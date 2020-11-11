<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Board;
use App\Background;
use App\BoardUser;

// use Illuminate\Support\Facades\DB;
//      $board->user_id = DB::table('users')->select('id')->get();
// $uid = Auth::User()->id;

class BoardController extends Controller
{
    public function index()
    {
        $myBackground =  Background::all();

        $myShareBoards = BoardUser::all()->where('user_id' , '==' , Auth::User()->id);
        // dd($myShareBoards);

        $otherB = Board::all()->where('user_id' , '!=', Auth::User()->id);
        // dd($otherB);

        return view ('board', [
            "boards" => Board::all()->where('user_id', Auth::User()->id),
            "myBackground"=> $myBackground,
            "shareBoards" => $myShareBoards,
            'otherB' => $otherB,
        ] );
    } // ('board', compact('boards'));

    public function store(Request $request)
    {
        $request->validate(
            [
                'boardName' => 'required',
                'background' => 'required',
            ]);

        $board=new Board();
            $board->user_id = Auth::User()->id;
            $board->owner_id = Auth::User()->id;
            $board->boardName=$request->boardName;
            $board->background=$request->background;
        $board->save();

        return back();
    }

        /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($del_id)
    {
        // $del = Board::find($del_id);
        // $del->delete();

        // return back();
    }

    public function update(Request $request, $edit_id)
    {
        // dd($edit_id);
        // dd($request);
        Board::where('user_id', Auth::user()->id)
            ->where('id', $edit_id)
            ->update(['boardName' => $request->bName]);

        return back();
    }
}
