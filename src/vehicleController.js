function VehicleController() {
    var module = {
        loadVehicles: loadVehicles,
        reloadVehicles: reloadVehicles,
        printVehicles: printVehicles
    };

    function loadVehicles() {
        return api.starships()
            .then(printVehicles);
    }

    function reloadVehicles() {
        var castContainer = document.getElementById('vehicles');
        castContainer.innerHTML = '';

        return loadVehicles();
    }

    function printVehicles(response) {
        var castContainer = document.getElementById('vehicles');

        var elementList = response.results.map(createVehicleElement);

        $(castContainer).append(elementList);

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
}
