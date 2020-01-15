const application = require("tns-core-modules/application");
const config = require("./config")
const firebase = require("nativescript-plugin-firebase/app")
const MapAPI = config.google.map.provideAPIKey || "AIzaSyCofJsVr2wxRrxEdGRnM3Mayzi8BIS8NO8"

if(application.ios) {
    GMSServices.provideAPIKey(MapAPI);
}

firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    iOSEmulatorFlush: true,   //bug simulatore
    persist: false
  }).then(
    () => {
      console.log("firebase.init done");
    },
    error => {
      console.log(`firebase.init error: ${error}`);
  });

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
