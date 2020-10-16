function myServices() {
	if (window.XMLHttpRequest) {
	  xmlhttp = new XMLHttpRequest();
	} else {
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var txt1 = "";
	xmlhttp.onreadystatechange = function () {
	  if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
		txt1 += '<select id="cat_select" onchange="serviceSelect()">';
		for (x = 0; x < myObj.catalog.length; x++) {
		  if (myObj.catalog[x].cat_id == 0) {
			txt1 += '<option value="' + x + '">' + myObj.catalog[x].name + "</option>";
		  }
		}
		txt1 += "</select>";
		document.getElementById("searchService").innerHTML = txt1;
	  }
  
	  if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
		txt1 += '<select id="currency_select" onchange="serviceSelect()">';
		for (x = 0; x < myObj.catalog.length; x++) {
		  if (myObj.catalog[x].cat_id == 9) {
			txt1 += '<option value="' + x + '">' + myObj.catalog[x].name + "</option>";
		  }
		}
		txt1 += "</select>";
		document.getElementById("searchService").innerHTML = txt1;
	  }
	};
	xmlhttp.open(
	  "GET",
	  "https://zygoh1986.github.io/introdev/pfAssignmentOne/json/product.json",
	  true
	);
	xmlhttp.send();
  }
  
  function serviceSelect() {
	var selectBox = document.getElementById("cat_select");
	var serviceIndex = selectBox.options[selectBox.selectedIndex].value;
	var selectCurrency = document.getElementById("currency_select");
	var currencyIndex = selectCurrency.options[selectCurrency.selectedIndex].value;
	getServiceInfo(serviceIndex, currencyIndex);
  }
  
  function getServiceInfo(i, z) {
	if (window.XMLHttpRequest) {
	  xmlhttp = new XMLHttpRequest();
	} else {
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var txt2 = "";
  
	xmlhttp.onreadystatechange = function () {

	  if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
		txt2 += '<div class ="flex-container">'
		if (i == 1 && z == 9) {
		  for (x = 0; x < myObj.catalog.length; x++) {
			if (myObj.catalog[x].cat_id == 1) {
			  txt2 += '<img src='+myObj.catalog[x].url + ' alt='+myObj.catalog[x].name+' class ='+myObj.catalog[x].class+'/>'
			  txt2 += '<p class='+ myObj.catalog[x].class +'> Name: ' + myObj.catalog[x].name + '</p><br>';
			  txt2 += '<p class ='+ myObj.catalog[x].class +'> Price: ' + myObj.catalog[x].price + '</p><br>';
  
			  document.getElementById("searchResult").innerHTML = txt2;
			}
		  }
		}

		else if (i == 1 && z == 10) {
			for (x = 0; x < myObj.catalog.length; x++) {
			  if (myObj.catalog[x].cat_id == 1) {
				txt2 += '<img src='+myObj.catalog[x].url + ' alt='+myObj.catalog[x].name+' class ='+myObj.catalog[x].class+'/>'
				txt2 += '<p class='+ myObj.catalog[x].class +'> Name: ' + myObj.catalog[x].name + "</p><br>";
				txt2 += '<p class='+ myObj.catalog[x].class  +'> Price: ' + myObj.catalog[x].INR + "</p><br>";
	
				document.getElementById("searchResult").innerHTML = txt2;
			  }
			}
		  }
		  else if (i == 1 && z == 11) {
			for (x = 0; x < myObj.catalog.length; x++) {
			  if (myObj.catalog[x].cat_id == 1) {
				txt2 += '<img src='+myObj.catalog[x].url + ' alt='+myObj.catalog[x].name+' class ='+myObj.catalog[x].class+'/>'
				txt2 += '<p class=' + myObj.catalog[x].class  +'> Name: ' + myObj.catalog[x].name + "</p> <br>";
				txt2 += '<p class='+ myObj.catalog[x].class  +'> Price: ' + myObj.catalog[x].USD + "</p> <br>";
	
				document.getElementById("searchResult").innerHTML = txt2;
			  }
			}
		  }

		  else if (i == 0) {
			txt2 += "<p> Please select the above services</p>";
			document.getElementById("searchResult").innerHTML = txt2;
		  }
  
		else if (i == 2 && z == 9) {
		  for (x = 0; x < myObj.catalog.length; x++) {
			if (myObj.catalog[x].cat_id == 2) {
			  txt2 += '<img src='+myObj.catalog[x].url + ' alt='+myObj.catalog[x].name+' class ='+myObj.catalog[x].class+'/>'
			  txt2 += '<p class='+ myObj.catalog[x].class  +'> Name: ' + myObj.catalog[x].name + "</p> <br>";
			  txt2 += '<p class='+ myObj.catalog[x].class  +'> Price: ' + myObj.catalog[x].price + "</p> <br>";
  
			  document.getElementById("searchResult").innerHTML = txt2;
			}
		  }
		}
		else if (i == 2 && z == 10) {
			for (x = 0; x < myObj.catalog.length; x++) {
			  if (myObj.catalog[x].cat_id == 2) {
				txt2 += '<img src='+myObj.catalog[x].url+ ' alt='+myObj.catalog[x].name+' class ='+myObj.catalog[x].class+'/>'
				txt2 += '<p class='+ myObj.catalog[x].class  +'> Name: ' + myObj.catalog[x].name + "</p><br>";
				txt2 += '<p class='+ myObj.catalog[x].class  +'> Price: ' + myObj.catalog[x].INR + "</p><br>";
	
				document.getElementById("searchResult").innerHTML = txt2;
			  }
			}
		  }
		  else if (i == 2 && z == 11) {
			for (x = 0; x < myObj.catalog.length; x++) {
			  if (myObj.catalog[x].cat_id == 2) {
				txt2 += '<img src='+myObj.catalog[x].url+ ' alt='+myObj.catalog[x].name+' class ='+myObj.catalog[x].class+'/>'
				txt2 += '<p class='+ myObj.catalog[x].class  +'> Name: ' + myObj.catalog[x].name + "</p> <br>";
				txt2 += '<p class='+ myObj.catalog[x].class  +'> Price: ' + myObj.catalog[x].USD + "</p> <br>";
	
				document.getElementById("searchResult").innerHTML = txt2;
			  }
			}
		  }
		  txt2 += '</ul>'
		  


	  	}
	};
	xmlhttp.open("GET","https://zygoh1986.github.io/introdev/pfAssignmentOne/json/product.json",true);
	xmlhttp.send();
  }
  