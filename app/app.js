const application = require("tns-core-modules/application");


if(application.ios) {
    GMSServices.provideAPIKey("AIzaSyCofJsVr2wxRrxEdGRnM3Mayzi8BIS8NO8");
}

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
