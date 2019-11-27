const MapViewModel = require("./Map-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new MapViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
