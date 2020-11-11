@extends('layouts.app')

@foreach ($myBoard as $b)
@if ($b->id == $board_id)
    @foreach ($myBackground as $bg)
    @if ($b->background == $bg->id)
<style>
    .stx-bkground {
        background-image: url("../../assets/background/{{ $bg->name }}.jpg");
        /* background-attachment: scroll; */
        /* background-attachment: fixed; */
        /* background-attachment: local; */
        /* background-attachment: fixed, scroll; */
        background-repeat: no-repeat, repeat-y;
        background-size:cover;
        background-position: center center;
        width:100%;
        height: 92%;
    }
    .cos-bg{
        overflow:scroll;
        height: 80%;
    }
</style>
    @endif
    @endforeach
@endif
@endforeach

@section('content')

{{-- button for partage --}}
<div class="container-fluid d-flex flex-row">
    <a href="@route('board')" class="btn btn-bg btn-dark">retour</a>
    <form action="@route('pivot')" method='post'>
        @csrf
        <div class="input-group mb-3 ml-5">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Partager</label>
                <select name='share_id' class="custom-select" id="inputGroupSelect01">
                    <option selected></option>
                    @foreach ($sharing as $share)
                        <option value="{{$share->id}}">{{$share->name}}</option>
                    @endforeach
                </select>
                <input type='hidden' name='board_id' value='{{$board_id}}'>
                <button class="btn btn-success ml-2">valider</button>
            </div>
        </div>
    </form>

    <div>
        <p>

@foreach ($myPivot as $p)
    @foreach ($sharing as $sha)
        @if($sha->id == $p->user_id)
            {{$sha->name}}
        @endif
    @endforeach
@endforeach

        </p>
    </div>

</div>

@foreach ($myBoard as $b)
    @if ($b->id == $board_id)
        <div id="stx-changebn1">
            <div class="d-flex justify-content-center" >
                <h1 class=>{{$b->boardName}}</h1>
                <a onclick="changeBoard()"><img src="@asset('assets/modif.png')"></a>
            </div>
        </div>
        <div id='stx-changebn2' style='display:none;'>
            <form action="@route('board.update', $b->id)" method="POST">
                @csrf
                <div class="d-flex justify-content-center" >
                    <input type="text" name="bName" value="{{$b->boardName}}">
                    <input type="submit" name="board_id" value="edit" class="btn btn-warning btn-sm ml-2">
                </div>
            </form>
        </div>
    @endif
@endforeach

    <form  method="post" action="@route('todo.store',[$board_id])">
        @csrf

            @if($errors->any())
                @foreach ($errors->all() as $e)
                    <h3 class="clignote">{{ $e }}</h3>
                @endforeach
            @endif

            <div class="input-group mb-3 w-25 ml-5">
                <div class="input-group-prepend">
                    <button class="input-group-text" type='submit' id="inputGroup-sizing-default">New ticket</button>
                </div>
                <input type="text" name='todoName' class="form-control" aria-describedby="inputGroup-sizing-default">
            </div>
        </form>

<section class="container-fluid cos-bg">
    <div class="row d-flex flex-nowrap">

        @foreach ($myTodo as $todo)
        <div class="col-3 ">

            <div class="card stx-cards rounded">

                    <div class="card-header stx-cards-todo">

                        <div id="stx-1change{{ $todo->id }}">
                            <div class="d-flex justify-content-center" >
                                <h1 class=>{{ $todo->todoName }}</h1>
                                <a onclick="changeTodo('{{$todo->id}}')"><img width='25px' src="@asset('assets/modif.png')"></a>
                            </div>
                        </div>
                        <div id='stx-2change{{ $todo->id }}' style='display:none;'>
                            <form action="@route('todo.update', $todo->id)" method="POST">
                                @method('put')
                                @csrf
                                <div class="d-flex justify-content-center" >
                                    <input type="text" name="tdName" value="{{$todo->todoName}}">
                                    <input type="submit"  value="edit" class="btn btn-warning btn-sm ml-2">
                                    {{-- onclick="changeBoard()" --}}
                                </div>
                            </form>

                            <form  method="post" action="@route('destroy', $todo->id )">@csrf
                                <input type="hidden" name="model" value="Todo">
                                <button type="submit" class="close mr-3 p-1 text-danger bg-light rounded" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </form>

                        </div>
                    </div>


                @foreach ($myTask as $task)
                @if ($task->todo_id == $todo->id)

                <div class="row ">
                    <div class="col-auto d-flex flex-row w-100 px-4">
                        <a  data-toggle="collapse" href="#collaps{{$task->id}}" role="button" aria-expanded="false" aria-controls="collaps{{$task->id}}">
                            <img width='25px' src="@asset('assets/modif.png')">
                           </a>

                            <h5>{{ $task->taskContent }}</h5>

                                <a data-toggle="modal" class="" href="#commentaires{{$task->id}}" role="button" aria-expanded="false" aria-controls="commentaires{{$task->id}}">
                                    <img width="25px;" src=@asset("../assets/comment.png") alt="commentaires">
                                @foreach ($myComment as $com)
                                @if ($com->task_id == $task->id)
                                <span class="badge badge-pill badge-info text-bold p-1"> {{$myComment->where('task_id', '=', $task->id)->count()}} </span>
                                @break
                                @endif
                                @endforeach
                                </a>
                    </div>
                    <div class="col-auto flex-row w-100 px-4 collapse" id="collaps{{$task->id}}">
                        <form method='post' action="@route('task.update',$task->id)">
                            @method('put')
                            @csrf
                            <input name='tName' type="text" placeholder="modifier le contenu"> <input type="submit">
                        </form>

                        <form action="@route('destroy', $task->id )" class="" method="post">@csrf
                            <input type="hidden" name="model" value="Task">
                            <input type="submit" value="x" class="btn btn-sm btn-danger">
                            </form>
                    </div>

                </div>
                <hr>
                @include('task')
                @endif
                @endforeach

                <form  method="post" action="@route('task.store',[$todo->id])">
                    @csrf
                    <input type="text" name="taskContent"  placeholder="nouvelle tache">
                    <input type='submit' value='+'>
                </form>
            </div>
        </div>
        @endforeach
    </div>
</section>

@endsection

<script>
  function changeBoard() {

      var x = document.getElementById("stx-changebn1");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

      var y = document.getElementById("stx-changebn2");
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
    }

    function changeTodo(id) {

    var x = document.getElementById("stx-1change"+id);
    if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}

var y = document.getElementById("stx-2change"+id);
if (y.style.display === "none") {
  y.style.display = "block";
} else {
  y.style.display = "none";
}

}
    </script>
