<header id="m_header" class="m-grid__item m-header" m-minimize-offset="200" m-minimize-mobile-offset="200">
    <div class="m-container m-container--fluid m-container--full-height">
      <div class="m-stack m-stack--ver m-stack--desktop">
        <!-- BEGIN: Brand -->
        <div class="m-stack__item m-brand m-brand--skin-dark">
          <div class="m-stack m-stack--ver m-stack--general">
            <div class="m-stack__item m-stack__item--middle">
              <a href="{{route('home')}}" class="text-white fs-1">
                  CW4WA
              </a>
            </div>
            <div class="m-stack__item m-stack__item--middle m-brand__tools">
              <!-- BEGIN: Left Aside Minimize Toggle -->
              <a href="javascript:;" id="m_aside_left_minimize_toggle" class="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block">
                <span></span>
              </a>
              <a href="javascript:;" id="m_aside_left_offcanvas_toggle" class="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                <span></span>
              </a>
            </div>
          </div>
        </div>
        <!-- END: Brand -->
        <div class="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
          <!-- BEGIN: Horizontal Menu -->
          <button class="m-aside-header-menu-mobile-close m-aside-header-menu-mobile-close--skin-dark" id="m_aside_header_menu_mobile_close_btn">
            <i class="la la-close"></i>
          </button>
          <div id="m_header_menu" class="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark">
            <ul class="m-menu__nav">
              <li class="m-menu__item m-menu__item--submenu m-menu__item--rel text-white">
                <p style="font-size:1.5rem">Canada Woman For Woman In Afghanistan</p>
              </li>
            </ul>
          </div>
          <!-- END: Horizontal Menu -->
          <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
            <div class="m-stack__item m-topbar__nav-wrapper">
            <ul class="m-topbar__nav m-nav m-nav--inline">
              {{-- User Profile Start --}}
              <li class="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                <a href="#" class="m-nav__link m-dropdown__toggle">
                  <span class="m-topbar__welcome"></span>
                  <span class="m-topbar__username kt-menu__link-text text-default m-menu__link-text-custom">{{Auth::user()->name }}</span>&nbsp;&nbsp;
                </a>
                <div class="m-dropdown__wrapper">
                  <span class="m-dropdown__arrow m-dropdown__arrow--center m-dropdown__arrow--adjust"></span>
                  <div class="m-dropdown__inner">
                    <div class="m-dropdown__header m--align-center text-dark">
                      <div class="m-card-user m-card-user--skin-dark">
                        <div class="m-card-user__details">
                          <span class="m-card-user__name font-weight-bold m--font-weight-500 text-dark m-menu__link-text-custom">{{ Auth::user()->name }}</span>
                        </div>
                      </div>
                    </div>
                    <hr>
                    <div class="m-dropdown__body">
                      <div class="m-dropdown__content">
                        <ul class="m-nav m-nav--skin-light">
                          <li class="m-nav__item">
                            <a class="m-nav__link" href="{{route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                              <i class="m-nav__link-icon flaticon-logout"></i>
                              <span class="m-nav__link-title">
                                <span class="m-nav__link-wrap">
                                  <span class="m-menu__link-text-custom">Logout</span>
                                </span>
                              </span>
                            </a>
                            <form id="logout-form" action="{{route('logout') }}" method="POST" style="display: none;">@csrf</form>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {{-- User Profile End --}}
            </ul>
          </div>
        </div>
      </div>
    </div>
</header>