<div class="m-portlet m-portlet--mobile">
    <div class="m-portlet__head table-responsive">
      <div class="m-portlet__head-caption">
        <div class="m-portlet__head-title">
          <h4><i class="m-menu__link-icon fas fa-user-plus px-2"></i> Add New Student</h4>
        </div>
      </div>
    </div>
    <form class="m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed" enctype="multipart/form-data" id="requestForm" method="post" autocomplete="off">
        @csrf
        <div class="m-portlet__body table-responsive" id="responseDiv">
            <div class="form-group m-form__group row m-form__group_custom">
                <div class="col-lg-4">
                    <label class="title-custom">Name: <span style="color:red;">*</span></label>
                    <input class="form-control m-input errorDiv" type="text" value="" name="name" id="name" placeholder="Name">
                    <div class="name error-div" style="display:none;"></div>
                </div>
                <div class="col-lg-4">
                    <label class="title-custom">Father Name: <span style="color:red;">*</span></label>
                    <input class="form-control m-input errorDiv" type="text" value="" name="father_name" id="father_name" placeholder="Father Name">
                    <div class="father_name error-div" style="display:none;"></div>
                </div>
                <div class="col-lg-4" class="errorDiv">
                    <label class="title-custom">Gender: <span style="color:red;">*</span></label>
                    <div id="gender" class="errorDiv">
                    <select class="form-control m-input errorDiv m-input--air select-2" name="gender" id="gender">
                        <option value="">Select</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                    </div>
                    <div class="gender error-div" style="display:none;"></div>
                </div>
            </div>
            <div class="form-group m-form__group row m-form__group_custom">
                <div class="col-lg-4">
                    <label class="title-custom">Phone Number:</label>
                    <input class="form-control m-input errorDiv" type="text" value="" name="phone" id="phone" placeholder="Phone Number" maxlength="10">
                    <div class="phone error-div" style="display:none;"></div>
                </div>
                <div class="col-lg-8">
                    <label class="title-custom">Image:</label><br>
                    <label style="cursorLpointer">
                    <input type="file" name="image" id="file" class="textbox" accept="image/*" onchange="loadFile(event)" hidden>
                    <img src="{{asset('assets/img/user_male.png')}}" id="output" class="image responsive img-thumbnail" style="width:40%; cursor: pointer; margin-top: 10px;" onclick="$('#recimage').click();">
                    <div class="image error-div" style="display:none;"></div>
                    </label>
                </div>
            </div>
            <div class="form-group m-form__group row m-form__group_custom">
                <div class="col-lg-12">
                  <div class="m-portlet__foot m-portlet__no-border m-portlet__foot--fit">
                    <div class="m-form__actions m-form__actions--slid">
                      <button type="button" onclick="storeRecord('{{route('students.store')}}','requestForm','POST','response_div','submitBtn');" id="submitBtn" class="btn btn-primary"><i class="fas fa-plus"></i> Save</button>
                      <button type="button" onclick="redirectFunction()" class="btn btn-secondary"><i class="fas fa-arrow-alt-circle-left"></i> Back</button>
                    </div>
                  </div>
                </div>
            </div>
    </form>
  </div>
  <script>
    var loadFile    = function(event) {
      var image     = document.getElementById('output');
      image.src     = URL.createObjectURL(event.target.files[0]);
    }
  </script>