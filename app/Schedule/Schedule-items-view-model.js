const observableModule = require("tns-core-modules/data/observable");
const data = require('./data')
const firebase = require("nativescript-plugin-firebase/app")
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const redata = data.map((item) => {
    item.sub =`${item.inizio} - ${item.fine} ${item.luogo}`
    return item
});

const myObservableArray = new ObservableArray();
const myArray = [];
const schedule = firebase.firestore().collection("schedule");

schedule.get().then((document) => {
    document.forEach((doc) => {
        const tmp = doc.data()
        tmp.sub = `${tmp.inizio} — ${tmp.fine} ${tmp.luogo}`
        myObservableArray.push(tmp);
    });
});




function ScheduleItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: myObservableArray,
        myGroupingFunc: function(item){
            return item.group
        }
    });

    return viewModel;
}

const firestore = firebase.firestore();
//const schedule = firestore.collection("schedule");
console.log(`schedule`, schedule);
schedule.get().then((document) =>{
    console.log(`document`, document);
    document.forEach((doc)=> {
        console.log(`DATA`, doc.data())
    });
});

/*
var schedule = firebase.firestore().collection("schedule");
schedule.get().them((querySnapshot) => {
    querySnapshot.forEach((doc) => {

    });

});
*/
/*
//ID autogenerato
schedule.add({
    "nome": "Auto ID FINE2",
    "inizio": "11:00",
    "fine": "12:00",
    "luogo": "Piazza Unità d'Italia",
    "id": "RSkd7gKXZgD6agiNyUdy",
    "group": "11:00 - 12:00"
  }).then(documentRef =>{
      console.log(`Document auto ID: ${documentRef.id}`);
      const doc = schedule.doc(documentRef.id)
      doc.update({
          id: documentRef.id
      }).then(() => {
          console.log("SF population updated");
      });
  });

  */
/*
//ID scelto da te
schedule.doc("RSkd7gKXZgD6agiNyUdy").set({
    "nome": "FINE2",
    "inizio": "11:00",
    "fine": "12:00",
    "luogo": "Piazza Unità d'Italia",
    "id": "RSkd7gKXZgD6agiNyUdy",
    "group": "11:00 - 12:00"
  });
  */

  /*
  //Eliminare un preciso ID
  schedule.doc("sssRSkd7gKXZgD6agiNyUdy").delete().then(() => {
      console.log("SF was erased from the face of the Earth!");
  });
  */
/*
  const query = schedule
    .where("inizio", "==", "9:00");

query.get()
.then(querySnapshot => {
    querySnapshot.forEach(doc => {
    console.log("inizio alle 9", doc.data());
    });
});
*/

module.exports = ScheduleItemsViewModel;
