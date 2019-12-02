const observableModule = require("tns-core-modules/data/observable");
const sdata = require('./sdata')
const sredata = sdata.map((item) => {
    item.interventocompleto =`${item.nome} - ${item.inizio} ${item.fine}`
    return item
});

function SpeakerViewModel() {
    const viewModel = observableModule.fromObject({
        items: sredata
    });

    return viewModel;
}

module.exports = SpeakerViewModel;
