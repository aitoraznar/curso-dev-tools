var VehicleController = (function() {
    var api = Api();
    
    var module = {
        loadVehicles: loadVehicles,
        reloadVehicles: loadVehicles,
        printVehicles: printVehicles
    };

    function loadVehicles() {
        return api.starships()
            .then(printVehicles);
    }

    function printVehicles(response) {
        var castContainer = document.getElementById('vehicles');

        var elementList = response.results.map(createVehicleElement);

        $(castContainer).empty().append(elementList);

        return response;
    }


    function createVehicleElement(vehicleData) {
        var li = document.createElement('li');
        li.innerText = vehicleData.name;

        return li;
    }

    function appendVehicleElement(vehicleData) {
        var li = document.createElement('li');
        li.innerText = vehicleData.name;

        return li;
    }

    return module;
});