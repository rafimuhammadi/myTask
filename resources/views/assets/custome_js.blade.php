@php
use Illuminate\Support\Facades\session;
@endphp
<!-- Custom Scripts -->
<script type="text/javascript">
/**
    Author: Abdul Rafi Muhammadi.
    Email:  ab.rafimuhammadi@gmail.com.
    Date:   20-Apr-2021.
    Desc:   Custome Script Libraries that works dynamically entire of the application.
*/
$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

// Call data from server side
const serverRequest = (url,params,method,response_div,is_modal=false)=>
{
  $.ajax({
    url: url,
    data:params,
    type:method,
    beforeSend: function()
    {
        $(".m-page-loader.m-page-loader--base").css("display","block");
    },
    success: function(response)
    {
      $(".m-page-loader.m-page-loader--base").css("display","none");
      $('#'+response_div).html(response);
    },
    error: function (request, status, error) {
      $(".m-page-loader.m-page-loader--base").css("display","none");
      json = $.parseJSON(request.responseText);
      $.each(json.errors, function(key, value){
        $('.'+key).show();
        $('.'+key).html('<span class="text-danger">'+value+'</span>');
        $('#'+key).css('border-bottom','1px solid #dc3545');
      });
    },
    cache: false,
    processData: false
  })
}

// Store Records
function storeRecord(url,form_id,method,response_div,btnID,redirectFunction,is_modal=false)
{
  if(validation(form_id))
  {
    var params = new FormData($('#'+form_id)[0]);
    serverRequestResponse(url,params,method,response_div,btnID,redirectFunction,is_modal);
  }
}

// Pass result to the function form server side
function serverRequestResponse(url,params,method,response_div,btnID='submitBtn',redirectFunction,is_modal=false)
{
  $('.error-div').html('');
  $('.errorDiv').css('border-bottom','');
  $.ajax({
    url: url,
    data:params,
    type:method,
    beforeSend: function()
    {
      // disable submit button
      $('#'+btnID).attr('disabled','disabled');
      $(".m-page-loader.m-page-loader--base").css("display","block");
    },
    success: function(response)
    {
      // enable submit button
      $('#'+btnID).removeAttr('disabled');
      $(".m-page-loader.m-page-loader--base").css("display","none");
      window.location.reload();
    },
    error: function (request, status, error) {
      // enable submit button
      $('#'+btnID).removeAttr('disabled');
      $(".m-page-loader.m-page-loader--base").css("display","none");
      json = $.parseJSON(request.responseText);
      $.each(json.errors, function(key, value){
        $('.'+key).show();
        $('.'+key).html('<span class="text-danger">'+value+'</span>');
        $('#'+key).css('border-bottom','1px solid #dc3545');
      });
    },

    cache: false,
    processData: false,
    contentType: false,
  })
}
// View Records
function viewRecord(url,params,method,response_div)
{
  serverRequest(url,params,method,response_div);
}

// Paginate Records
$(document).ready(function()
{
    $('.pagination a').on('click', function(event) {
        event.preventDefault();
        if($(this).attr('href') != '#') {
            // Get current URL route
            document.cookie = "no="+$(this).text();
            var dataString = '';
            counter = parseInt($(this).attr('id'));
            dataString += "&page="+$(this).attr('id')+"&ajax="+1+"&counter="+counter;
            $.ajax({
                url:  '{{ url()->current() }}',
                data: dataString,
                type: 'get',
                beforeSend: function(){
                    $(".m-page-loader.m-page-loader--base").css("display","block");
                },
                success: function(response)
                {
                    $('#searchresult').html(response);
                    $(".m-page-loader.m-page-loader--base").css("display","none");
                }
            });
        }
    });
});

// Filter Records
function searchRecords(url,form_id,method,response_div,loading=true)
{
  if(validation(form_id))
  {
   var params = $('#'+form_id).serialize();
   serverRequest(url,params,method,response_div,loading);
 }
}

function validation(form_id)
{
  var form = document.getElementById(form_id);
  for (i=0;i<form.length;i++)
  {
    var tempobj = form.elements[i];
    if(tempobj.id)
    {
      if(($('#'+tempobj.id).hasClass('required') && $.trim(tempobj.value) == ''))
      {
        tempobj.focus();
        if($('#'+tempobj.id).attr("type") == "number" || $('#'+tempobj.id).attr("type") == "text" || $('#'+tempobj.id).attr("type") == "date"){
          $('#'+tempobj.id).css('border-bottom','1px solid #FF0000');
        }else{
          $('#div_'+tempobj.id).css('border-bottom','1px solid #FF0000');
        }
        $('.'+tempobj.id).css('display','inline');
        $('.'+tempobj.id).html('<span class="text-danger">{{trans("validation.required")}}</span>');
        return false;
      }
      else
      {
        $('#'+tempobj.id).css('border','');
        $('.'+tempobj.id).html('');
      }
    }
  }
  return true;
}

// Filter Records
function filter(url,method,response_div,form_id)
{
    var params = $('#'+form_id).serialize();
  $.ajax({
      url : url,
      data:params,
      type: method,
      beforeSend: function(){
        $(".m-page-loader.m-page-loader--base").css("display","block");
      },
      success: function(response)
      {
        $(".m-page-loader.m-page-loader--base").css("display","none");
        $("#"+response_div).html(response);
      }
  });
}
function RestForm(form_id)
{
    document.getElementById(form_id).reset();
}
</script>
@stack('custom-js')

