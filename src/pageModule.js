var $comboPersonaje1;
var $comboPersonaje2;
var $resultadosTable = $('#resultados');
var $resultadosTableBody = $('tbody', $resultadosTable);
var resultComicTableRowTemplate;

var characterController = CharacterController();
var vehicleController = VehicleController();
var mainController = MainController();

$(function () {
	console.profile('page-load');
	var reloadCharactersButton = document.getElementById('reload-characters-button');
	reloadCharactersButton.onclick = function (e) {
		if (e) e.preventDefault();

		document.getElementById('cast').innerHTML = '';
		characterController.reloadCharacters();
	};
	var reloadVehiclesButton = document.getElementById('reload-vehicles-button');
	reloadVehiclesButton.onclick = function (e) {
		if (e) e.preventDefault();

		document.getElementById('vehicles').innerHTML = '';
		vehicleController.reloadVehicles();
	};

	var searchButton = document.getElementById('searchButton');
	searchButton.onclick = function (e) {
		if (e) e.preventDefault();
		var text = document.getElementById('inputSearch').value;
		mainController.search(text);
	};


	characterController.loadCharacters();
	vehicleController.loadVehicles();

	setTimeout(function() {
		console.profileEnd();
	}, 500);
	
});


//console.profile('load-page');
//console.profileEnd('load-page');