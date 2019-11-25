const BrowseViewModel = require("./Speaker-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new BrowseViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
