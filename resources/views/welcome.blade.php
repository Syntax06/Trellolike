<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="CSS/welcome.css">
        <title>DreamTeam - Trello Like</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

    </head>
    <body>
        <div class=" position-ref full-height">
            <div class="content">
                <a href="@route('auto')">
                    <section>
                        <div class="flex-center content">
                                                                    {{-- AUTO REDIRECTION: Auth > Dashboard || Login/Register --}}
                            {{-- @if (Route::has('login'))
                                <div class="links stx-colorb">
                                    @auth
                                        <a href="{{ url('/home') }}">Home</a>
                                    @else
                                        <a href="{{ route('login') }}">Login</a>

                                        @if (Route::has('register'))
                                            <a href="{{ route('register') }}">Register</a>
                                        @endif

                                    @endauth
                                </div>
                            @endif --}}
                        </div>
                        <video src="assets/smoke.mp4"autoplay muted></video>

                        <h1>
                            <span>D</span>
                            <span>r</span>
                            <span>e</span>
                            <span>a</span>
                            <span>m</span>
                            <span>T</span>
                            <span>e</span>
                            <span>a</span>
                            <span>m</span>
                        </h1>

                    </section>
                </a>
            </div>
        </div>
    </body>
</html>
