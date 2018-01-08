$( document ).ready(function() {
	
	$.get("http://api.icndb.com/jokes/random", (response) => {
		var textoChiste = response.value.joke;
		$('h1').text(textoChiste);
	})
	
});