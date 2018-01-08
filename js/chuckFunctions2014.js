$( document ).ready(function() {
	
	//Función para el 2014
	$.icndb.getRandomJoke((response) => { var textoChiste = response.joke; });

	$.icndb.getRandomJokes({ 
		number: 10, 
		success: (response) => {
		response.forEach(element => { $("ul").append('<li class="list-group-item">' + element.joke + '</li>'); });
	}});
	
});