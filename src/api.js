var Api = (function() {
	var urls = {
		characters: 'https://swapi.co/api/people',
		starships: 'https://swapi.co/api/starships',
		searchCharacters: 'https://swapi.co/api/people/?search={{text}}'
	};

	return {
	  characters: function () {
	    return $.get(urls.characters);
	  },

	  starships: function () {
	    return $.get(urls.starships);
	  },

	  searchCharacters: function (text) {
	  	var url = urls.searchCharacters.replace('{{text}}', text);
	    return $.get(url);
	  }
	}
});