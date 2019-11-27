const InformationViewModel = require("./Information-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new InformationViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
