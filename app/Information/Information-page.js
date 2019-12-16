const InformationViewModel = require("./Information-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new InformationViewModel();
}

function onTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate({
        moduleName: "Information/credits/credits-page",
        cleanHistory: true
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onTap = onTap;
