<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>Welcome to Postinng</title>
    </head>
    <body >
       <div id="app">
           <postinng-index>
           </postinng-index>
       </div>
       <script src="{{ asset('js/app.js') }}"></script>
    </body>


  
</html>
