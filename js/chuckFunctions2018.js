$( document ).ready(function() {
	
	//Función para el 2005
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', 'http://api.icndb.com/jokes/random/', true);
	xmlhttp.onreadystatechange = function(){
		var textoChiste = JSON.parse(this.response).value.joke;
		console.log('chiste recibido: ' + textoChiste);
		var h1s = document.getElementsByTagName('h1');
		h1s[0].innerHTML = textoChiste;
	}
	xmlhttp.send();
	
	//Función para el 2007	
	
	
});