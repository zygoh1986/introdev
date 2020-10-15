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
		//txt3 += '<select id="currency_select" onchange="serviceCurrencySelect()">';
		for (x = 0; x < myObj.catalog.length; x++) {
		  if (myObj.catalog[x].cat_id == 0) {
			txt1 +=
			  '<option value="' + x + '">' + myObj.catalog[x].name + "</option>";
		  }
		}
		txt1 += "</select>";
		document.getElementById("servicedetails").innerHTML = txt1;
	  }
  
	  if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
		txt1 +=
		  '<select id="currency_select" onchange="serviceCurrencySelect()">';
		for (x = 0; x < myObj.catalog.length; x++) {
		  if (myObj.catalog[x].cat_id == 9) {
			txt1 +=
			  '<option value="' + x + '">' + myObj.catalog[x].name + "</option>";
		  }
		}
		txt1 += "</select>";
		document.getElementById("servicedetails").innerHTML = txt1;
	  }
	};
	xmlhttp.open(
	  "GET",
	  "http://127.0.0.1:5500/pfAssignmentOne/json/product.json",
	  true
	);
	xmlhttp.send();
  }
  
  function serviceSelect() {
	var selectBox = document.getElementById("cat_select");
	var serviceIndex = selectBox.options[selectBox.selectedIndex].value;
	getServiceInfo(serviceIndex);
  }
  
  function serviceCurrencySelect() {
	var selectCurrency = document.getElementById("currency_select");
	var currencyIndex =
	  selectCurrency.options[selectCurrency.selectedIndex].value;
	getServiceCurrencyInfo(currencyIndex);
  }
  
  function getServiceInfo(i) {
	if (window.XMLHttpRequest) {
	  xmlhttp = new XMLHttpRequest();
	} else {
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var txt2 = "";
  
	xmlhttp.onreadystatechange = function () {
	  if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
  
		if (i == 1) {
		  for (x = 0; x < myObj.catalog.length; x++) {
			if (myObj.catalog[x].cat_id == 1) {
			  txt2 += "<h4> Name: " + myObj.catalog[x].name + "</h4>";
			  txt2 += "<p> Price: " + myObj.catalog[x].price + "<p>";
  
			  document.getElementById("servicecost").innerHTML = txt2;
			}
		  }
		}
  
		if (i == 2) {
		  for (x = 0; x < myObj.catalog.length; x++) {
			if (myObj.catalog[x].cat_id == 2) {
			  txt2 += "<h4> Name: " + myObj.catalog[x].name + "</h4>";
			  txt2 += "<p> Price: " + myObj.catalog[x].price + "</p>";
  
			  document.getElementById("servicecost").innerHTML = txt2;
			}
		  }
		}
  
		if (i == 0) {
		  document.getElementById("servicecost").innerHTML = txt2;
		}
	  }
	};
	xmlhttp.open(
	  "GET",
	  "http://127.0.0.1:5500/pfAssignmentOne/json/product.json",
	  true
	);
	xmlhttp.send();
  }
  
  function getServiceCurrencyInfo(z) {
	if (window.XMLHttpRequest) {
	  xmlhttp = new XMLHttpRequest();
	} else {
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var txt2 = "";
  
	xmlhttp.onreadystatechange = function () {
	  if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
  
		if (z == 10) {
		  for (x = 0; x < myObj.catalog.length; x++) {
			if (myObj.catalog[x].cat_id == 1) {
			  txt2 += "<h4> Name: " + myObj.catalog[x].name + "</h4>";
			  txt2 += "<p> Price: " + myObj.catalog[x].INR + "<p>";
  
			  document.getElementById("servicecost").innerHTML = txt2;
			}
		  }
		}
  
		if (z == 11) {
		  for (x = 0; x < myObj.catalog.length; x++) {
			if (myObj.catalog[x].cat_id == 2) {
			  txt2 += "<h4> Name: " + myObj.catalog[x].name + "</h4>";
			  txt2 += "<p> Price: " + myObj.catalog[x].USD + "</p>";
  
			  document.getElementById("servicecost").innerHTML = txt2;
			}
		  }
		}
  
		if (i == 9) {
		  document.getElementById("servicecost").innerHTML = txt2;
		}
	  }
	};
	xmlhttp.open(
	  "GET",
	  "http://127.0.0.1:5500/pfAssignmentOne/json/product.json",
	  true
	);
	xmlhttp.send();
  }
  
  document.getElementById("btn").addEventListener("click", myFunction);
  
  function myFunction() 
  {
	  alert("hello")
  
  }
  