@if($paginator->hasPages())
    @php $previousPage = $paginator->currentPage()-1; @endphp
    @php $nextPage = $paginator->currentPage()+1; @endphp
    <div class="mt-4">
        <div class="row dataTables_paginate paging_simple_numbers">
            <div class="col-xs-6 col-lg-4 col-md-6 col-sm-12 col-xs-12 table-responsive">
                <span class="pagination-total pagination__desc">
                    {{ trans('pagination.total') }} <span><b>{!! $paginator->count() !!}</b></span>
                    {{ trans('pagination.of') }}: <span><b>{!! $paginator->total() !!}</b></span>
                    {{ trans('pagination.page') }}: <span><b>{!! $paginator->currentPage() !!}</b></span>
                </span>
            </div>
            <div class="col-xs-6 col-lg-8 col-md-6 col-sm-12 col-xs-12 table-responsive">
                <span class="pagination-pages">
                    <ul class="pagination" role="navigation" id="paginatorBtn">
                        {{-- First Page Link --}}
                        @if ($paginator->onFirstPage())
                            <li class="page-item disabled" aria-disabled="true">
                                <span class="page-link" aria-hidden="true">{{ trans('pagination.first') }}</span>
                            </li>
                        @else
                            <li class="page-item">
                                <a class="page-link" id="1" href="{{ $paginator->toArray()['first_page_url'] }}">{{ trans('pagination.first') }}</a>
                            </li>
                        @endif
                        {{-- Previous Page Link --}}
                        @if ($paginator->onFirstPage())
                            <li class="page-item disabled" aria-disabled="true">
                                <span class="page-link" aria-hidden="true">{{ trans('pagination.previous') }}</span>
                            </li>
                        @else
                            <li class="page-item">
                                <a class="page-link" id="{!! $previousPage !!}" href="{{ $paginator->previousPageUrl() }}">{{ trans('pagination.previous') }}</a>
                            </li>
                        @endif
                        {{-- Pagination Elements --}}
                        @foreach ($elements as $element)
                            {{-- "Three Dots" Separator --}}
                            @if (is_string($element))
                                <li class="page-item disabled" aria-disabled="true"><span class="page-link">{{ $element }}</span></li>
                            @endif
                            {{-- Array Of Links --}}
                            @if (is_array($element))
                                @foreach ($element as $page => $url)
                                    @if ($page == $paginator->currentPage())
                                        <li class="page-item active" aria-current="page"><span class="page-link">{{ $page }}</span></li>
                                    @else
                                        <li class="page-item"><a class="page-link" id="{!! $page !!}" href="{{ $url }}">{{ $page }}</a></li>
                                    @endif
                                @endforeach
                            @endif
                        @endforeach
                        {{-- Next Page Link --}}
                        @if ($paginator->hasMorePages())
                            <li class="page-item">
                                <a class="page-link" id="{!! $nextPage !!}" href="{{ $paginator->nextPageUrl() }}" rel="next">{{ trans('pagination.next') }}</a>
                            </li>
                        @else
                            <li class="page-item disabled" aria-disabled="true">
                                <span class="page-link" aria-hidden="true">{{ trans('pagination.next') }}</span>
                            </li>
                        @endif
                        {{-- Last Page Link --}}
                        @if ($paginator->hasMorePages())
                            <li class="page-item">
                                <a class="page-link" id="{!! $paginator->lastPage() !!}" href="{{ $paginator->toArray()['last_page_url'] }}">{{ trans('pagination.last') }}</a>
                            </li>
                        @else
                            <li class="page-item disabled" aria-disabled="true">
                                <span class="page-link" aria-hidden="true">{{ trans('pagination.last') }}</span>
                            </li>
                        @endif
                    </ul>
                </span>
            </div>
        </div>
    </div>
@endif
