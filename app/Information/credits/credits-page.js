const CreditsViewModel = require("./credits-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new CreditsViewModel();
}

function onTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate({
        moduleName: "Information/Information-page",
        cleanHistory: true
    });


}

exports.onNavigatingTo = onNavigatingTo;
exports.onTap = onTap;
