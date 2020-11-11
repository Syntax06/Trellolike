@extends('layouts.app')

@section('content')

<section class='container-fluid stx-margtop'>
    <h1 class="text-center">Liste des Users</h1>


<div class="row d-flex flex-row justify-content-center">
    <div class="col-10 d-flex flex-row justify-content-center">

        <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">Role</th>
                <th scope="col">#</th>
                <td scope="col">Nom</td>
                <td scope="col">Prenom</td>
                <td scope="col">Birthday</td>
                <td scope="col">Email</td>
                <td scope="col">Adresse</td>
                <td scope="col">Ville</td>
                <td scope="col">Code Postal</td>
                <td scope="col">Phone</td>
                <td scope="col">Crée</td>
                <td scope="col">Counts<br>( B - T - T - C )</td>
              </tr>
            </thead>
            <tbody>
                @foreach($userss as $usr)
                  <tr>
                    <th>

                    <form action="@route('arole', $usr->id)" method="post">
                            @csrf
                        @if($usr->role != 'admin')
                            <input name='switchRole' value="admin" placeholder="sdfsdf" type="hidden">
                            <button type="submit" class="btn btn-sm btn-outline-success">admin</button>
                        @else
                            <input name='switchRole' value="" type="hidden">
                            <button type="submit" class="btn btn-sm btn-success">admin</button>
                        @endif
                    </form>

                    </th>
                    <th>
                        <form action="@route('adestroy', $usr->id)" method="post">
                            @csrf
                            <button class="btn btn-sm btn-danger" type="submit">{{ $usr->id }}</button>
                        </form>
                    </th>
                    <td>{{ $usr->name }}</td>
                    <td>{{ $usr->firstname }}</td>
                    <td>{{ $usr->birthday }}</td>
                    <td>{{ $usr->email }}</td>
                    <td>{{ $usr->address }}</td>
                    <td>{{ $usr->city }}</td>
                    <td>{{ $usr->postalcd }}</td>
                    <td>{{ $usr->phone }}</td>
                    <td>{{ Carbon\Carbon::parse($usr->created_at)->format('d/m/y à H:i') }}</td>
                    <td>
                        {{ $board->where('owner_id', '=', $usr->id)->count()}} -
                        {{ $todo->where('owner_id', '=', $usr->id)->count()}} -
                        {{ $task->where('owner_id', '=', $usr->id)->count()}} -
                        {{ $com->where('owner_id', '=', $usr->id)->count()}}
                    </td>


                </tr>
                @endforeach
            </tbody>
          </table>

    </div>
</div>

</section>

@endsection
