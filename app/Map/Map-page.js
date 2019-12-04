const MapViewModel = require("./map-view-model");
const mapsModule = require("nativescript-google-maps-sdk");
const geoJson = require("./mdata");
function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new MapViewModel();
}

function isValidGEOJSON(obj) {
    try {
        if (obj.hasOwnProperty('features') && obj.features.length > 0)
            return true
        else
        console.error('il tuo geoJson non valido')
    } catch {
      return false;
    }
}

function onMapReady(args) {
    const mapView = args.object;

    if (isValidGEOJSON(geoJson)) {
        geoJson.features.forEach(feature => {
            console.log('feature', feature.geometry.coordinates[0]);
            const marker = new mapsModule.Marker();
            marker.position = mapsModule.Position.positionFromLatLng(
                feature.geometry.coordinates[1],
                feature.geometry.coordinates[0]
            );
            marker.title = feature.properties.evento;
            marker.color = "blue";
            marker.userData = {index: 1};
            mapView.addMarker(marker);
        });
    }

}

exports.onMapReady = onMapReady;
exports.onNavigatingTo = onNavigatingTo;
