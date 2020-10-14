function getMovieTitles(){
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	} else {
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange = function(){
  		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    		var jsondata = JSON.parse(xmlhttp.responseText); //retrieve result as an JavaScript object
   			var movies = jsondata.movies;
			var output='<form>';
			output+='<select id="movie_select" onchange="movieSelect()" >';
   			for (var i=0; i < movies.length; i++){
    			output +='<option value="'+i+'">'+movies[i].title+'</option>';
   			}
			output+='</select>';
			output+='</form>';
   			document.getElementById("movie_title").innerHTML=output;
    	}
  	}
	xmlhttp.open("GET","movies.json",true);
	xmlhttp.send();
}
function movieSelect(){
	var selectBox = document.getElementById("movie_select");
	var movieIndex = selectBox.options[selectBox.selectedIndex].value;
	getMovieInfo(movieIndex);
}
function getMovieInfo(i){
	var xmlhttp;
	if (window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	} else {
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange = function(){
  		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    		var jsondata = JSON.parse(xmlhttp.responseText); //retrieve result as an JavaScript object
   			var movies = jsondata.movies;
			var output='';
   			output+= '<li>Year: '+movies[i].year+'</li>';
			output+= '<li>Genre: '+movies[i].genre+'</li>';
			output+= '<li>Director: '+movies[i].director+'</li>';
   			document.getElementById("movie_info").innerHTML=output;
    	}
  	}
	xmlhttp.open("GET","movies.json",true);
	xmlhttp.send();
}