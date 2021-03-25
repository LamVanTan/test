
<!DOCTYPE html>
    <head>
        <title>Visitors an Admin Panel Category Bootstrap Responsive Website Template | Home :: w3layouts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<!-- css all -->
		<link href="{{ asset('admin/css/all.css') }}" rel='stylesheet' type='text/css' />
		<!-- //icon -->
		<link href="{{ asset('admin/css/font-awesome.css') }}" rel="stylesheet"> 
		{{-- ChartScript --}}
		<script src="{{ asset('admin/js/highcharts.js') }}"></script>
    </head>

    <body>
        <section id="container">
            <!--header start-->
            @include('layouts.admin.header')
            <!--header end-->

            <!--sidebar start-->
            @include('layouts.admin.sidebar')
            <!--sidebar end-->

            <!--main content start-->
            <section id="main-content">
	            @yield('content')

                <!-- footer -->
                @include('layouts.admin.footer')
                <!-- / footer -->
            </section>
        </section>

		<script type="text/javascript" src="{{ asset('admin/js/app.js') }}"></script>
		<script type="text/javascript" src="{{ asset('admin/js/custom.js')}}"></script>
    </body>
</html>

