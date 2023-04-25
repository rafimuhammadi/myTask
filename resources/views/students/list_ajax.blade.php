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
          <img src="{{asset('storage/'.$rec->image)}}" id="output" class="image responsive img-thumbnail" style="width:100%; cursor: pointer; margin-top: 10px;" onclick="$('#recimage').click();">
        </td>
      </tr>
      @endforeach
      @else
      <tr>
        <td colspan="9">
          <center>
            <h3 style="color:red">{{ trans('global.noRecordFound') }}</h3>
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
    $(document).ready(function() {
      $('.pagination a').on('click', function(event) {
        event.preventDefault();
        if ($(this).attr('href') != '#') {
          // Get current URL route
          document.cookie = "no=" + $(this).text();
          var dataString = '';
          dataString += "&page=" + $(this).attr('id') + "&ajax=" + 1;
          $.ajax({
            url: '{{ url()->current() }}',
            data: dataString,
            type: 'get',
            beforeSend: function() {
                $(".m-page-loader.m-page-loader--base").css("display","block");
            },
            success: function(response) {
                $(".m-page-loader.m-page-loader--base").css("display","none");
              $('#searchresult').html(response);
            }
          });
        }
      });
    });
  </script>