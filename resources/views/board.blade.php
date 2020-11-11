@extends('layouts.app')

@section('content')

    <h1 class="text-center">Dashboard</h1>
    @if(Auth::user()->firstname)
        <p class="text-center">session de : {{ Auth::user()->firstname }} -
    @else
        <p class="text-center text-info">Pensez à renseigner votre profil...  -
    @endif
    {{ \Carbon\Carbon::now()->isoFormat('LL') }}
    </p>
    @if($errors->any())
    @foreach ($errors->all() as $e)
        <h3 class="clignote">{{ $e }}</h3>
    @endforeach
    @endif

<form action="@route('board.store')" method="post">
@csrf
@foreach ($myBackground as $bg)
    <input name ="background" type='radio' value="{{$bg->id}}.jpg"> <img width="40px" src="../assets/background/{{$bg->name}}.jpg">
@endforeach
<input name='boardName'type='text' placeholder="Nom du tableau">
<input type='submit' value='+'>
</form>

<section class='container stx-margtop'>
    <h2>Mes Tableaux :</h2>
    <div class='row'>
        @foreach ($boards as $b)
        {{-- @dd($boards) --}}
        <div class=col-3>
            <a href="@route('todo', $b->id)">
            <div class="card text-white">
                {{-- <div class="card-header">
                </div> --}}
                @foreach ($myBackground as $bg)
                @if ($b->background == $bg->id)
                <img src="../assets/background/{{ $bg->name }}.jpg" class="card-img" alt="screen dashboard">
                @endif
                @endforeach
                <div class="card-img-overlay">
                    <form action="@route('destroy', $b->id)" method="POST">@csrf
                        <input type="hidden" name="model" value="Board">
                        <input type="submit" name="board_id" value="x" class="btn btn-danger btn-sm">
                    </form>
                    <h5 class="card-title text-center" style="color:black">{{ $b->boardName }}</h5>
                </div>
                <div class="card-footer text-muted">
                    {{ Carbon\Carbon::parse($b->updated_at)->format('d/m/y à H:i') }}
                    {{-- {{ \Carbon\Carbon::now()->calendar() }} --}}
                    {{-- {{$b->updated_at}} --}}
                </div>
            </div>
            </a>
        </div>
        @endforeach

    </div>
    <h2>Mes tableaux partagés :</h2>
    <div class="row">
        @foreach ($otherB as $b)
        @foreach ($shareBoards as $sh)
        @if ($b->id == $sh->board_id)
        {{-- @dd($boards) --}}
        <div class=col-3>
            <a href="@route('todo', $b->id)">
            <div class="card text-white">
                {{-- <div class="card-header">
                </div> --}}
                @foreach ($myBackground as $bg)
                @if ($b->background == $bg->id)
                <img src="../assets/background/{{ $bg->name }}.jpg" class="card-img" alt="screen dashboard">
                @endif
                @endforeach
                <div class="card-img-overlay">

                    <h5 class="card-title text-center" style="color:black">{{ $b->boardName }}</h5>
                </div>
                <div class="card-footer text-muted">
                    {{ Carbon\Carbon::parse($b->updated_at)->format('d/m/y à H:i') }}
                    {{-- {{ \Carbon\Carbon::now()->calendar() }} --}}
                    {{-- {{$b->updated_at}} --}}
                </div>
            </div>
            </a>
        </div>
        @endif
        @endforeach
        @endforeach
    </div>

</section>

@endsection
