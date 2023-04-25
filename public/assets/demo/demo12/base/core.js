// cosideer if u want to change state of this variable also change it in ajax_core file.
var xmlhttp_sp = false;
var is_csrf = false;     
function processForm(url1,formId,divId,pid){    
		
		//your validation code
		var url1=url1;
		//alert(formId); exit;
		$("#"+formId).submit(function(e){
			e.preventDefault();
		  });                                          
		$.ajax( {
				type: 'POST',
				url: url1,
				data: $("#"+formId).serialize(), 
				success: function(data) {
				$('#'+divId).html(data);
				if(pid!='')
				{    
					//var d1=document.getElementById(pid).style;
					//d1.display = 'none';
				}
				//bring_tab_page(url1,'tabs_info','');
				}
				
			} );
} 
function processFormrprt(url1,formId,divId,pid,admin_names,feilds_name){    
		//your validation code 
	  
		//administration nam data
	  
		var listdata="";
		var list=document.getElementById(admin_names);
		var x=0;
		  
		for(x=0;x<list.length;x++)
		{
			if(list[x].selected)
			{
				listdata += list[x].value+",";     
			}
		}
		listdata = listdata.substring(0,listdata.length-1); 
	   
		//fields data
		var flistdata="";
		var flist=document.getElementById(feilds_name);
		var x=0;
		
		for(x=0;x<flist.length;x++)
		{
			if(flist[x].selected)
			{
				flistdata += flist[x].value+",";     
			}
		}
		flistdata = flistdata.substring(0,flistdata.length-1);
		//flistdata = substr(flistdata,-1)
		
		var url1=url1;
		//alert(url1); exit;
		$("#"+formId).submit(function(e){
			e.preventDefault();
		  });                                          
		$.ajax( {
				type: 'POST',
				url: url1,
				data: 'admin_checked='+listdata+'&fields_checked='+flistdata+'&'+$("#"+formId).serialize(), 
				success: function(data) {
				$('#'+divId).html(data);
				if(pid!='')
				{    
					//var d1=document.getElementById(pid).style;
					//d1.display = 'none';
				}
				//bring_tab_page(url1,'tabs_info','');
				}
				
			} );
} 
function form_parse(fname){
//alert(fname);return;
var tform = document.getElementById(fname);
 //alert(tform);
var str='' ;
for (i=0;i<tform.length;i++) {

var tempobj=tform.elements[i];
//alert(tempobj.name);   
if (tempobj.type.toLowerCase() =='text') {if (tempobj.value!='') str=str+tempobj.name+"="+tempobj.value+"&";}
if (tempobj.type.toLowerCase() =='hidden') {str=str+tempobj.name+"="+tempobj.value+"&";}
if (tempobj.type.toLowerCase() =='password') {str=str+tempobj.name+"="+tempobj.value+"&";}
if (tempobj.type.toLowerCase() =='radio') {str=str+check_radio_cbox(tempobj);}
if (tempobj.type.toLowerCase() =='textarea') {if (tempobj.value!='') str=str+tempobj.name+"="+tempobj.value+"&";}
if (tempobj.type.toLowerCase() =='submit') {str=str+tempobj.name+"="+tempobj.value+"&";}
if (tempobj.type.toLowerCase() =='checkbox') {str=str+check_radio_cbox(tempobj);}
if (tempobj.type.toLowerCase() =='image') {str=str+tempobj.name+"="+tempobj.value+"&";}
if (tempobj.type.toLowerCase() =='file') {str=str+tempobj.name+"="+tempobj.value+"&";}
if (tempobj.type.toLowerCase().substring(0,6) =='select') {if (tempobj.options[tempobj.selectedIndex].value!='') str=str+tempobj.name+"="+tempobj.options[tempobj.selectedIndex].value+"&";}
  //str=str+tempobj.name+"="+tempobj.value+"&";
} 
if (document.getElementById('n_mesaj')) 
{
	var mesaj=document.getElementById('n_mesaj');
	str=str+mesaj.name+"="+mesaj.value+"&";
}
str = '?'+str;
//document.write(tempobj.name+" ss "+tempobj.type+' hh '+tempobj.options[tempobj.selectedIndex].value);
//document.write(str);

return str;
}

function check_radio_cbox(f){
var deger='';
		 if (f.checked){ deger=f.name+"="+f.value+"&"; return deger; } 
	return deger;
}

function do_it (fname ){

	if (validate(fname))
	{
		if (fname != ''){
		deger=form_parse(fname);} else { deger='';} ;
		
   //document.write(reqpage+deger);
   // makerequest(reqpage+deger, reqlocate)  ;
	   return deger;
	} else return 'hata';
}
function do_it2 (fname ){

	//alert(fname);return;   
	if (validate(fname))
	{	
        
		if (fname != '')
		{
		//deger=form_parse(fname);} else { deger='';} ;
		form = document.getElementById(fname);
		form.submit();
		}
	} else 
	{
		return false;
	}
}
function do_it_confirm (fname ){

	//alert(fname);return;   
	if (validate(fname))
	{	
        
		if (fname != '')
		{
		if(confirm('Do you want to?')){
			form = document.getElementById(fname);
			form.submit();
		}else{
			return false;
		}
		//deger=form_parse(fname);} else { deger='';} ;
		
		}
	} else 
	{
		return false;
	}
}

function submit_form(fname,msg)
{
    if($(":checkbox[name='sr2']",form).is(":checked") || $(":checkbox[name='nsr2']",form).is(":checked"))
    {
        if (validate(fname))
        {
            if (fname != '')
            {
                var form = document.getElementById(fname); 
                form.submit();
            }
        } 
        else 
        {
            return false;
        }
    }
    else
    {
        alert(msg);
        var agency = document.getElementById('chkbs'); 
        agency.style.border = '1px solid #FF0000';
        agency.focus();
        return false;
    }
    return;
}
function removeBorder(checkboxName,divid)
{
   var targ_div = document.getElementById(divid);
   if($(":checkbox[name='"+checkboxName+"']").is(":checked"))
   {
      targ_div.style.border = '0px solid #CCCCCC';
   }
   else
   {
      targ_div.style.border = '1px solid #FF0000';
   }
}

function  load_page_wtab(page,divid,formid)
{
	 var formvalues = do_it(formid); 
	 if(formvalues!='hata')
	 {
		url=page;
		formvalues=formvalues.substring(1,formvalues.length);
		if(formvalues.indexOf('+')>-1)
		{
		    formvalues = formvalues.replace("+","pppplus");
		}
		var params=formvalues; 
		/*if((params.substring(0,7) == 'keyword'))
		{
			var keyword = params.split(","); 
			//alert(keyword[0])  
			keyword     = keyword[0].split("=");
			//alert(keyword)
		}*/   
		//-- create foo image
		create_foo_costum(100,250,'myFoo');
		/*load loading image*/
		document.getElementById('myFoo').innerHTML ='<div align="center"><image src="/ronna/images/loading.gif" border="0"></div>';
		$.ajax({
		url: url,
		type: "post",
		data: params,
		
		// callback handler that will be called on success
		success: function(response, textStatus, jqXHR){
				// log a message to the console
				document.getElementById(divid).innerHTML = response;
				delete_foo_custom('myFoo')
				var TabbedPanels1 = new Spry.Widget.TabbedPanels("TabbedPanels1",{defaultTab:0}); 
				if(keyword[1] != "")
				{   
					$('div').highlight(['<?=$keyword[1]?>']); 
				}
				
			 }
		});      
	 }
}
function validate(fname){
	var tform = document.getElementById(fname); 
	for (i=0;i<tform.length;i++) 
	{	 
		var tempobj=tform.elements[i];
		if(tempobj.name)
		{   
			if (tempobj.name.substring(0,2) == 'n_' && $.trim(tempobj.value) == '' ) {
					tempobj.style.border = '1px solid #FF0000';
					tempobj.focus();
					return false;
			}
			if(tempobj.name.substring(0,2) == 'p_' && (tempobj.value == '' || tempobj.value.length <6) )
			{
				tempobj.style.border = '1px solid #FF0000'; 
				tempobj.focus();
				return false;
			}
			else if (tempobj.name.substring(0,2) == 'n_' && tempobj.value != '' )
			{    
				if (tempobj.name == 'email' || tempobj.name == 'n_email')
				{
						apos = tempobj.value.indexOf('@');
						dotpos = tempobj.value.lastIndexOf('.');
						if (apos<1||dotpos-apos<2 || tempobj.value.length <= dotpos+1)
						{
							tempobj.style.border = '1px solid #FF0000';
							tempobj.focus();
							return false;
						}
				}
				if (tempobj.name.substring(0,3) == 'num' || tempobj.name.substring(0,5) == 'n_num')
				{    
					if (tempobj.value.length < 11)
					{
						tempobj.style.border = '1px solid #FF0000';
						tempobj.focus();
						return false;
					}
				}                  
				tempobj.style.border = '1px solid #CCCCCC';
			}
		}  
	}
	return true;
}
function ismaxlength(obj){
var mlength=obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : ""
if (obj.getAttribute && obj.value.length>mlength)
obj.value=obj.value.substring(0,mlength)
}
function create_foo(ust,sol)
{        
	//alert(ust+'--'+sol);
    var width_cont = document.body.scrollLeft;
	var height_cont = document.body.scrollTop;
	var padding_left = (width_cont/2) - 25;
	var padding_top = height_cont/2-25;
	var buyuk_div = document.createElement('DIV');
	buyuk_div.id = 'buyuk';
	buyuk_div.style.width = width_cont+"px";
	buyuk_div.style.height = height_cont+"px";
	buyuk_div.style.position = 'absolute';
	buyuk_div.style.left = (0)+"px";
	buyuk_div.style.top = (0)+"px";
	buyuk_div.style.bgcolor = '#EEEEEE';
	window.document.body.appendChild(buyuk_div);
	var div = document.createElement('DIV');
	div.id = 'foo';
	div.style.width='60%'; 
	div.style.MOZwidth='60%';
	//div.style.height = '250';
	div.style.position = 'absolute';                     
	div.style.left = sol+"px";
	div.style.top = ust+"px";
    div.style.zIndex=90;
	div.style.color="#000000";
	document.body.appendChild(div);    	
	popup_show('foo', 'screen-center',0,-260);
	
}

/*
 load a page without the form via ajax request
*/
function  load_page_source_custom(page,divid,parrams,name,fname,rank,duty,dutyarea,remarks)
{      
	 var nameajax      = document.getElementById(name).value;
	 var fnameajax     = document.getElementById(fname).value;
	 var rankajax      = document.getElementById(rank).value;
	 var dutyajax      = document.getElementById(duty).value;
	 var dutyareaajax  = document.getElementById(dutyarea).value;
	 var remarksajax   = document.getElementById(remarks).value;    
	 url=page;
	 // call to check for global vraible state and existence of token.
	 var cct = check_token();
	 // if global variable is false or if true but token is not existed. 
	 if(cct == 0)
	 { 
		var params=parrams+'&nameajax='+nameajax+'&fnameajax='+fnameajax+'&rankajax='+rankajax+'&dutyajax='+dutyajax+'&dutyareaajax='+dutyareaajax+'&remarksajax='+remarksajax+'&';
	 }
	 else
	 {
		var params=parrams+'&nameajax='+nameajax+'&fnameajax='+fnameajax+'&rankajax='+rankajax+'&dutyajax='+dutyajax+'&dutyareaajax='+dutyareaajax+'&remarksajax='+remarksajax+'&ci_csrf_token='+cct;	
	 }
	 //alert(params);
	 makerequest_sp(url, params, divid);
	
}

function  load_page_source_custom2(page,divid,parrams,offname,offfname,offrank,offduty,offdutyarea,offremarks)
{
	 var offnameajax      = document.getElementById(offname).value;
	 var offfnameajax     = document.getElementById(offfname).value;
	 var offrankajax      = document.getElementById(offrank).value;
	 var offdutyajax      = document.getElementById(offduty).value;
	 var offdutyareaajax  = document.getElementById(offdutyarea).value;
	 var offremarksajax   = document.getElementById(offremarks).value;
	 url=page;
	 // call to check for global vraible state and existence of token.
	 var cct = check_token();
	 // if global variable is false or if true but token is not existed.  
	 if(cct == 0)
	 {
		var params=parrams+'&offnameajax='+offnameajax+'&offfnameajax='+offfnameajax+'&offrankajax='+offrankajax+'&offdutyajax='+offdutyajax+'&offdutyareaajax='+offdutyareaajax+'&offremarksajax='+offremarksajax+'&';	
	 }
	 else
	 {
		var params=parrams+'&offnameajax='+offnameajax+'&offfnameajax='+offfnameajax+'&offrankajax='+offrankajax+'&offdutyajax='+offdutyajax+'&offdutyareaajax='+offdutyareaajax+'&offremarksajax='+offremarksajax+'&ci_csrf_token='+cct;
	 }
	 //alert(params);
	 makerequest_sp(url, params, divid);
	
}
//deletes the specified row from the table
function removeRow(src,index)
{
	/* src refers to the input button that was clicked. 
	   to get a reference to the containing <tr> element,
	   get the parent of the parent (in this case <tr>)
	*/   
	var oRow = src.parentElement.parentElement;  
	
	//once the row reference is obtained, delete it passing in its rowIndex   
	document.all("mytable").deleteRow(oRow.rowIndex);  
	var jms = "#"+index;
	var str = "~";
	
	//Intelhide
	var intelhide = document.getElementById("intelhide").value;
	var temp = intelhide.split(str); 

	for(i=0; i<temp.length; i++)
	{
		if(temp[i].indexOf(jms) != -1)
		{
			temp.splice(i,1);
		}
	}
	document.getElementById("intelhide").value = temp.join("~");
	
	//Zone hide
	var zonehide = document.getElementById("zonehide").value;
	var temp = zonehide.split(str);
	for(i=0; i<temp.length; i++)
	{
		if(temp[i].indexOf(jms) != -1)
		{
			temp.splice(i,1);
		}
	}
	document.getElementById("zonehide").value = temp.join("~");
	
	//datehide
	var datehide = document.getElementById("datehide").value;
	var temp = datehide.split(str);
	for(i=0; i<temp.length; i++)
	{
		if(temp[i].indexOf(jms) != -1)
		{
			temp.splice(i,1);
		}
	}
	document.getElementById("datehide").value = temp.join("~");
	
	//provincehide
	var provincehide = document.getElementById("provincehide").value;
	var temp = provincehide.split(str);
	for(i=0; i<temp.length; i++)
	{
		if(temp[i].indexOf(jms) != -1)
		{
			temp.splice(i,1);
		}
	}
	document.getElementById("provincehide").value = temp.join("~");
	
	//districthide
	var districthide = document.getElementById("districthide").value;
	var temp = districthide.split(str);
	for(i=0; i<temp.length; i++)
	{
		if(temp[i].indexOf(jms) != -1)
		{
			temp.splice(i,1);
		}
	}
	document.getElementById("districthide").value = temp.join("~");
}

/*CREATE A CUSTOME DIV*/
function create_foo_costum (ust,sol,divid)
{
	var width_cont = document.body.scrollLeft;
	var height_cont = document.body.scrollTop;
	var padding_left = (width_cont/2) - 25;
	var padding_top = height_cont/2-25;
	var buyuk_div = document.createElement('DIV');
	buyuk_div.id = 'biggerdv';
	buyuk_div.style.width = width_cont+"px";
	buyuk_div.style.height = height_cont+"px";
	buyuk_div.style.position = 'absolute';
	buyuk_div.style.left = (0)+"px";
	buyuk_div.style.top = (0)+"px";
	buyuk_div.style.bgcolor = '#EEEEEE';
	window.document.body.appendChild(buyuk_div);

	var div = document.createElement('DIV');
	div.id = divid;
	div.style.width='60%'; 
	div.style.MOZwidth='60%';
	//div.style.height = '250';
	div.style.position = 'absolute';

	 div.style.left = sol+"px";
	div.style.top = ust+"px";
   
	
	div.style.zIndex=90;
	div.style.color="#000000";
	document.body.appendChild(div);             
	popup_show(divid, 'screen-center',0,-120);	
}
/*DELETE CUSTOME FOO*/
function delete_foo_custom(id)
{
  //  opacity('foo', 80, 0, 500);
	  var div = document.getElementById(id);
				var buyuk_div =  document.getElementById('biggerdv');
				document.body.removeChild(div);
				document.body.removeChild(buyuk_div);
}

function delete_foo()
{                     
      var div = document.getElementById('foo');
      if(div)
      {
	    var buyuk_div =  document.getElementById('buyuk');
	    document.body.removeChild(div);
	    document.body.removeChild(buyuk_div);
      }
}

function FilterInput(filterType, evt, allowDecimal, allowCustom)
{
	 var keyCode, Char, inputField, filter = '';
	 var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	 var num   = '0123456789';

	 // Get the Key Code of the Key pressed if possible else - allow
	 if(window.event) {keyCode = window.event.keyCode; evt = window.event;} else if(evt) {keyCode = evt.which;} else {return true;}

	 // Setup the allowed Character Set
	 if(filterType == 0) {filter = alpha;} else if(filterType == 1) {filter = num;} else if(filterType == 2) {filter = alpha + num;}
	 if(allowCustom) {filter += allowCustom;}
	 if(filter == '') {return true;}
	 // Get the Element that triggered the Event
	 inputField = evt.srcElement ? evt.srcElement : evt.target || evt.currentTarget;
	 // If the Key Pressed is a CTRL key like Esc, Enter etc - allow
	 if((keyCode==null) || (keyCode==0) || (keyCode==8) || (keyCode==9) || (keyCode==13) || (keyCode==27)) {return true;}

	 // Get the Pressed Character
	 Char = String.fromCharCode(keyCode);

	 // If the Character is a number - allow
	 if((filter.indexOf(Char) > -1)) {return true;} else if(filterType == 1 && allowDecimal && (Char == '.') && inputField.value.indexOf('.') == -1) {return true;} else {return false;}
}

/*load a content  by ajax with drop down option*/  
function bring_page(page,name,id,divname,str)
{   
	 /*
	  page: the server page where an ajax trigers
	  name: drop down name
	  id: user specify where the drop down value assaigns
	  divname: where to display the server response text
	  str: string where a user can send custome post data
	 */
	 
	 //var cct = $("input[name=ci_csrf_token]").val();
	 var dropdownIndex = document.getElementById(name).selectedIndex;
	 var dropdownValue = document.getElementById(name)[dropdownIndex].value;
	 
	 var url=page;
	 // if global variable is false or if true but token is not existed.  
	 var params='&'+id+'='+dropdownValue+'&'+str; 
	 makerequest_sp(url, params, divname); 
}
/*load a content  by ajax with drop down option*/  

function bring_pageMultipe(page,name,id,divname,str,district,village) // namat
{     
	 /*
	  page: the server page where an ajax trigers
	  name: drop down name
	  id: user specify where the drop down value assaigns
	  divname: where to display the server response text
	  str: string where a user can send custome post data
	 */                                                     
	 //alert(village);
	 //var cct = $("input[name=ci_csrf_token]").val();
	 var dropdownIndex = document.getElementById(name).selectedIndex;
     var dropdownValue = document.getElementById(name)[dropdownIndex].value;
	 var url=page;
	 // if global variable is false or if true but token is not existed.  
	 //var params='&'+id+'='+dropdownValue+'&'+str; 
	 var params='&'+id+'='+dropdownValue+'&'+'div'+'='+divname+'&'+str+'&'+'district'+'='+district+'&'+'village'+'='+village; 
	 makerequest_sp(url, params, divname); 
}


function bring_drpdown(page,name,id,divdistrict,divvillage,str,district,village) // namat
{     
    /*
    page: the server page where an ajax trigers
    name: drop down name
    id: user specify where the drop down value assaigns
    divname: where to display the server response text
    str: string where a user can send custome post data
    */                                                     
    //alert(village);
    //var cct = $("input[name=ci_csrf_token]").val();
    var dropdownIndex = document.getElementById(name).selectedIndex;
    var dropdownValue = document.getElementById(name)[dropdownIndex].value;
    var url = page;
    // if global variable is false or if true but token is not existed.  
    //var params='&'+id+'='+dropdownValue+'&'+str; 
    var params='&'+id+'='+dropdownValue+'&'+'divdistrict'+'='+divdistrict+'&'+'&'+'divvillage'+'='+divvillage+'&'+str+'&'+'district'+'='+district+'&'+'village'+'='+village; 
    //makerequest_sp(url, params, divdistrict); 
    $.ajax({
        type: 'POST',
        url: url,
        data: params, 
        success: function(content) 
        {                      
            $('#'+divdistrict).html(content);
        }
    }); 
}
  
 //page,name,id,divname,str
function bring_dropdown(url,name,id,divId,str){    
        
        var dropdownIndex = document.getElementById(name).selectedIndex;
        var dropdownValue = document.getElementById(name)[dropdownIndex].value;  
        var params = '&'+id+'='+dropdownValue+'&'+str;                                
        $.ajax( {
                type: 'POST',
                url: url,
                data: params, 
                success: function(d) 
                {
                    $('#'+divId).html(d);
                    //selector
                    var config = {
                      '.chosen-select'           : {search_contains: true, no_results_text: 'select'}
                    }
                    for (var selector in config) {
                      $(selector).chosen(config[selector]);
                    }
                }
            } );
}



//show hide 2 div
function showhideD(name1,name2,type)
{
	//DISPLAY STYLE
	var d1=document.getElementById(name1).style; 
	var d2=document.getElementById(name2).style; 
	if(type ==1)
	{
		 d1.display ='block';  
		 d2.display ='none';  
	}
	else
	{
		 d2.display ='block';  
		 d1.display ='none';
	}
	return;
   
}

//show hide 2 div
function HideShow(name1,type)
{
	//DISPLAY STYLE
	var d1=document.getElementById(name1).style; 
	if(type.checked)
	{
		d1.display ='block';
	}
	else
	{
		d1.display ='none'
	}
	return;
}
function HideShow12(name1,div_id)
{
	//DISPLAY STYLE
	
	var d1=document.getElementById(div_id).style;  
	var value=document.getElementById(name1).value;  
	
	if(value == "")
	{
		 d1.display ='none';  
	}
	else 
	{  
		 d1.display ='block';
	}
	return;
   
}
function HideShow1(name1,type,checkboxid)
{
	//alert(checkboxid);
	//DISPLAY STYLE
	alert(document.getElementById(checkboxid).checked);
	var d1=document.getElementById(name1).style; 
	if(document.getElementById(name1).checked) 
	{
		 d1.display ='none';  
	}
	else
	{  
		 d1.display ='block';
	}
	return;
}
function removeElemMM(divid)
{  
	element = document.getElementById(divid);
	element.parentNode.removeChild(element);
}



//hide show one dive
function showhideOneD(divname,name)
{     
	//DISPLAY STYLE
	var dropdownIndex = document.getElementById(name).selectedIndex;
	var dropdownValue = document.getElementById(name)[dropdownIndex].value;
	var d1=document.getElementById(divname).style; 
	if(dropdownValue == 'other')
	{
		 d1.display ='block';   
	}
	else
	{
		 d1.display ='none';
	}
	return;
   
}

function showhide(checkboxname,name1)
{

	//DISPLAY STYLE
	var d1=document.getElementById(name1).style; 
	 
	if(document.getElementById(checkboxname).checked)
	{
		 d1.display ='block';    
	}
	else
	{ 
		 d1.display ='none';
	}
	return;
}

function showhide7(divid,btn)
{
   $('#'+divid).toggle();
	if($(btn).val()!=$("#cancelperorg").text())
	 {
	 $(btn).val($("#cancelperorg").text());
	 }
	 else if($(btn).val()==$("#cancelperorg").text())
	 {
	 clearForm(divid);     
	 $(btn).val($('#addperorg').text());
	 }
   
}
function popWindow(mypage){

	if( typeof( window.innerWidth ) == 'number' ) 
	{
	//Non-IE
	myWidth = window.innerWidth;
	myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	//IE 6+ in 'standards compliant mode'
	myWidth = document.documentElement.clientWidth;
	myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	//IE 4 compatible
	myWidth = document.body.clientWidth;
	myHeight = document.body.clientHeight;
  }

	
  
	myWidth  -= 550;
	myHeight -= 150;
	//get top and left
	var left = (screen.width/2)-(myWidth/2);
	var top  = (screen.height/2)-(myHeight/2);
	
	var property = "width = " + myWidth + ", height = " +myHeight+",left="+left+",top="+top+ ",location=no, menubar=no,status=no, scrollbars=yes, resizable=no";
	var naw = window.open(mypage, 'document', property);
	if (window.focus)
	{
		naw.focus();
	}
}

/* a popupt window opener with exact x y coordinate and screen specific positions
   screen-center,
*/
function popup_show(id, position, x, y, position_id)
{ 
  //alert('drag'+drag_id);
  var element      = document.getElementById(id);
  var width        = window.innerWidth  ? window.innerWidth  : document.documentElement.clientWidth;
  var height       = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
  
  element.style.position = "absolute";
  element.style.display  = "block";

  if (position == "element" || position == "element-right" || position == "element-bottom")
  {
	var position_element = document.getElementById(position_id);

	for (var p = position_element; p; p = p.offsetParent)
	  if (p.style.position != 'absolute')
	  {
		x += p.offsetLeft;
		y += p.offsetTop;
	  }

	if (position == "element-right" ) x += position_element.clientWidth;
	if (position == "element-bottom") y += position_element.clientHeight;

	element.style.left = x+'px';
	element.style.top  = y+'px';
  }

  if (position == "mouse")
  {
	element.style.left = (document.documentElement.scrollLeft+popup_mouseposX+x)+'px';
	element.style.top  = (document.documentElement.scrollTop +popup_mouseposY+y)+'px';
  }

  if (position == "screen-top-left")
  {
	element.style.left = (document.documentElement.scrollLeft+x)+'px';
	element.style.top  = (document.documentElement.scrollTop +y)+'px';
  }

  if (position == "screen-center")
  {
	element.style.left = (document.documentElement.scrollLeft+(width -element.clientWidth )/2+x)+'px';
	element.style.top  = (document.documentElement.scrollTop +(height-element.clientHeight)/2+y)+'px';
  }

}
function windowwidth(divname,leftdiv,rightdiv)
{
	var leftdiv=parseInt(leftdiv);
	var rightdiv=parseInt(rightdiv);
	var clientwidth=document.body.clientWidth;
	var clientheight=document.documentElement.clientHeight;
	// out target div
	var targetdiv=document.getElementById(divname);
	// setting the width
	document.getElementById(divname).style.width=clientwidth-(rightdiv+leftdiv)+"px";
	document.getElementById(divname).style.height=(parseInt(clientheight)-(40))+"px";
}

/*load a content  by ajax with drop down option and input box paragraph id*/
function bring_page_parag(page,name,dep,inputboxid,id,divname,str)
{
	 /*
	  page: the server page where an ajax trigers
	  name: drop down name
	  id: user specify where the drop down value assaigns
	  inputboxid: get input box value and send
	  divname: where to display the server response text
	  str: string where a user can send custome post data
	 */
	 var parag=document.getElementById(inputboxid).value;  
	 var dropdownIndex = document.getElementById(name).selectedIndex;
	 var dropdownValue = document.getElementById(name)[dropdownIndex].value;
	 //department
	 var depIndex = document.getElementById(dep).selectedIndex;
	 var depValue = document.getElementById(dep)[depIndex].value;
	 
	 var url=page;
	 // call to check for global vraible state and existence of token.
	 var cct = check_token();
	 // if global variable is false or if true but token is not existed. 
	 if(cct == 0)
	 {
		var params='&'+id+'='+dropdownValue+'&parag='+parag+'&dep='+depValue+'&'+str;	
	 }
	 else
	 {
		var params='&'+id+'='+dropdownValue+'&parag='+parag+'&dep='+depValue+'&'+str+'&ci_csrf_token='+cct;
	 }
	 //call ajax 
	 makerequest_sp(url, params, divname);
}

/*load a content  by ajax with strign post data*/
function load_page_pagination(page,divname,starting,str)
{
	 /*
	  page: the server page where an ajax trigers
	  starting: starting record 
	  divname: where to display the server response text
	  str: string where a user can send custome post data
	 */ 
	 
	 var url=page;
	 // Call to check the status of global variable (is_csrf) and existence of token.
	 //var cct = check_token();
	 var cct = 0;
	 // Check if global variable is false or if its true but the token is not existed.
	 if(cct == 0)
	 {
		var params='&starting='+starting+'&'+str;
	 }
	 else
	 {
		var params='&starting='+starting+'&'+str+'&ci_csrf_token='+cct;
	 }
	 //alert(params);
	   /*display loading inside a custom created DIV*/
	   // create_foo_costum(100,250,'myFoo');
		/*load loading image*/
	   /* document.getElementById('myFoo').innerHTML ='<div align="center"><image src="/domex/images/loading.gif" border="0"></div>'; 
	   JQuery.ajax({
		url    : "/search/taskAction/home/index/g",
		type: 'POST',
		data: params,
		success: function(response){
		  $('#maindiv').html(response);
		  delete_foo_custom('myFoo');
		}
	}); */
	 
	makerequest_sp(url, params, divname);                 
}

/*load a content  by ajax with strign post data*/
function load_page_pagination2(page,divname,starting,str,fieldname)
{
	 /*
	  page: the server page where an ajax trigers
	  starting: starting record 
	  divname: where to display the server response text
	  str: string where a user can send custome post data
	 */
	 var url=page;
	 //get hidden field value
	 var hiddenFvals = document.getElementById(fieldname).value;
	 str = str +'&'+fieldname+'='+hiddenFvals;
	 // call to check for global vraible state and existence of token.
	 var cct = check_token();
	 // if global variable is false or if true but token is not existed. 
	 if(cct == 0)
	 {
		var params='&starting='+starting+'&'+str;
	 }
	 else
	 {
		var params='&starting='+starting+'&'+str+'&ci_csrf_token='+cct;
	 }
	 //call ajax 
	 makerequest_sp(url, params, divname);
}

/*
 load a page with the form via ajax request
*/
function  load_page_wform(page,divid,formid)
{
	 var formvalues = do_it(formid); 
	 if(formvalues!='hata')
	 {
		  url=page;
		  formvalues=formvalues.substring(1,formvalues.length);
		  if(formvalues.indexOf('+')>-1)
		  {
				formvalues = formvalues.replace("+","pppplus");
		  }
		 
		  // call to check for global vraible state and existence of token.
		  var cct = check_token();
		  // if global variable is false or if true but token is not existed. 
		  if(cct == 0)
		  { 
			  var params=formvalues;  	
		  }
		  else
		  {
			  var params=formvalues+'&ci_csrf_token'+cct;	
		  }
		  makerequest_sp(url, params, divid);
	 }
}
//submit form with multiple select drop down
function  load_page_wform(page,divid,formid)
{
	 var formvalues = do_it(formid); 
	 if(formvalues!='hata')
	 {
		  url=page;
		  formvalues=formvalues.substring(1,formvalues.length);
		  if(formvalues.indexOf('+')>-1)
		  {
				formvalues = formvalues.replace("+","pppplus");
		  }
		 
		  // call to check for global vraible state and existence of token.
		  var cct = check_token();
		  // if global variable is false or if true but token is not existed. 
		  if(cct == 0)
		  { 
			  var params=formvalues;      
		  }
		  else
		  {
			  var params=formvalues+'&ci_csrf_token'+cct;    
		  }
		  makerequest_sp(url, params, divid);
	 }
}

/*
 load a page without the form via ajax request
*/
function  load_page(page,divid,parrams)
{
	 url=page;
	 //console.log(url);
	 // call to check for global vraible state and existence of token.
	 var cct = check_token();
	 // if global variable is false or if true but token is not existed.
	 if(cct == 0)
	 { 
		var params=parrams;	
	 }
	 else
	 {
		var params=parrams+'&ci_csrf_token='+cct;
	 }
	 makerequest_sp(url, params, divid);
}





/*
 load a page without the form via ajax request
*/
function  load_page_source(page,divid,parrams,inputName)
{
	 var srcID = document.getElementById(inputName).value;
	 url=page;
	 // call to check for global vraible state and existence of token.
	 var cct = check_token();
	 // if global variable is false or if true but token is not existed.
	 if(cct == 0)
	 {
		var params=parrams+'&srcid='+srcID;
	 }
	 else
	 {
		var params=parrams+'&srcid='+srcID+'&ci_csrf_token='+cct;
	 }
	 makerequest_sp(url, params, divid);
}
//============delegate identification type====
function  load_page_source_delegate(page,divid,parrams,serial_no,name,assign,signature)
{
	 var serialnoajax      = document.getElementById(serial_no).value;
	 var nameajax          = document.getElementById(name).value;
	 var assignajax       = document.getElementById(assign).value;
	 var signatureajax   = document.getElementById(signature).value;
	 url=page; 
	 // call to check for global vraible state and existence of token.
	 var cct = check_token();
	 // if global variable is false or if true but token is not existed.
	 if(cct == 0)
	 {
		var params=parrams+'&serialnoajax='+serialnoajax+'&nameajax='+nameajax+'&assignajax='+assignajax+'&signatureajax='+signatureajax;	
	 }
	 else
	 {
		var params=parrams+'&serialnoajax='+serialnoajax+'&nameajax='+nameajax+'&assignajax='+assignajax+'&signatureajax='+signatureajax+'&ci_csrf_token='+cct;
	 }
	 makerequest_sp(url, params, divid);  
}
/*
 load a page with the form via ajax request
*/
function  load_page_wform_params(page,divid,formid,params)
{          
	 var formvalues = do_it(formid); 
	 if(formvalues!='hata')
	 {
		url=page;
		formvalues=formvalues.substring(1,formvalues.length);
		// call to check for global vraible state and existence of token.
		var cct = check_token(); 
		// if global variable is false or if true but token is not existed.
		if(cct == 0)
		{
			var params=formvalues+params;    	
		}
		else
		{  
			var params=formvalues+params+'&ci_csrf_token='+cct;
		}
		makerequest_sp(url, params, divid);
	 }
}
/*show and hide a div*/
//show hide 2 div
function ShowHideDiv(name1,type,inputname)
{
	//DISPLAY STYLE
	var d1=document.getElementById(name1).style; 
	if(type ==1)
	{
		 d1.display ='block';   
	}
	else
	{
		 d1.display ='none';
		 //emtpy text box in order not to include in search
		 document.getElementById(inputname).value='';
	}
	return;
   
}

function ShowHideDiv2(name1,type,slctbx,input1,input2,isedit)
{
	//DISPLAY STYLE
	var d1=document.getElementById(name1).style; 
	if(type ==1)
	{
		 d1.display ='block';   
	}
	else
	{
		 if(isedit == 1)
		 {
			 d1.display ='none';
		 }
		 else
		 {
			 d1.display ='none';
			 //emtpy text box in order not to include  search
			 document.getElementById(input1).value='';
			 document.getElementById(input2).value='';
		
			 var selectbox = document.getElementById(slctbx);
			 selectbox.options[0].selected = true;
		 } 
	}
	return;  
}


//redirect to modules
function redirect_module(sel)
{
	var module = sel[sel.selectedIndex].value; 
	window.location = module;
}
//validate an input of the user
function validate_input(obj,type,defval)
{
	//get input object
	var myobj=document.getElementById(obj);
	if(type=="text")
	{
		//check if the name include n_ and value is not empty
		if(myobj.name.substring(0,2) == 'n_' && ($.trim(myobj.value)== '' || $.trim(myobj.value)==defval))
		{
			//show not valid image
			document.getElementById(obj+"IMG").src="/nims/images/validationx.PNG";
		}
		else
		{
			//show valid image
			document.getElementById(obj+"IMG").src="/nims/images/validationy.PNG";
		}
	} 
	else if(type == "dropdown")
	{
		var values=myobj[myobj.selectedIndex].value;
		//check if the name include n_ and value is not empty
		if(myobj.name.substring(0,2) == 'n_' && ($.trim(values) == '' || $.trim(values) == defval))
		{
			//show not valid image
			document.getElementById(obj+"IMG").src="../images/validationx.PNG";
		}
		else
		{
			//show valid image
			document.getElementById(obj+"IMG").src="../images/validationy.PNG";
		}
	}  
   
}     

function addDropdown4(div,div2)
{
	intTextBox = intTextBox + 1;
	var contentID = document.getElementById(div2);
	var newTBDiv = document.createElement("div");
	newTBDiv.setAttribute("id","childDv"+intTextBox);
	var getopt = document.getElementById(div).innerHTML;
	newTBDiv.innerHTML = getopt+" <input type='button' class='searchButton' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElement('"+div2+"','"+intTextBox+"');"+'"'+"/>";
	contentID.appendChild(newTBDiv);
}
function addDropdown_2(div,div2,counter)
{     
		  
	var opt=/options/gi;
	var re=/TabbedPanelsr/gi;
	var btnmark=/buttonhere/gi;  
	var btnmark2=/removing/gi; 
	if(intTextBox == 1 && counter > 0)
	{
		 intTextBox = (counter + 1);
	}
	else
	{    
		intTextBox = intTextBox + 1;
	}
	var numtab="TabbedPanels"+intTextBox;
	var optid="option"+intTextBox;
	var contentID = document.getElementById(div2);
	var newTBDiv = document.createElement("div");
	newTBDiv.setAttribute("id","childDv2"+intTextBox);
	var getopt = document.getElementById(div).innerHTML;
	var content=getopt.replace(re,numtab);
	getopt=content.replace(opt,optid); 
	//var btnn=getBtn(optid);
	//content=getopt.replace(btnmark,btnn);
	newTBDiv.innerHTML = "<span style='font-size:16px;font-family:Verdana, Arial, Helvetica, sans-serif;'>"+intTextBox+"</span> . "+content+"<input type='button' class='searchButton' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElement2('"+div2+"','"+intTextBox+"');"+'"'+"/>";
	contentID.appendChild(newTBDiv);
	new Spry.Widget.TabbedPanels(numtab);
}       

//validate form image
function validate_all(fname){               
	var tform = document.getElementById(fname);
	for (i=0;i<tform.length;i++) { 
		var tempobj  = tform.elements[i];
		var Elname   = tempobj.id; 
		var ElValue  = tempobj.value;
        if(Elname)
		{  
			if((Elname.substring(0,2) == 'n_') && ($.trim(ElValue) == ''))
			{       
				tempobj.style.border = '1px solid #aaa';
				document.getElementById(Elname+"IMG").src="/dss/images/validationx.PNG";
			}
			else if ((Elname.substring(0,2) == 'n_') && $.trim(ElValue) != '')
			{
                tempobj.style.border = '1px solid #aaa'; 
                document.getElementById(Elname+"IMG").src="/dss/images/validationy.PNG";
			} 
		}
		
	}
}
// namat
function validate_all2(fname){    
    var tform = document.getElementById(fname);
    for (i=0;i<tform.length;i++) { 
        var tempobj  = tform.elements[i];   
        var Elname   = tempobj.id; 
        var ElValue  = tempobj.value;
		
        if(Elname)
        {  
            if((Elname.substring(0,2) == 'n_') && ($.trim(ElValue) == ''))
            {         
                tempobj.style.border = '1px solid #aaa';
                document.getElementById(Elname+"IMG").src="/dss/images/validationx.PNG";
            }
            else if ((Elname.substring(0,2) == 'n_') && $.trim(ElValue) != '')
            { 
                //alert(document.getElementById(Elname+"IMG"));
                tempobj.style.border = '1px solid #aaa'; 
                document.getElementById(Elname+"IMG").src="/dss/images/validationy.PNG";
            } 
        }
        
    }
}
/*Source Selection*/
function getCheckedValue(inputName,message,radioname) 
{
	var selection = document.getElementsByName(radioname); 
	var srcVal = 0;
	for(var i = 0; i<selection.length; i++) 
	{
		if(selection[i].checked) {
			srcVal = selection[i].value;
			break;
		}
	}
	if(srcVal == 0)
	{
	   return false;
	}
	else
	{
	   document.getElementById(inputName).value = srcVal;
	   document.getElementById(inputName+"IMG").src="/nims/images/validationy.PNG";
	   delete_foo();
	}
	
}

//get current opener link and redirect
function closeAndRefresh()
{ 
	opener.location.href = opener.location;
	window.close();
}

//redirect to dropdwon item
function redirect_dropdownurl_str(url,name,str)
{
	 
	 var dropdownIndex = document.getElementById(name).selectedIndex;
	 var dropdownValue = document.getElementById(name)[dropdownIndex].value;
	 //alert(dropdownValue);
	 var linkurl = url+'/'+dropdownValue+'/'+str;
	 window.location = linkurl;
}

//redirect to dropdwon item
function redirect_dropdownurls(url,name,str)
{
	 
	 var dropdownIndex = document.getElementById(name).selectedIndex;
	 var dropdownValue = document.getElementById(name)[dropdownIndex].value;
	 if(dropdownValue=="")
	 {
		dropdownValue =-1;
	 }
	 //alert(dropdownValue);
	 var linkurl = url+'/'+dropdownValue+'/'+str;
	 window.location = linkurl;
}


function satirrenk_click(radioId,radVal)
{

  var or = document.getElementsByName(radioId);
  for (var i = 0; i < or.length; i++) {
		 or[i].checked = false;
		 if(or[i].value == radVal.toString())
		 {
			or[i].checked = true;
		 }
  } 
}

//FUNCTION TO ADD TEXT BOX ELEMENT 
var intTextBox=1;
function addElement(inpName,value,inClass,inLabel,condivId,msg)
{	
	intTextBox = intTextBox + 1;
	
	var contentID = document.getElementById(condivId);
	var newTBDiv = document.createElement("div");
	newTBDiv.setAttribute("id","childDv"+intTextBox);
	newTBDiv.innerHTML = '<b>'+intTextBox+". </b><input type='file' id='" + inpName + "' name='" + inpName + "' />"+" <input type='button' class='searchButton' id='rmbtn' name='rmbtn' value='&nbsp;- &nbsp;' onclick="+'"'+"javascript: if(confirm('"+msg+"')==true) { removeElement('"+condivId+"','"+intTextBox+"');}"+'"'+"/>";
	contentID.appendChild(newTBDiv);
}
//FUNCTION TO ADD TEXT BOX ELEMENT 
var intTextBox2=1;
function addElementPhone(inpName1,inpName2,inClass,inLabel,condivId,msg)
{	alert();
	intTextBox2 = intTextBox2 + 1;
	
	var contentID = document.getElementById(condivId);
	var newTBDiv = document.createElement("div");
	newTBDiv.setAttribute("id","childDv2"+intTextBox2);
	newTBDiv.innerHTML = '<b>'+intTextBox2+". </b><input type='file' id='" + inpName1 + "' name='" + inpName1 + "' /> <img id='n_b_phone_noIMG' src='<?=base_url()?>images/validatex.PNG' width='19' height='19' style='position:relative; top:4px'/> "+"<strong>&nbsp;&nbsp;&nbsp;Phone No:</strong><input type='text' name='"+inpName2+"' id='"+inpName2+"' size='40'/> <input type='button' class='searchButton' id='rmbtn' name='rmbtn' value='&nbsp;- &nbsp;' onclick="+'"'+"javascript: if(confirm('"+msg+"')==true) { removeElement2('"+condivId+"','"+intTextBox2+"');}"+'"'+"/>";
	contentID.appendChild(newTBDiv);
}
//FUNCTION TO ADD DROPDOWN LIST ELEMENT  
intTextBox = 1;


function addDropdown(div,div2,count)
{                                                             
	var contentID = document.getElementById(div2);
	var newTBDiv = document.createElement("div");
	newTBDiv.setAttribute("id","childDv"+intTextBox);
	newTBDiv.setAttribute("style","background-color: #ECE9D8");
	var getopt = document.getElementById(div).innerHTML;
	newTBDiv.innerHTML = getopt+"<input type='button' class='searchButton' id='rmbtn' name='rmbtn' value=' - ' onclick="+'"'+"javascript: removeElement('"+div2+"','"+intTextBox+"');"+'"'+"/>";
	contentID.appendChild(newTBDiv);
	document.getElementById(div).style.backgroundColor = "#ddd";
	
}

function addDropdown(div,div2,count)
{	
   //	if(intTextBox == 1 && count > 0)
//	{
//		intTextBox = (count + 1);
//	}
//	else
//	{
//		intTextBox = intTextBox + 1;
//	}
	//alert(document.getElementById('counts2'));
//	document.getElementById('counts2').value = intTextBox;
	var contentID = document.getElementById(div2);
	var newTBDiv = document.createElement("div");
	newTBDiv.setAttribute("id","childDv"+intTextBox);
	newTBDiv.setAttribute("style","background-color: #ECE9D8");
	var getopt = document.getElementById(div).innerHTML;
	newTBDiv.innerHTML = getopt+"<input type='button' class='searchButton' id='rmbtn' name='rmbtn' value=' - ' onclick="+'"'+"javascript: removeElement('"+div2+"','"+intTextBox+"');"+'"'+"/>";
	contentID.appendChild(newTBDiv);
	document.getElementById(div).style.backgroundColor = "#ddd";
	
}
function addDropdownLimit(div,div2,count,opt)
{
	if(intTextBox == 1 && count > 0)
	{
		intTextBox = (count + 1);
	}
	else
	{
		intTextBox = intTextBox + 1;
	}
	var contentID = document.getElementById(div2);
	var newTBDiv = document.createElement("div");
	newTBDiv.setAttribute("id","childDv"+intTextBox);
	var getopt = document.getElementById(div).innerHTML;
	newTBDiv.innerHTML =intTextBox+". "+" <input type='button' class='searchButton' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElementLimit('"+div2+"','"+intTextBox+"','"+opt+"');"+'"'+"/>"+getopt;
	contentID.appendChild(newTBDiv);
	
	var opt = document.getElementById(opt).style.display = 'none';
	//opt.hide();
}

intTextBox3 = 1;
function addDropdown3(div,div2,counter)
{
	if(intTextBox3 == 1 && counter > 0)
	{
		 intTextBox3 = (counter + 1);
	}
	else
	{
		intTextBox3 = intTextBox3 + 1;
	}
	var contentID = document.getElementById(div2);
	var newTBDiv = document.createElement("div");
	newTBDiv.setAttribute("id","childDv3"+intTextBox3);
	var getopt = document.getElementById(div).innerHTML;
	newTBDiv.innerHTML =intTextBox3+". <input type='button' class='searchButton' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElement3('"+div2+"','"+intTextBox3+"');"+'"'+"/>"+getopt;
	contentID.appendChild(newTBDiv);
}
/*
intTextBox2 = 1;
function addDropdown2(div,div2,counter)
{
	if(intTextBox2 == 1 && counter > 0)
	{
		 intTextBox2 = (counter + 1);
	}
	else
	{
		intTextBox2 = intTextBox2 + 1;
	}
	var contentID = document.getElementById(div2);
	var newTBDiv = document.createElement("div");
	newTBDiv.setAttribute("id","childDv2"+intTextBox2);
	var getopt = document.getElementById(div).innerHTML;
	newTBDiv.innerHTML =intTextBox2+". <input type='button' class='searchButton' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElement2('"+div2+"','"+intTextBox2+"');"+'"'+"/>"+getopt;
	contentID.appendChild(newTBDiv);
}
*/
// add dropdown function
intTextBoxa = 1;
function addDropdownf(div,div2,counter,file_det)
{
	if(intTextBoxa == 1 && counter > 0)
	{
		 intTextBoxa = (counter + 1);
	}
	else
	{
		intTextBoxa = intTextBoxa + 1;
	}
	
	var upload_file="<table class='table' width='100%' cellpadding='0' cellspacing='0'><tr>"
	upload_file += "<td class='tdstyle txtlabel'>"+file_det+"<input type='file' name='photo_"+intTextBoxa+"' id='photo_"+intTextBoxa+"'/></td></tr></table>";
	
	var contentID = document.getElementById(div2);
	var newTBDiv = document.createElement("div");
	newTBDiv.setAttribute("id","childDv3"+intTextBoxa);
	var getopt = document.getElementById(div).innerHTML;
	newTBDiv.innerHTML =intTextBoxa+". <input type='button' class='searchButton' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElementa('"+div2+"','"+intTextBoxa+"');"+'"'+"/>"+getopt+upload_file;
	contentID.appendChild(newTBDiv);
}
//FUNCTION TO ADD DROPDOWN LIST ELEMENT  
intTextBox = 1;
function addDropdown1(div,div2,count)
{
	if(intTextBox == 1 && count > 0)
	{
		 intTextBox = (count + 1);
	}
	else
	{
		intTextBox = intTextBox + 1;
	}
	var contentID = document.getElementById(div2);
	var newTBDiv = document.createElement("div");   
	newTBDiv.setAttribute("id","childDv"+intTextBox);
	var getopt = document.getElementById(div).innerHTML;
	newTBDiv.innerHTML =intTextBox+". "+" <input type='button' class='searchButton' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElement1('"+div2+"','"+intTextBox+"');"+'"'+"/>"+getopt;
	contentID.appendChild(newTBDiv);
}
//FUNCTION TO REMOVE TEXT BOX ELEMENT 
function removeElement(condivId,inpId)
{   
	if(intTextBox != 0)
	{
		var contentID = document.getElementById(condivId);
		contentID.removeChild(document.getElementById("childDv"+inpId));
		intTextBox = inpId-1;
	}
}

function removeElementBatch(condivId,inpId)
{
	if(intTextBox != 0)
	{
		//var i = document.getElementById(id_hidden)
		var contentID = document.getElementById(condivId);
		contentID.removeChild(document.getElementById(inpId));
		intTextBox = inpId-1;
	}
}

function removeElementLimit(condivId,inpId,opt)
{

	if(intTextBox != 0)
	{
		var contentID = document.getElementById(condivId);
		contentID.removeChild(document.getElementById("childDv"+inpId));
		intTextBox = inpId-1;
		
		document.getElementById(opt).style.display ='block';
	}
}
//FUNCTION TO REMOVE TEXT BOX ELEMENT 
function removeElement1(condivId,inpId)
{    
	if(intTextBox != 0)
	{
		var contentID = document.getElementById(condivId);
		contentID.removeChild(document.getElementById("childDv"+inpId));
		intTextBox = inpId-1;
	}
}
//FUNCTION TO REMOVE TEXT BOX ELEMENT 
function removeElement2(condivId,inpId)
{
	if(intTextBox2 != 0)
	{
		var contentID = document.getElementById(condivId);
		contentID.removeChild(document.getElementById("childDv2"+inpId));
		intTextBox2 = inpId-1;
	}
} 
//FUNCTION TO REMOVE TEXT BOX ELEMENT 
function removeElement3(condivId,inpId)
{
	if(intTextBox3 != 0)
	{
		var contentID = document.getElementById(condivId);
		contentID.removeChild(document.getElementById("childDv3"+inpId));
		intTextBox3 = inpId-1;
	}
}
//function remove element func
function removeElementa(condivId,inpId)
{
	if(intTextBoxa != 0)
	{
		var contentID = document.getElementById(condivId);
		contentID.removeChild(document.getElementById("childDv3"+inpId));
		intTextBoxa = inpId-1;
	}
}
//function remove element func end
/*set check box when a row  is clicked*/ 
function setCheckbox(e, row,id)
{
	   var trobj = document.getElementById(id); 
	   var cbox = row.cells[0].getElementsByTagName('input')[0];
	   var clickedElt = window.event? event.srcElement: e.target;
	   if (clickedElt != cbox)
	   {         
		   cbox.checked = !(cbox.checked); 
	   }
	   if (row.bgColor == '#ECE9D8')
	   {
		  trobj.bgColor = '#ffffff';
	   }
	   else
	   {
		  trobj.bgColor = '#ECE9D8';
	   }
}

/*set check box when a row  is clicked*/ 
function setCheckboxandValue(e, row,id,page,divid,params,hidF)
{
	   var trobj = document.getElementById(id); 
	   var cbox = row.cells[0].getElementsByTagName('input')[0];
	   var clickedElt = window.event? event.srcElement: e.target;
	   if (clickedElt != cbox)
	   {         
		   cbox.checked = !(cbox.checked); 
		   if(cbox.checked == true)
		   {
			  //provide ajax request to update the hidden field
			  var newParam = params + '&id='+cbox.value+'&status=1'; 
		   }
		   else
		   {
			  var newParam = params + '&id='+cbox.value+'&status=0';
		   }
		   //get hidden field value
		   var hiddenFvals = document.getElementById(hidF).value;
		   newParam =  newParam + '&'+hidF+'='+hiddenFvals;
		   load_page(page,divid,newParam);	  
	   }
	   if (row.bgColor == '#ECE9D8')
	   {
		  trobj.bgColor = '#ffffff';
	   }
	   else
	   {
		  trobj.bgColor = '#ECE9D8';
	   }
}
//set background on checkbox
function SetIdsWithCheckboxes(cb,page,divid,params,hidF)
{
	 var newParam = '';
	 if(cb.checked)
	 {
		//provide ajax request to update the hidden field
		 newParam = params + '&id='+cb.value+'&status=1'; 
	 }
	 else
	 {
		 newParam = params + '&id='+cb.value+'&status=0';
	 }
	  //get hidden field value
	 var hiddenFvals = document.getElementById(hidF).value;
	 newParam =  newParam + '&'+hidF+'='+hiddenFvals;
	 load_page(page,divid,newParam);    
}
/*check all checkboxes by one checkbox*/
function selectAll(checkAllck, fname,chkList) 
{

		var oneChks = document.getElementById(checkAllck);    
		var tform = document.getElementById(fname); 
		for (i=0;i<tform.length;i++) 
		{
		   var tempobj=tform.elements[i];
		   if (tempobj.type.toLowerCase() =='checkbox' && tempobj.name == chkList) 
		   {
				var trobj = document.getElementById('as'+i); 
				if(oneChks.checked == true)
				{
					tempobj.checked = true;
					trobj.bgColor = '#ECE9D8';
				}
				else
				{
					tempobj.checked = false;
					trobj.bgColor = '#ffffff'; 
				}	
		   }
		}
}
/*text area set value*/
function SetTxtArea(id,type,val)
{
	 var txtAr = document.getElementById(id);
	 //check if type is 1
	 if(type == 1)
	 {
		 txtAr.value = val; 
	 }
	 else
	 {
		 txtAr.value = '';
	 } 
}

/*
  params:
  1. display div id to display questions
  2. hidden input field to post the questin to server side
  3. textarea   where the question is typed by the user
  
*/
//add question into a div 
function ConcatQuestion(dispDiv, hidenInp, questionTxt)
{
  //get div id
  var qdispdiv=document.getElementById(dispDiv);
  
  //get question from text area where inputed
  var questiontxt = document.getElementById(questionTxt).value;
  
  //if the text area is not blank
  if(questiontxt != "")
  {
	  //add to div and hidden field
	  qdispdiv.innerHTML=qdispdiv.innerHTML+questiontxt+"<hr/>";
	  var hiddenTxtbx=document.getElementById(hidenInp);
	  hiddenTxtbx.value= hiddenTxtbx.value+"~"+questiontxt;	
	  //empty
	  var txtArea   = document.getElementById(questionTxt);
	  txtArea.value = "";
  }                                                         
}

/*
 reset rfi question place
 params:
 1: Display div id
 2: hidden text box id
*/
function ResetQuestion(dispDiv, hidenInp)
{
	//delete view div
	var qdispdiv=document.getElementById(dispDiv);
	qdispdiv.innerHTML="";
	//delete hidden input textbox
	var hidtextbox=document.getElementById(hidenInp);
	hidtextbox.value="";
}

function CheckRFIQuestions(hidenInp, questionTxt)
{
   //get question from text area where inputed
   var questiontxt = document.getElementById(questionTxt).value;
   var hiddenval = document.getElementById(hidenInp).value;
   if(($.trim(questiontxt) !='') || ($.trim(hiddenval)!=''))
   {
	   document.getElementById(questionTxt).style.border = '1px solid #CCCCCC';
	   return true;
   }
   else
   {
	   document.getElementById(questionTxt).style.border = '1px solid #FF0000'; 
	   document.getElementById(questionTxt).focus();
	   return false;
   }
   
}

function CheckCheckboxes(fname,BtnID)
{
	//check if any checkbox is checked
	var tform = document.getElementById(fname);
	var i;
	for (i=0; i<document.tform.length; i++)
	{
		var tempobj=tform.elements[i];
		//if the type is checked
		if(tempobj.type.toLowerCase()=='checkbox' && tempobj.checked)
		{
			 //return true
			 return true;
		}
		else
		{
			 //disable button
			 return false;
		}
	}
}
/*check all checkboxes by one checkbox*/
function selectAll(checkAllck, fname,chkList) 
{

		var oneChks = document.getElementById(checkAllck);    
		var tform = document.getElementById(fname); 
		for (i=0;i<tform.length;i++) 
		{
		   var tempobj=tform.elements[i];
		   if (tempobj.type.toLowerCase() =='checkbox' && tempobj.name == chkList) 
		   {
				var trobj = document.getElementById('as'+i); 
				if(oneChks.checked == true)
				{
					tempobj.checked = true;
					trobj.bgColor = '#ECE9D8';
				}
				else
				{
					tempobj.checked = false;
					trobj.bgColor = '#ffffff'; 
				}     
		   }
		}
}
/*set check box when a row  is clicked*/ 
function setCheckbox(e, row,id)
{
	   var trobj = document.getElementById(id); 
	   var cbox = row.cells[0].getElementsByTagName('input')[0];
	   var clickedElt = window.event? event.srcElement: e.target;
	   if (clickedElt != cbox)
	   {         
		   cbox.checked = !(cbox.checked); 
	   }
	   if (row.bgColor == '#ECE9D8')
	   {
		  trobj.bgColor = '#ffffff';
	   }
	   else
	   {
		  trobj.bgColor = '#ECE9D8';
	   }

}
function popWindowLinkChart(mypage){

	if( typeof( window.innerWidth ) == 'number' ) 
	{
	//Non-IE
	//myWidth = window.innerWidth;
	myWidth = 249;
	//myHeight = window.innerHeight;
	myHeight = 490;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	//IE 6+ in 'standards compliant mode'
	myWidth = 249;
	myHeight = 490;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	//IE 4 compatible
	myWidth = 249;
	myHeight = 490;
  }
	//myWidth  -= 550;
	//myHeight -= 150;
	//get top and left
	var left = (screen.width/2)-(myWidth/2);
	var top  = (screen.height/2)-(myHeight/2);
	
	var property = "width = " + myWidth + ", height = " +myHeight+",left="+left+",top="+top+ ",location=no, menubar=no, status=no, scrollbars=yes, resizable=no, titlebar=no";
	var naw = window.open(mypage, 'document', property);
	if (window.focus)
	{
		naw.focus();
	}
}
//Change value of one according to another
function changeValue(source,target)
{
	var target = document.getElementById(target);
	var source = document.getElementById(source).value;
	
	target.value = source;
}

//Change value of one according to another
function changeValueSpan(source,target)
{
	var target = document.getElementById(target);
	var source = document.getElementById(source).value;
	
	target.innerHTML = source;
}
//Change value of one according to another
function changeValue1(source,target1,target2,target3,target4,target5)
{
	var target1 = document.getElementById(target1);
	var target2 = document.getElementById(target2);
	var target3 = document.getElementById(target3);
	var target4 = document.getElementById(target4);
	var target5 = document.getElementById(target5);
	var source  = document.getElementById(source).value;
	
	target1.value = source;
	target2.value = source;
	target3.value = source;
	target4.value = source;
	target5.value = source;
}

//Change location according to option in selectbox
function changeLocation(menuObj)
{
	var i = menuObj.selectedIndex; 

	if(i > 0 && i!=8)
	{
		window.open(menuObj.options[i].value,'_blank');
	}
	else
	{
		document.getElementById('report').style.display='block'; 
	}
}

//Change location according to option in selectbox
function changeLocation_sub(menuObj)
{
	var i = menuObj.selectedIndex; 
	var link = menuObj.options[i].value;
	var code = link.substring(0,1);
	if(i > 0)
	{
		link = link.substring(2,link.length);
		link = link+"/"+code;
		window.open(link,'_blank');
	}
}
//do the highlight and unhighlight
function CheckAvailability(page,divid,text,str,valtxt,type)
{  
   //check the input entity
   var field         = "";
   var selectedvalue = "";
   if(type==0)
   {
		//read field and assign to send
		field = document.getElementById(text).value; 
   }
   else
   {
		 //read field and assign to send  and selected text
		field         = document.getElementById(text).value; 
		selectedvalue = document.getElementById(valtxt).value;     
   }
   if(field == '')
   {
	   return;
   }
   else
   {   
	   var url=page;
	   // check the global variable and token.
	   var cct = check_token();
	   if(cct == 0)
	   {
		   var params='&field='+field+'&'+str+'&selectedtext='+selectedvalue; 
	   }
	   else
	   {
		   var params='&field='+field+'&'+str+'&selectedtext='+selectedvalue+'&ci_csrf_token='+cct; 
	   }
	   makerequest_sp(url, params, divid);
   }
}

function popLinkWindow(link)
{
	var strlink = link.substring(13,link.length-2);
	alert(strlink);
	window.open(strlink,'_blank');
}
// this function is used to check state of global variable and existence of token.
function check_token()
{
	// check the is_csrf to varify if its true or false.
	if(is_csrf == true)
	{
		var cct = $("input[name=ci_csrf_token]").val();
		// check if cct is null, it means if token is not existed.
		if(cct == null)
		{
			return 0;
		}
		// check if token is existed.
		else
		{
			return cct;
		} 
	}
	// check if its false
	else
	{
		return 0;
	}
}
function get_district(district,div,url)
{	
	 create_foo_costum(100,250,'myFoo');
	/*load loading image*/
	document.getElementById('myFoo').innerHTML ='<div align="center"><image src="/phones/images/loading.gif" border="0"></div>';
	
	 var params ='&id='+district.value;
	
	 $.ajax({
		url: url,
		type: "post",
		data: params,
		// callback handler that will be called on success
		success: function(response, textStatus, jqXHR){
			// log a message to the console
			document.getElementById(div).innerHTML = response;
			delete_foo_custom('myFoo')
		 }
	});         
	//var params ='&id='+district.value;
	//makerequest_sp(url,params,div);
}
function get_village(village,div,url)
{ 
		create_foo_costum(100,250,'myFoo');
		/*load loading image*/
		document.getElementById('myFoo').innerHTML ='<div align="center"><image src="/phones/images/loading.gif" border="0"></div>';
		var params ='&id='+village.value;
	 
		$.ajax({
		url: url,
		type: "post",
		data: params,
		// callback handler that will be called on success
		success: function(response, textStatus, jqXHR){
			// log a message to the console
			document.getElementById(div).innerHTML = response;
			delete_foo_custom('myFoo')
		 }
	});      
  }
  //-- do search 
  function doSearch(phoneUrn,name,number,div,url)
  {		
	  var name   = document.getElementById(name).value;
	  var number = document.getElementById(number).value;
	  params = '&name='+name+'&number='+number+'&phoneUrn='+phoneUrn;
	  //-- create foo image
	  create_foo_costum(100,250,'myFoo');
		/*load loading image*/
		document.getElementById('myFoo').innerHTML ='<div align="center"><image src="/phones/images/loading.gif" border="0"></div>';
		
		$.ajax({
		url: url,
		type: "post",
		data: params,
		// callback handler that will be called on success
		success: function(response, textStatus, jqXHR){
			// log a message to the console
			document.getElementById(div).innerHTML = response;
			delete_foo_custom('myFoo')
		 }
	});      
	  
  }
  //-- do search 
  function doSearch2(call_type,phoneUrn,name,number,div,url)
  {		
	  var name   = document.getElementById(name).value;
	  var number = document.getElementById(number).value;
	  params = '&name='+name+'&number='+number+'&phoneUrn='+phoneUrn+'&call_type='+call_type;
	  //-- create foo image
	  create_foo_costum(100,250,'myFoo');
		/*load loading image*/
		document.getElementById('myFoo').innerHTML ='<div align="center"><image src="/phones/images/loading.gif" border="0"></div>';
		
		$.ajax({
		url: url,
		type: "post",
		data: params,
		// callback handler that will be called on success
		success: function(response, textStatus, jqXHR){
			// log a message to the console
			document.getElementById(div).innerHTML = response;
			delete_foo_custom('myFoo')
		 }
	});      
  }
  //-- do search 
  function doSearch3(deleted,phoneUrn,name,number,div,url)
  {		
	  var name   = document.getElementById(name).value;
	  var number = document.getElementById(number).value;
	  if(name.indexOf('+')>-1)
	  {
			name = name.replace("+","pppplus");
	  }
	 
	 params = '&name='+name+'&number='+number+'&phoneUrn='+phoneUrn+'&deleted='+deleted;
		//-- create foo image
		create_foo_costum(100,250,'myFoo');
		/*load loading image*/
		document.getElementById('myFoo').innerHTML ='<div align="center"><image src="/phones/images/loading.gif" border="0"></div>';
		
		$.ajax({
		url: url,
		type: "post",
		data: params,
		// callback handler that will be called on success
		success: function(response, textStatus, jqXHR){
			// log a message to the console
			document.getElementById(div).innerHTML = response;
			delete_foo_custom('myFoo')
		 }
	});      
	  
  }
  /*load a content  by ajax with drop down option*/
function load_page_multiple(page,name,divname,str,sel,div_type)
{    
	 /*
	  page: the server page where an ajax trigers
	  name: drop down name
	  id: user specify where the drop down value assaigns
	  divname: where to display the server response text
	  str: string where a user can send custome post data
	 */
	 var dropdownValue = name.value;
	 if(div_type == 'a'){
	   var pardiv = $(sel).closest("div").attr("id");
	 }else{
		var pardiv = sel;
	}
	var url_page=page;
	 // call to check the status of (is_csrf) global variable and existence of token.
	 var cct = check_token();
	 // check if (is_csrf) is false or if its true but the token is not existed.
	 if(cct == 0)
	 {
		  var params='&id='+dropdownValue+'&'+str+'&parent_div='+pardiv;
	 }
	 else
	 {
		  var params='&id='+dropdownValue+'&'+str+'&ci_csrf_token='+cct+'&parent_div='+pardiv;
	 }
	 
	 $.ajax({
		url: url_page,
		type: 'POST',
		data: params,
		success: function(response){  
			$('#'+pardiv+' div#'+divname+'').html(response);
		}
	});        
	 //call ajax 
	 //makerequest_sp(url, params, divname);
}
function disDrd(fieldid,divid)
{
	  var x=document.getElementById(fieldid);
	  x.disabled=true;
	  var divselec = document.getElementById(divid).style;
	  divselec.display = 'none';
} 
function enableDrd(fieldid,divid)
{
	  var x=document.getElementById(fieldid);
	   x.disabled=false; 
	   var divselec = document.getElementById(divid).style;
	  divselec.display = 'block';
}
//hide show one dive
function getDropDForTextBox(name,textfield)
{
	//DISPLAY STYLE
	var dropdownIndex = document.getElementById(name).selectedIndex;
	var dropdownValue = document.getElementById(name)[dropdownIndex].value;
	if(dropdownValue == 'q')
	{
		dropdownValue = ' " "/2';
	}
	else if(dropdownValue =='p')
	{
		dropdownValue = ' " "~2';
	}
	else if(dropdownValue =='SENTENCE')
	{
		dropdownValue = 'SENTENCE" "';
	}
	else if(dropdownValue == 'NEAR')
	{
		dropdownValue = ' NEAR/2';
	}
		else if(dropdownValue == 'PARAGRAPH')
	{
		dropdownValue = ' PARAGRAPH " "';
	}
	else if(dropdownValue == 'pr')
	{
		dropdownValue = ' " "';    
	}
	var data = $("#"+textfield).val();
	$("#"+textfield).focus();
	$("#"+textfield).text(data+dropdownValue);
	return;
   
}
function do_upload (fname )

{

	//alert(fname);return;   
	if (validate(fname))
	{
		if (fname != '')
		{
			//deger=form_parse(fname);} else { deger='';} ;
			var form = document.getElementById(fname); 
			//alert(form);
			form.submit();
			//window.onunload = refreshParent;
		}
	} 
	else 
	{
		return false;
	}
}


function bring_district_multi(pro_id,dist_child,url)
{	
	var chVal=document.getElementById(pro_id);
	if(chVal.checked==false)
	{
		document.getElementById(dist_child).innerHTML = ''; 
	}
	else
	{
		$.post(url,
		{
			
		},
		function(data,status){
			document.getElementById(dist_child).innerHTML = data; 
		});
	}
}

//Function to filter the district based on province 
function filter_district_multi(url,pro_id,all_pro,dist_div)
{
	var provlen = $('#'+all_pro).find("input").length;
	var prov = $('#'+all_pro).find("input"); 
	var provt = '';
	for(var i=0; i<provlen; i++)
	{
		if(prov[i].checked == true)
		{
			provt += prov[i].value+',';
		}
	}	
	
	$.post(url,
	{
		provt:provt
	},
	function(data,status){
		document.getElementById(dist_div).innerHTML = data; 
	});
	
}


/*
 load a page without the form via ajax request
*/
function  load_dropdown(page,divid,parrams)
{
     url=page;
     // call to check for global vraible state and existence of token.
     var cct = check_token();
     // if global variable is false or if true but token is not existed.
     if(cct == 0)
     { 
        var params=parrams;    
     }
     else
     {
        var params=parrams+'&ci_csrf_token='+cct;
     }
     
     
     
     $.ajax( {
                type: 'POST',
                url: url,
                data: params, 
                success: function(d) 
                {
                    $('#'+divid).html(d);
                    //selector
                    var config = {
                      '.chosen-select'           : {search_contains: true, no_results_text: 'select'}
                    }
                    for (var selector in config) {
                      $(selector).chosen(config[selector]);
                    }
                }
            } );
}
//check and uncheck all checkbox
function checkAllChbox(div,chbox)
{
	var chboxes = $("#"+div).find("input:checkbox");
	var ch = document.getElementById(chbox);
	for(var i=0;i<chboxes.length;i++)
	{   //alert(chboxes[i].id);
		
		if(ch.checked==true)
		{   
			chboxes[i].checked=true;
		}
		else
		{
			chboxes[i].checked=false;
		}
		changeBackground(chboxes[i]);
	}
}
// change checkbox label background color if checked 
function changeBackground(id)
{    	
    if(id.checked)
    {   
        id.parentElement.style.color = 'green';
        id.parentElement.style.textDecoration = 'underline';
    }
    else
    {
        id.parentElement.style.color = 'black';  
		id.parentElement.style.textDecoration = 'none';
    }
}

//##################################### Mahdi Amiry
function changeText(m1,m2,m3,m4,m5,id1, id2,id3,sim,no_sim) // Mahdi
{   
	var id1 = document.getElementById(id1).value;
	//console.log(id1);
	if(id1==2)
	{
		$('#'+no_sim).hide();
		$('#'+id3).hide();
		$('#'+id2).show();
		$('#'+sim).show();
		$('#simC').val('');
		$('#etcS').val('');
		$('#etc_sim').hide();
		$('#'+m1).val('');
		$('#'+m2).val('');
		$('#'+m3).val('');
		$('#'+m4).val('');
		$('#'+m5).val('');
	}
	else if(id1==7)
	{
		$('#'+no_sim).show();
		$('#'+sim).hide();
		$('#'+id2).hide();
		$('#'+id3).show();	
		$('#simC').val('');
		$('#etcS').val('');
		$('#etc_sim').hide();
		$('#'+m1).val('');
		$('#'+m2).val('');
		$('#'+m3).val('');
		$('#'+m4).val('');
		$('#'+m5).val('');
	}
	else 
	{
		$('#'+sim).hide();
		$('#'+no_sim).show();
		$('#'+id2).hide();
		$('#'+id3).hide();
		$('#simC').val('');
		$('#etcS').val('');
		$('#etc_sim').hide();
		$('#'+m1).val('');
		$('#'+m2).val('');
		$('#'+m3).val('');
		$('#'+m4).val('');
		$('#'+m5).val('');
	}
}

function changeText123(id1, id2,id3,sim,no_sim) // Mahdi
{   
	var id1 = document.getElementById(id1).value;
	//console.log(id1);
	if(id1==2)
	{
		$('#'+no_sim).hide();
		$('#'+id3).hide();
		$('#'+id2).show();
		$('#'+sim).show();
		$('#simC').val('');
		$('#etcS').val('');
		$('#etc_sim').hide();
	}
	else if(id1==7)
	{
		$('#'+no_sim).show();
		$('#'+sim).hide();
		$('#'+id2).hide();
		$('#'+id3).show();	
		$('#simC').val('');
		$('#etcS').val('');
		$('#etc_sim').hide();
	}
	else 
	{
		$('#'+sim).hide();
		$('#'+no_sim).show();
		$('#'+id2).hide();
		$('#'+id3).hide();
		$('#simC').val('');
		$('#etcS').val('');
		$('#etc_sim').hide();
	}
}
function changeText12(m1,m2,m3,m4,m5,id1, id2,id3,sim,no_sim) // Mahdi
{   
	var id1 = document.getElementById(id1).value;
	console.log(id1);
	if(id1==2)
	{
		$('#'+no_sim).hide();
		$('#'+id3).hide();
		$('#'+id2).show();
		$('#'+sim).show();
		$('#'+m1).val('');
		$('#'+m2).val('');
		$('#'+m3).val('');
		$('#'+m4).val('');
		$('#'+m5).val('');
	}
	else if(id1==7)
	{
		$('#'+no_sim).show();
		$('#'+sim).hide();
		$('#'+id2).hide();
		$('#'+id3).show();	
		$('#'+m1).val('');
		$('#'+m2).val('');
		$('#'+m3).val('');
		$('#'+m4).val('');
		$('#'+m5).val('');
	}
	else 
	{
		$('#'+sim).hide();
		$('#'+no_sim).show();
		$('#'+id2).hide();
		$('#'+id3).hide();
		$('#'+m1).val('');
		$('#'+m2).val('');
		$('#'+m3).val('');
		$('#'+m4).val('');
		$('#'+m5).val('');
	}
}
function simChange(id1, id2) // Mahdi
{   
	var id1 = document.getElementById(id1).value;
	//console.log(id1);
	if(id1==7){
		$('#'+id2).show();		
	}
	else 
	{
		$('#'+id2).hide();
	}
}

intTextBox24 = 1;
//function to add and remove div
function addDropdown7(div,div2,counter)
{
    if(intTextBox24 == 1 && counter > 0)
    {
         intTextBox24 = (counter + 1);
    }
    else
    {
        intTextBox24 = intTextBox24 + 1;
    }
    var contentID = document.getElementById(div2);
    var newTBDiv = document.createElement("div");
    newTBDiv.setAttribute("id","childDv2"+intTextBox24);
    var getopt = document.getElementById(div).innerHTML;
    newTBDiv.innerHTML ="<input type='button' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElement7('"+div2+"','"+intTextBox24+"');"+'"'+"/> "+intTextBox24+"."+getopt;
    contentID.appendChild(newTBDiv);
}
function removeElement7(condivId,inpId)
{
    if(intTextBox24 != 0)
    {
        var contentID = document.getElementById(condivId);
        contentID.removeChild(document.getElementById("childDv2"+inpId));
        intTextBox2 = inpId-1;
    }
}


function addDropdown23(div,div2,counter,type,company,sim_no) // Mahdi Edit
{
    if(intTextBox2 == 1 && counter > 0)
    {
         intTextBox2 = (counter + 1);
    }
    else
    {
        intTextBox2 = intTextBox2 + 1;
    }
    var contentID = document.getElementById(div2);
    var newTBDiv = document.createElement("div");
    newTBDiv.setAttribute("id","childDv2"+intTextBox2);
    var getopt = document.getElementById(div).innerHTML;
	// Mahdi Amiry
	var option = $('#n_rresource_type').html();
    newTBDiv.innerHTML =intTextBox2+". <input type='button' class='searchButton' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElement2('"+div2+"','"+intTextBox2+"');"+'"'+"/>"+
	"<table cellpadding='0' cellspacing='0' width='100%' class='table'>"+   
		"<tr >"+   
			"<td class='tdstyle txtlabel' valign='top' width='35%'>"+  
				"<strong>"+type+":<span style='color:red'><strong>*</strong></span></strong>"+  
				"<div>"+  
					"<select name='n_resource_type[]' id='n_resource_type"+intTextBox2+"' class='selectbox' style='width:240px;' onchange="+'"'+"javascript: changeText('n_resource_type"+intTextBox2+"','rowresource"+intTextBox2+"');validate_all('add_form');"+'"'+">"+ 
					option+
					"</select>"+     
				"</div>"+  
			"</td>"+                                                                               
			"<td class='tdstyle txtlabel' width='35%'>"+  
				"<strong>"+company+":</strong>"+  
				"<div>"+  
					"<input type='text' class='form-control' name='resource_company[]' id='resource_company' style='width:240px;'>"+  
				"</div>"+         
			"</td>"+   
			"<td class='tdstyle txtlabel' width='35%' style='display:none' id='rowresource"+intTextBox2+"'>"+  
				"<strong>"+sim_no+":</strong>"+  
				"<div>"+  
					"<input type='text' class='form-control' name='sim_no[]' id='sim_no' style='width:240px;'>"+  
				"</div>"+  
			"</td> "+                           
		"</tr>"+  
	"</table>";
    contentID.appendChild(newTBDiv);
}
function removeElement2(condivId,inpId) // Mahdi
{
    if(intTextBox2 != 0)
    {
        var contentID = document.getElementById(condivId);
        contentID.removeChild(document.getElementById("childDv2"+inpId));
        intTextBox2 = inpId-1;
    }
}

intTextBox222 = 1;
//function to add and remove div
function addDropdown2c(div,div2,counter,type,company,sim_no) // Mahdi Add
{
    if(intTextBox2 == 1 && counter > 0)
    {
         intTextBox2 = (counter + 1);
    }
    else
    {
        intTextBox2 = intTextBox2 + 1;
    }
    var contentID = document.getElementById(div2);
    var newTBDiv = document.createElement("div");
    newTBDiv.setAttribute("id","childDv2"+intTextBox2);
    var getopt = document.getElementById(div).innerHTML;
	// Mahdi Amiry
	var option = $('#resource_type').html();
	
    newTBDiv.innerHTML =intTextBox2+". <input type='button' class='searchButton' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElement2('"+div2+"','"+intTextBox2+"');"+'"'+"/>"+
	"<table cellpadding='0' cellspacing='0' width='100%' class='table'>"+   
		"<tr >"+   
			"<td class='tdstyle txtlabel' valign='top' width='35%'>"+  
				"<strong>"+type+":</strong>"+  
				"<div>"+  
					"<select name='n_resource_type[]' id='n_resource_type"+intTextBox2+"' class='selectbox' style='width:240px;' onchange="+'"'+"javascript: changeText('n_resource_type"+intTextBox2+"','rowresource"+intTextBox2+"','etc"+intTextBox2+"');validate_all('add_form');"+'"'+">"+ 
					option+
					"</select>"+     
				"</div>"+ 
				"<div id='etc"+intTextBox2+"' style='display:none;'>"+
					"<input type='text' class='form-control' name='etc[]' id='etc' style='width:240px;'>"+
				"</div> "+
			"</td>"+                                                                               
			"<td class='tdstyle txtlabel' width='35%'>"+  
				"<strong>"+company+":</strong>"+  
				"<div>"+  
					"<input type='text' class='form-control' name='resource_company[]' id='resource_company' style='width:240px;'>"+  
				"</div>"+         
			"</td>"+   
			"<td class='tdstyle txtlabel' width='35%' style='display:none' id='rowresource"+intTextBox2+"'>"+  
				"<strong>"+sim_no+":</strong>"+  
				"<div>"+  
					"<input type='text' class='form-control' name='sim_no[]' id='sim_no' style='width:240px;'>"+  
				"</div>"+  
			"</td> "+                           
		"</tr>"+  
	"</table>";
    contentID.appendChild(newTBDiv);
}

intTextBox21 = 1;
function addDropdown2(lang,div,div2,counter,type,company,sim_no) // Mahdi Add
{
	//console.log(div,div2+' / '+counter+' / '+type+' / '+company+' / '+sim_no);
    if(intTextBox21 == 1 && counter > 0)
    {
         intTextBox21 = (counter + 1);
    }
    else
    {
        intTextBox21 = intTextBox21 + 1;
    }
	
    var contentID = document.getElementById(div2);
    var newTBDiv = document.createElement("div");
    newTBDiv.setAttribute("id","childDv21"+intTextBox21);
    var getopt = document.getElementById(div).innerHTML;
	// Mahdi Amiry
	var option = $('#resource').html();
	//console.log(option);
	var sims = $('#simss').html();
	
	
    newTBDiv.innerHTML =
	"<table cellpadding='0' cellspacing='0' width='100%' class='table' >"+   
		"<tr style='background:#EBEBEB'><td class='tdstyle txtlabel' colspan='4'><input type='button' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElement21('"+div2+"','"+intTextBox21+"');"+'"'+"/> <span style='font-size:12px'>"+intTextBox21+".</span></td></tr>"+   
        "<tr>"+   
			"<td class='tdstyle txtlabel' valign='top' width='35%'>"+  
				"<strong>"+type+":</strong>"+  
				"<div>"+  
					"<select name='resource_type[]' id='resource_type"+intTextBox21+"' class='selectbox' style='width:260px;' onchange="+'"'+"javascript: changeText12('etc"+intTextBox21+"','resource_company"+intTextBox21+"','etcS"+intTextBox21+"','sim_no"+intTextBox21+"','simC"+intTextBox21+"','resource_type"+intTextBox21+"','rowresource"+intTextBox21+"','etc"+intTextBox21+"','sim"+intTextBox21+"','no_sim"+intTextBox21+"');validate_all('add_form');"+'"'+">"+ 
					option+
					"</select>"+     
				"</div>"+ 
				"<div id='etc"+intTextBox21+"' style='display:none;'>"+
					"<input type='text' class='form-control' name='etc[]' id='etc"+intTextBox21+"' style='width:240px;'>"+
				"</div> "+
			"</td>"+
            
			"<td class='tdstyle txtlabel' width='35%' id='no_sim"+intTextBox21+"'>"+  
				"<strong>"+company+":</strong>"+  
				"<div>"+					
					"<input type='text' class='form-control' name='resource_company[]' id='resource_company"+intTextBox21+"' style='width:240px;'>"+
				"</div>"+         
			"</td>"+
			
			"<td class='tdstyle txtlabel' width='35%' style='display:none' id='sim"+intTextBox21+"'>"+  
				"<strong>"+company+":</strong>"+  
				"<div>"+  
					"<select name='simC[]' id='simC"+intTextBox21+"' class='selectbox' style='width:240px;' onchange="+'"'+"javascript: simChange('simC"+intTextBox21+"','etc_sim"+intTextBox21+"');validate_all('add_form');"+'"'+">"+
					sims+
					"</select>"+
				"</div>"+
				"<div id='etc_sim"+intTextBox21+"' style='display:none;'>"+
					"<input type='text' class='form-control' name='etcS[]' id='etcS"+intTextBox21+"' style='width:240px;'>"+
				"</div> "+
			"</td>"+
			"<td class='tdstyle txtlabel' width='35%' style='display:none' id='rowresource"+intTextBox21+"'>"+  
				"<strong>"+sim_no+":</strong>"+  
				"<div>"+  
					"<input type='text' dir='"+lang+"' class='form-control' name='sim_no[]' id='sim_no"+intTextBox21+"' style='width:240px;'>"+  
				"</div>"+  
			"</td> "+                           
		"</tr>"+  
	"</table>";
    contentID.appendChild(newTBDiv);
}

function removeElement21(condivId,inpId) // Mahdi
{
    if(intTextBox21 != 0)
    {
        var contentID = document.getElementById(condivId);
        contentID.removeChild(document.getElementById("childDv21"+inpId));
        intTextBox222 = inpId-1;
    }
}

function addDropdown222(div,div2,counter,name,number,cellbright_mashkook_name,cellbright_mashkook_no,baseUrl) // Mahdi Suspect Add
{
    //console.log(baseUrl);
    //console.log(div,div2,counter,name,number,cellbright_mashkook_name,cellbright_mashkook_no);
    if(intTextBox222 == 1 && counter > 0)
    {
         intTextBox222 = (counter + 1);
    }
    else
    {
        intTextBox222 = intTextBox222 + 1;
    }
    var contentID = document.getElementById(div2);
    var newTBDiv = document.createElement("div");
    newTBDiv.setAttribute("id","childDv2"+intTextBox222);
    var getopt = document.getElementById(div).innerHTML;
    newTBDiv.innerHTML =
    "<table cellpadding='0' cellspacing='0' width='100%' class='table'>"+
        "<tr style='background:#EBEBEB'><td class='tdstyle txtlabel' colspan='4'><input type='button' id='rmbtn' name='rmbtn' value='-' onclick="+'"'+"javascript: removeElement222('"+div2+"','"+intTextBox222+"');"+'"'+"/> <span style='font-size:12px'>"+intTextBox222+".</span></td></tr>"+   
        "<tr > "+
            "<td class='tdstyle txtlabel' valign='top' width='50%'>"+
                "<strong>"+cellbright_mashkook_name+":</strong>"+
                "<div>"+
                    "<input type='text' class='form-control' name='mashkook_name[]' id='mashkook_name"+intTextBox222+"' style='width:240px;'>"+
                "</div>"+
            "</td>"+                                        
            "<td class='tdstyle txtlabel' valign='top' width='50%'>"+
                "<strong>"+cellbright_mashkook_no+":</strong>"+
                "<div>"+
                    "<input type='text' class='form-control' name='mashkook_no[]' id='mashkook_no"+intTextBox222+"' style='width:240px;'>&nbsp;"+
                    "<input type='button' class='btn btn-primary' name='verBtn' name='verBtn' value='"+number+"' onclick="+'"'+"javascript: validateSerial('mashkook_no"+intTextBox222+"','"+baseUrl+"cellbright/home/validateNumber','targ_div"+intTextBox222+"','&');"+'"'+" /> "+
                "</div>"+   
                "<div id='targ_div"+intTextBox222+"'></div>"+                            
            "</td>"+                          
        "</tr>"+
    "</table>";
    contentID.appendChild(newTBDiv);
}
function removeElement222(condivId,inpId) // Mahdi
{
    if(intTextBox222 != 0)
    {
        var contentID = document.getElementById(condivId);
        contentID.removeChild(document.getElementById("childDv2"+inpId));
        intTextBox222 = inpId-1;
    }
}

//validate serial number
function validateSerial(inputName,url,div,str) // Mahdi
{    //console.log(inputName+' / '+url+' / '+div+' / '+str);
     var name = document.getElementById(inputName).value;
	 //console.log(name);
     var params='&name='+name+'&'+str;
     $.ajax({
        url: url,
        type: 'POST',
        data: params,
        success: function(response){ 
			console.log(response);
            $('#'+div).html(response);
        }
    }); 
}

function search_db_numbers(id,id1,id2) // Mahdi
{
	$('#'+id).show();
	$('#'+id1).hide();
	$('#'+id2).show();
}

function hide_db_numbers(id,id1,id2) // Mahdi 
{
	$('#'+id).hide();
	$('#'+id1).show();
	$('#'+id2).hide();
}

function isNumber(evt) // Mahdi
{
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(charCode >31 && (charCode <48 || charCode > 57))
    {
        return false;
    }
    return true;
}

function checkLength(el,msg) // Mahdi
{
	if(el.value.length < 10)
	{
		alert(msg);
	}
}

function load_search(url, id, frm_id) // Mahdi
{
	var code = document.getElementById(id).value; 
	var url = url;
	var frm_code = code;
	console.log(frm_code);
	var frm_id = frm_id;  
	$.ajax({
		type: 'POST',
		url: url,
		data: '&frm_code='+frm_code, 
		success: function(data) {
			$('#'+frm_id).html(data);
		}	
	});
}

function uncheck()
{
  $('input').iCheck('uncheck');
}

function hideNums(id1, id2, id4)
{
	var id3 = document.getElementById(id2).value;
	if(id3 == 7)
	{
		$('#'+id1).hide();
	}
	else
	{
		$('#'+id1).show();
	}
	
	if(id3 == 8)
	{
		$('#'+id4).show();
	}
	else
	{
		$('#'+id4).hide();
	}
}

function conf_complete(url, msg)
{
	var sure = window.confirm(msg);
	if(!sure)
	{
		event.preventDefault();
	}
	else
	{
		window.location = url;
	}
}

function noenter(event)
{   
    if(event.keyCode==13 || event.which==13)
    {
        return false;
    } 
}

function mobile_no12(id)
{
	var id = document.getElementById(id).value;
	console.log(id);
}

function chk()
{
	if($(":checkbox[name='sr2']").is(":checked") || $(":checkbox[name='no_sr2']").is(":checked"))
	{
		document.getElementById('nsr2').disabled = true;
		document.getElementById('no_nsr2').disabled = true;
	}
	else
	{
		document.getElementById('nsr2').disabled = false;
		document.getElementById('no_nsr2').disabled = false;
	}
	
	if($(":checkbox[name='nsr2']").is(":checked") || $(":checkbox[name='no_nsr2']").is(":checked"))
	{
		document.getElementById('sr2').disabled = true;
		document.getElementById('no_sr2').disabled = true;
	}
	else
	{
		document.getElementById('sr2').disabled = false;
		document.getElementById('no_sr2').disabled = false;
	}
}

///////////////////////////////////////////////////////////////////////////////
// namat
addMoreCounter = 1;
/*ajax request function*/
function add_more(serverPage,divId,count)
{   
//alert(serverPage+"__"+divId); 
    if(addMoreCounter == 1 && count > 0)
    {
         addMoreCounter = (count + 1);
    }
    else
    {
        addMoreCounter += 1;
    }
    var counter = addMoreCounter;
    //set url
    var url = serverPage;
    var params = '&counter='+counter;        
    //set xml method to POST
    xmlhttp_sp.open("POST", url, true);
    //Send the proper header information along with the request
    xmlhttp_sp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    xmlhttp_sp.setRequestHeader("Content-length", params.length);
    xmlhttp_sp.setRequestHeader("Connection", "close");
    xmlhttp_sp.onreadystatechange = function() {//Call a function when the state changes.
        if(xmlhttp_sp.readyState == 4 && xmlhttp_sp.status == 200) {
            $('#'+divId).append(xmlhttp_sp.responseText);
        }
    }
    //send parameters
    xmlhttp_sp.send(params);    
}

function add_more1(serverPage,divId,addMoreCounter1)
{ 
    addMoreCounter1 += 1;
    var counter = addMoreCounter1;
    //set url
    var url = serverPage;
    var params = '&counter='+counter;
    //set xml method to POST
    xmlhttp_sp.open("POST", url, true);
    //Send the proper header information along with the request
    xmlhttp_sp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    xmlhttp_sp.setRequestHeader("Content-length", params.length);
    xmlhttp_sp.setRequestHeader("Connection", "close");
    xmlhttp_sp.onreadystatechange = function() {//Call a function when the state changes.
        if(xmlhttp_sp.readyState == 4 && xmlhttp_sp.status == 200) {
            $('#'+divId).append(xmlhttp_sp.responseText);
        }
    }
    //send parameters
    xmlhttp_sp.send(params);    
}
//FUNCTION TO REMOVE TEXT BOX ELEMENT 
function removeDivElement(divname) // namat
{
    if(addMoreCounter != 0)
    {
        addMoreCounter -= 1;
        $('#'+divname).remove();
    }
}
//Go Back History function 
// namat
function goBack() {
	window.history.back();
}
// namat
function show_textbox(pid,divid,sec_divid,sect_id,form)
{    
	
    var e = document.getElementById(pid);
	
    var parent_id = e.options[e.selectedIndex].value; 

    if(parent_id=='p')
    {    
		//document.getElementById(sec_divid).innerHTML = '';
		var second_org = document.getElementById(sec_divid);
        second_org.style.display='none';
		
        var type       = document.getElementById(divid);        
        type.style.display='block'; 
		
    }else if(parent_id=='n'){
		var type       = document.getElementById(divid);        
        type.style.display='none';
		
		var second_org = document.getElementById(sec_divid);		    
        second_org.style.display='block'; 	
	}else{
        var second_org = document.getElementById(sec_divid); 
        var type       = document.getElementById(divid);     
        if(parent_id=='')
        {
            type.style.display='none';
            second_org.style.display='none'; 
        }
        else
        {
            type.style.display='none';
            second_org.style.display='block'; 
        }
    }
}
/*
function validate_all2(fname){
    
    var tform = document.getElementById(fname);
    for (i=0;i<tform.length;i++) { 
        var tempobj  = tform.elements[i];   
        var Elname   = tempobj.id; 
        var ElValue  = tempobj.value;
        if(Elname)
        {  
            if((Elname.substring(0,2) == 'n_') && ($.trim(ElValue) == ''))
            {         
                tempobj.style.border = '1px solid #aaa';
                document.getElementById(Elname+"IMG").src="/dss/images/validationx.PNG";
            }
            else if ((Elname.substring(0,2) == 'n_') && $.trim(ElValue) != '')
            { 
                //alert(document.getElementById(Elname+"IMG"));
                tempobj.style.border = '1px solid #aaa'; 
                document.getElementById(Elname+"IMG").src="/dss/images/validationy.PNG";
            } 
        }
        
    }
}*/

addMoreCounterReport = 1;
/*ajax request function*/
function add_more_report(serverPage,divId,table,count)
{

    if(addMoreCounterReport == 1 && count > 0)
    {
         addMoreCounterReport = (count + 1);
    }
    else
    {
        addMoreCounterReport += 1;
    }
    var counter = addMoreCounterReport;
    //set url
    var url = serverPage;
    var file_view = table;
    var params = '&counter='+counter+'&file='+file_view;
    //set xml method to POST
    xmlhttp_sp.open("POST", url, true);
    //Send the proper header information along with the request
    xmlhttp_sp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    xmlhttp_sp.setRequestHeader("Content-length", params.length);
    xmlhttp_sp.setRequestHeader("Connection", "close");
    xmlhttp_sp.onreadystatechange = function() {//Call a function when the state changes.
        if(xmlhttp_sp.readyState == 4 && xmlhttp_sp.status == 200) {
            $('#'+divId).append(xmlhttp_sp.responseText);
        }
    }
    //send parameters
    xmlhttp_sp.send(params);    
}

//Add more function 1 
function add_more_custom(serverPage,divId,addFor)
{
    //alert(addFor);
	var addMoreCounter = parseInt($('#counter_input').val());
	addMoreCounter +=1;	
	var counter = addMoreCounter;
	//set url
	var url = serverPage;
	var params = '&counter='+counter+'&file='+addFor;
	//set xml method to POST
	xmlhttp_sp.open("POST", url, true);
	//Send the proper header information along with the request
	xmlhttp_sp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttp_sp.setRequestHeader("Content-length", params.length);
	xmlhttp_sp.setRequestHeader("Connection", "close");
	xmlhttp_sp.onreadystatechange = function() {//Call a function when the state changes.
		if(xmlhttp_sp.readyState == 4 && xmlhttp_sp.status == 200) {
			$('#'+divId).append(xmlhttp_sp.responseText);
			$('#counter_input').val(counter); 
		}
	}
	//send parameters
	xmlhttp_sp.send(params);
}

//delete element from dss report
function removeElementDSSReport(divname) // namat
{
    if(addMoreCounterReport != 0)
    {
        addMoreCounterReport -= 1;
        $('#'+divname).remove();
    }
}

function myClass()
{
	$(".myClass").iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue'
    });
}

function dochosen()
{
	var config = {
		'.chosen-dropdown' : {search_contains: false, no_results_text: 'global_empty',width: "60%"}
	}
	var config1 = {
		'.chosen-dropdown1' : {search_contains: false, no_results_text: 'global_empty',width: "17%"}
	}	
	var config_date = {
		'.chosen-dropdown_date' : {search_contains: false, no_results_text: 'global_empty',width: "23.5%"}
	}         
	for (var selector in config) {
		$(selector).chosen(config[selector]);
	}
	for (var selector in config1) {
		$(selector).chosen(config1[selector]);
	}	
	for (var selector in config_date) {
		$(selector).chosen(config_date[selector]);
	}
}

function clearme()
{   
	/*$('#keyword').val('');
	$('.chosen-dropdown').find('option:first').prop('selected', true).end().trigger('chosen:updated');
    $('.chosen-dropdown1').find('option:first').prop('selected', true).end().trigger('chosen:updated');
    $('.chosen-dropdown_date').find('option:first').prop('selected', true).end().trigger('chosen:updated');*/
	
	$('div').removeClass('checked');
	document.getElementById('search_form').reset();
}









