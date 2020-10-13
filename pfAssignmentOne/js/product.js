function getMyServiceCost(){
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	} else {
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange = function(){
  		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    		var jsondata = JSON.parse(xmlhttp.responseText); //retrieve result as an JavaScript object
   			var catalog = jsondata.catalog;
			var output='<form>';
			output+='<select id="service_select" onchange="serviceSelect()" >';
   			for (var i=0; i < catalog.length; i++){
    			output +='<option value="'+i+'">'+catalog[i].title+'</option>';
   			}
			output+='</select>';
			output+='</form>';
   			document.getElementById("servicedetails").innerHTML=output;
    	}
  	}
	xmlhttp.open("GET","product.json",true);
	xmlhttp.send();
}

function serviceSelect(){
	var selectBox = document.getElementById("service_select");
	var serviceIndex = selectBox.options[selectBox.selectedIndex].value;
	getServiceInfo(serviceIndex);
}
function getServiceInfo(i){
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	} else {
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange = function(){
  		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    		var jsondata = JSON.parse(xmlhttp.responseText); //retrieve result as an JavaScript object
   			var catalog = jsondata.catalog;
			var output='';
   			output+= '<li>SGD: '+catalog[i].SG+'</li>';
			output+= '<li>INR: '+catalog[i].IN+'</li>';
			output+= '<li>USD: '+catalog[i].US+'</li>';
   			document.getElementById("servicecost").innerHTML=output;
    	}
  	}
	xmlhttp.open("GET","product.json",true);
	xmlhttp.send();
}