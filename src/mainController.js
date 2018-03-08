var MainController = (function() {
    var api = Api();
    
    var resultTableRowTemplate;
    var module = {
        search: search
    };

    function search(text) {
        return api.searchCharacters(text)
            .then(createResultElements);
    }

    function createResultElements(response) {
        console.table(response.results);

        var container = document.getElementById('resultados');
        resultTableRowTemplate = document.getElementById('resultTableRowTemplate');

        var elementList = response.results.map(createResultRow);

        $('tbody', container).empty().append(elementList);

        return response;
    }

    function createResultRow(data) {
        var rowHtml = resultTableRowTemplate.innerHTML
            .replace('{{name}}', data.name)
            .replace('{{height}}', data.height)
            .replace('{{gender}}', data.gender)
            .replace('{{films}}', data.films.length);

        return $(rowHtml)[0];
    }

    return module;
});
