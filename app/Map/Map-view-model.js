const observableModule = require("tns-core-modules/data/observable");

function MapViewModel() {
    const viewModel = observableModule.fromObject({
        nome: ``,
        cognome: ``
    });

    return viewModel;
}

module.exports = MapViewModel;
