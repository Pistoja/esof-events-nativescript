const observableModule = require("tns-core-modules/data/observable");

function MapViewModel() {
    const viewModel = observableModule.fromObject({
        latitudine:45.6522854,
        longitudine:13.7661518,
        zoom:15
    });

    return viewModel;
}

module.exports = MapViewModel;
