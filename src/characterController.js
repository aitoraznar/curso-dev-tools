var CharacterController = (function() {
    var api = Api();
    
    var module = {
        loadCharacters: loadCharacters,
        reloadCharacters: loadCharacters,
        printCharacters: printCharacters
    };

    function loadCharacters() {
        return api.characters()
            .then(printCharacters);
    }

    function printCharacters(response) {
        var castContainer = document.getElementById('cast');

        var elementList = response.results.map(createCharacterElement);

        $(castContainer).empty().append(elementList);

        return response;
    }


    function createCharacterElement(characterData) {
        var li = document.createElement('li');
        li.innerText = characterData.name;

        return li;
    }

    function appendCharacterElement(characterData) {
        var li = document.createElement('li');
        li.innerText = characterData.name;

        return li;
    }


    //console.table(response.results);

    //console.time('printCharacters');
    //console.timeEnd('printCharacters');

    return module;
});