<div class="m-grid m-grid--hor m-grid--root m-page">
    <!-- Include header -->
    @include('layouts.partials._tobNav')
    <!-- begin::Body -->
    <div  class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
            <!-- Include aside -->
            @include('layouts.partials._asideLeft')  
        <div class="m-grid__item m-grid__item--fluid m-wrapper">
            <div class="m-content" id="response_div">
              @yield('content')
            </div>
        </div>
    </div>
    <!-- end:: Body -->
</div>