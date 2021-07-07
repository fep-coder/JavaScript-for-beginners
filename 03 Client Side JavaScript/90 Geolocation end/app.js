navigator.geolocation.getCurrentPosition(getCoords);
function getCoords(position) {
    console.log( `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}` );
    console.log( position );
}

let id = navigator.geolocation.watchPosition(getCoords);

navigator.geolocation.clearWatch(id);