<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>  
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">   
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300" rel="stylesheet" type="text/css">   
    <title>Collective Money 0.1</title>
</head>
<body>
    <div id="app">
        @yield('content')
    </div>
</body>
</html>