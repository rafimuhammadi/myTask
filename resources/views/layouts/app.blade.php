<!DOCTYPE html>
<html lang="en">
  <!-- begin::Head -->
	<head>
		<meta charset="utf-8" />
		@yield('head')
		<meta name="description" content="Latest updates and statistic charts">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
		<link href="{{asset('assets/vendors/base/vendors.bundle.css')}}" rel="stylesheet" type="text/css" />
		<link href="{{asset('assets/demo/demo12/base/style.bundle.css')}}" rel="stylesheet" type="text/css" />
</head>
<body class="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
    @include('layouts.partials._loader_base')
    @include('layouts.layout')
    	<script src="{!!asset('assets/vendors/custom/jquery.js')!!}" type="text/javascript"></script>
		<script src="{!!asset('assets/vendors/base/vendors.bundle.js')!!}" type="text/javascript"></script>
		<script src="{!!asset('assets/demo/demo12/base/scripts.bundle.js')!!}" type="text/javascript"></script>
		<div class="ring"> </div>
	@yield('js-code')
	@include('assets.custome_js')
</body>
</html>
