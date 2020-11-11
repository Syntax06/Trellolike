<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/error404final.css') }}">


    <title>Erreur 404</title>

</head>
<body>


        <div class="circle"> </div>

        <audio src="{{ asset('assets/404audio.mp3') }}" autoplay ></audio>
        <video src="{{ asset('assets/404video.m4v') }}" autoplay= "" muted></video>
        <h2 class="befor2">  4  <span>  0  </span>  4 </h2>

        <div class="circle"> </div>

    <svg>
        <filter id="wavy">
            <feturbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
                <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02" repeatCount="indefinite"></animate>
             </feturbulence>
             <feDisplacementMAP in="SourceGraphic" scale="30">

             </feDisplacementMAP>
        </filter>
    </svg>
</body>
</html>
