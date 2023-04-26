@extends('layouts.app')
@section('head')
<title>Student List</title>
@endsection
@section('content')
<div class="m-portlet m-portlet--mobile" id="responseDiv">
  <div class="m-portlet__head table-responsive">
    <div class="m-portlet__head-caption">
      <div class="m-portlet__head-title">
        <h4><i class="m-menu__link-icon fas fa-user-tie"></i> All Students List</h5>
      </div>
    </div>
    <div class="m-portlet__head-tools">
      <ul class="m-portlet__nav">
        <li class="m-portlet__nav-item">
          <button  onclick="addRecord('{{route('students.create')}}','','GET','response_div')" class="btn btn-primary m-btn   m-btn--icon m-btn--air">
            <span><i class="fas	fa-plus"></i><span>Add New</span></span>
          </button>
        </li>
        <li class="m-portlet__nav-item">
          <div class="m-input-icon m-input-icon--left">
            <a class="btn btn-secondary m-btn--icon" id="collapsBtn" data-toggle="collapse" href="#collapseDiv" role="button" aria-expanded="true" aria-controls="collapseDiv">
              <span><i class="la la-arrows-v"></i><span>Search</span></span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  @if(session()->get('success'))
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    </button>
    <i class="la la-check-square"></i>
    <strong><?php echo session()->get('success') ?></strong>
  </div>
  @endif
  <!-- Filter Start -->
  <div class="code notranslate cssHigh collapse table-responsive" id="collapseDiv">
    <div class="m-portlet__body table-responsive">
        <form class="m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed table-responsive" enctype="multipart/form-data" id="searchForm" method="post" autocomplete="off">
            <div class="form-group m-form__group row m-form__group_custom">
              <div class="col-lg-3">
                <label class="title-custom">Name:</label>
                <input type='text' class='form-control keypressbutton' style='' name='name' id="name" placeholder="Name"  />
              </div>
              <div class="col-lg-3">
                <label class="title-custom">Father Name:</label>
                <input type='text' class='form-control keypressbutton' style='' name='father_name' id="father_name" placeholder="Name"  />
              </div>
              <div class="col-lg-3">
                  <label class="title-custom">Gender:</label>
                  <select class="form-control m-input errorDiv m-input--air select-2" name="gender" id="gender">
                    <option value="">Select</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
              </div>
              <div class="col-lg-3">
                <div class="m-form__actions m-form__actions--slid">
                  <button type="button" onclick="filter('{{route('search')}}','GET','searchresult','searchForm');" id="add" class="btn btn-primary"> <b><i class="fas fa-search"></i> Search</b></button> &nbsp;
                  <button type="button"  class="btn btn-warning" onclick="RestForm('searchForm')"> <b><i class="fas 	fa-eraser"></i> Reset</b></button>
              </div>
              </div>
            </div>
        </form>
    </div>
  </div>
  <!-- Filter End -->
  <div class="m-portlet__body table-responsive" id="searchresult">
    <table class="table table-striped- table-bordered table-hover table-checkable" style="font-size:14px;">
      <thead>
            <tr>
                <th width="5%">ID</th>
                <th>Name</th>
                <th>Father Name</th>
                <th>Gender</th>
                <th>Phone</th>
                <th width="10%">Image</th>
                <th width="10%">Action</th>
          </tr>
      </thead>
      <tbody style="width: auto;overflow-x: auto;white-space: nowrap;">
        @if(count($records)>0)
        @foreach ($records as $rec)
        <tr>
          <td>{{$rec->id }}</td>
          <td>{{ $rec->name }}</td>
          <td>{{ $rec->father_name }}</td>
          <td>
            {{$rec->gender == 1 ? 'Male' : 'Female'}}
          </td>
          <td>{{ $rec->phone }}</td>
          <td>                    
            <img src="{{asset('storage/'.$rec->image)}}" id="output" class="image responsive img-thumbnail" style="width:70%; cursor: pointer;" onclick="$('#recimage').click();">
          </td>
          <td>
              <span class="dtr-data">
                  <span class="dropdown">
                      <a href="#" class="btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown" aria-expanded="false"><i class="la la-ellipsis-h"></i></a>
                      <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-32px, 27px, 0px);">
                            <a class="dropdown-item" href="javascript:void()" onclick="addRecord('{{ route('students.edit',encrypt($rec->id)) }}','','GET','response_div')"><i class="la la-edit"></i>edit</a>
                      </div>
                  </span>
              </span>
          </td>
        </tr>
        @endforeach
        @else
        <tr>
          <td colspan="9">
            <center>
              <h3 style="color:red">Record Not Exists!</h3>
            </center>
          </td>
        </tr>
        @endif
      </tbody>
    </table>
    <!-- Pagination -->
     @if(!empty($records))
        {!!$records->links('pagination')!!}
     @endif 
  </div>
</div>
</div>
<script>
  $(function() {
    //usage
    $(".datePicker").persianDatepicker({
      cellWidth: 45,
      cellHeight: 35,
      fontSize: 14
    });
    $(".datePicker").focus(function() {
      $(this).blur();
    });
  });
</script>
@endsection