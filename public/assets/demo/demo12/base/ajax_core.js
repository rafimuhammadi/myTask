var xmlhttp_sp = false;
var is_csrf = true;
try {
//If the Javascript version is greater than 5.
	  xmlhttp_sp = new ActiveXObject("Msxml2.XMLHTTP");

	} catch (e) {
//If not, then use the older active x object.
try {

	   xmlhttp_sp = new ActiveXObject("Microsoft.XMLHTTP");

} catch (E) {
//Else we must be using a non-IE browser.
			  xmlhttp_sp = false;
			}
}

if (!xmlhttp_sp && typeof XMLHttpRequest != 'undefined') {
		  xmlhttp_sp = new XMLHttpRequest();

}
/*ajax request function*/
function makerequest_sp(serverPage, params, objID)
{ 
	/*display loading inside a custom created DIV*/
	create_foo_costum(100,250,'myFoo');
	/*load loading image*/
	document.getElementById('myFoo').innerHTML ='<div align="center"><image src="/amod/images/loading.gif" border="0"></div>';
	/*add a random number at the end of parammeters*/
	var myRandom=parseInt(Math.random()*99999999);
	params+='&'+myRandom;
	//set url
	var url = serverPage;
	//alert(params);
	//set xml method to POST
	xmlhttp_sp.open("POST", url, true);
	//Send the proper header information along with the request
	xmlhttp_sp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttp_sp.setRequestHeader("Content-length", params.length);
	xmlhttp_sp.setRequestHeader("Connection", "close");
	xmlhttp_sp.onreadystatechange = function() {//Call a function when the state changes.
		if(xmlhttp_sp.readyState == 4 && xmlhttp_sp.status == 200) {
			document.getElementById(objID).innerHTML = xmlhttp_sp.responseText;
			delete_foo_custom('myFoo');
			myClass();
			validate_all('approve');  
		}
	}
	//send parameters
	xmlhttp_sp.send(params);    
   
}

function language_change(serverPage, sel, c_url)
{  
	var lang = sel[sel.selectedIndex].value;
	var myRandom=parseInt(Math.random()*99999999);
	// Call to check the global variable and existence of token.
	var cct = check_token();
	// Check if global variable is false or if its true but the token is not existed.
	if(cct == 0)
	{
		var params ='&lang='+lang+'&'+myRandom;
	}
	else
	{
		var params ='&lang='+lang+'&'+myRandom+'&ci_csrf_token='+cct;
	}
	//set url
	var url = serverPage;
	//set xml method to POST
	xmlhttp_sp.open("POST", url, true);
	//Send the proper header information along with the request
	xmlhttp_sp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlhttp_sp.setRequestHeader("Content-length", params.length);
	xmlhttp_sp.setRequestHeader("Connection", "close");
	xmlhttp_sp.onreadystatechange = function() {//Call a function when the state changes.
		if(xmlhttp_sp.readyState == 4 && xmlhttp_sp.status == 200) {
			if(xmlhttp_sp.responseText == 1)
			{
			   window.location = c_url;
			}
		}
	}
	//send parameters
	xmlhttp_sp.send(params);
	   
   
}

//---Edited By Hedayatullah Sarwary
//---21/04/2018
function language_change2(serverPage, sel, c_url,language)
{
    var lang = language;
    var myRandom=parseInt(Math.random()*99999999);
    //---Call to check the existance of token.
    var cct = check_token();
    //---Check if global variable is_csrf is false or if its true but the token is not existed.
    if(cct == 0)
    {
        var params ='&lang='+lang+'&'+myRandom;
    }
    else
    {
        var params ='&lang='+lang+'&'+myRandom+'&ci_csrf_token='+cct;
    }
    //---Set URL
    var url = serverPage;
    //---Set xml method to POST
    xmlhttp_sp.open("POST", url, true);
    //---Send the proper header information along with the request
    xmlhttp_sp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    xmlhttp_sp.setRequestHeader("Content-length", params.length);
    xmlhttp_sp.setRequestHeader("Connection", "close");
    //---Call a function when the state changes.
    xmlhttp_sp.onreadystatechange = function()
    {
        if(xmlhttp_sp.readyState == 4 && xmlhttp_sp.status == 200)
        {
            if(xmlhttp_sp.responseText == 1)
            {
                document.location.href = c_url;
            }
        }
    }
    //---Send Parameters
    xmlhttp_sp.send(params);
}//---End of Function language_change2
