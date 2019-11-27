const SpeakerViewModel = require("./Speaker-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new SpeakerViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
