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
        <td >
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
  <script type="text/javascript">
    $(document).ready(function()
    {
        $('.pagination a').on('click', function(event) {
            event.preventDefault();
            if ($(this).attr('href') != '#') {
                document.cookie = "no="+$(this).text();
                var dataString = '';
                item = $('#keyWord').val();
                var params = $('#searchForm').serialize();
                dataString += "&page="+$(this).attr('id')+"&ajax="+1+"&params="+params+"&type=search";
                        $.ajax({
                        url: '{{ route("search") }}',
                        data: dataString,
                        type: 'GET',
                        beforeSend: function(){
                          $("#searchresult").html('<div class="col text-center" style="width:100%"><img alt="loader" src="{{asset("assets/img/loader.gif")}}" /></div>');
                        },
                        success: function(response)
                        {
                            $('#searchresult').html(response);
                        }
                    }
                );
            }
        });
    });
  </script>