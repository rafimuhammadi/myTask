<!DOCTYPE html>
<html lang="en">
	<!-- begin::Head -->
	<head>
		<meta charset="utf-8" />
		<title>CW4WA| LOGIN</title>
		<meta name="description" content="Latest updates and statistic charts">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
		<link href="{!!asset('assets/vendors/base/vendors.bundle.css')!!}" rel="stylesheet" type="text/css" />
		<link href="{!!asset('assets/demo/demo12/base/style.bundle.css')!!}" rel="stylesheet" type="text/css" />
	</head>
	<!-- end::Head -->
    <body class="m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
	<!-- begin::Body -->
    <div class="m-grid m-grid--hor m-grid--root m-page">
        <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-3" id="m_login" style="background-image: url({{asset('assets/img/login.jpg') }});">
            <div class="m-grid__item m-grid__item--fluid	m-login__wrapper">
                <div class="m-login__container">
                    <div class="m-login__signin">
                        <div class="m-login__head">
                            <h3 class="m-login__title text-white">Sign In To Admin</h3>
                        </div>
                        <form class="m-login__form m-form" method="POST" action="{{ route('login') }}">
                            <div class="text-danger text-center" style="font-size:18px">
								@if($errors->has('email'))
								<div class="m-alert m-alert--icon m-alert--air alert alert-success alert-dismissible fade show" role="alert" style="background-color:#9816f4;padding:10px; border-radius:10px">
									<div class="m-alert__icon">
										<i class="la la-warning" style="color:red"></i>
									</div>
									<div class="m-alert__text">
										<strong style="color:red">{{ $errors->first('email') }}</strong>
									</div>
									<div class="m-alert__close">
										<button type="button" class="close" data-dismiss="alert" aria-label="Close">
										</button>
									</div>
								</div>
								@endif
							</div>
                            @csrf
                            <div class="form-group m-form__group">
                                <input  type="text" placeholder="Email" class="form-control m-input{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" required autofocus name="email" autocomplete="off">
                            </div>
                            <div class="form-group m-form__group">
                                <input type="password" placeholder="Password" class="form-control m-input m-login__form-input--last{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                            </div>
                                <div class="col m--align-left m-login__form-left pt-3">
                                    <label class="m-checkbox  m-checkbox--dark">
                                        <input type="checkbox" name="remember"> Remember me
                                        <span></span>
                                    </label>
                                </div>
                                <button type="submit" id="signin_submit" class="btn btn-focus m-btn m-btn--pill btn-lg btn-block m-btn--air text-white py-2">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<!--begin::Page Scripts -->
    <script src="{!!asset('assets/vendors/base/vendors.bundle.js')!!}" type="text/javascript"></script>
    <script src="{!!asset('assets/demo/demo12/base/scripts.bundle.js')!!}" type="text/javascript"></script>
	<!--end::Page Scripts -->
</body>
	<!-- end::Body -->
</html>
