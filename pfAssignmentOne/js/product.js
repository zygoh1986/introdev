function myServices(){
if (window.XMLHttpRequest){
	xmlhttp = new XMLHttpRequest();
} else {
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
var txt1 = "";
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
		txt1 += '<select id="cat_select" onchange="serviceSelect()">';
        for (x = 0; x < myObj.catalog.length; x++) {
			if(myObj.catalog[x].cat_id == 0)
			{
			txt1 += '<option value="' + x + '">' + myObj.catalog[x].name + '</option>';
			}

        }
        txt1+= "</select>";
		document.getElementById("servicedetails").innerHTML = txt1;
		console.log(txt1);
		
    }
};
xmlhttp.open("GET", "http://127.0.0.1:5500/pfAssignmentOne/json/product.json", true);
xmlhttp.send();
}


/**function getMyServiceCost(){
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
    			output +='<option value="'+i+'">'+catalog[i].name+'</option>';
   			}
			output+='</select>';
			output+='</form>';
   			document.getElementById("servicedetails").innerHTML=output;
		}
  	}
	xmlhttp.open("GET","http://127.0.0.1:5500/pfAssignmentOne/json/product.json",true);
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
   			output+= '<li>name: '+catalog[i].name+'</li>';
			output+= '<li>price: '+catalog[i].price+'</li>';
			//output+= '<li>USD: '+catalog[i].US+'</li>';
   			document.getElementById("servicecost").innerHTML=output;
    	}
  	}
	xmlhttp.open("GET","http://127.0.0.1:5500/pfAssignmentOne/json/product.json",true);
	xmlhttp.send();
}
*/
