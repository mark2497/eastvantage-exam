<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ env("APP_NAME") }}</title>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body class="antialiased">
        <div id="app"></div>
    </body>

    <script src="{{ mix('js/app.js') }}"></script>
</html>
