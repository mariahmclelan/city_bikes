// let newYorkCoords = [40.73, -74.0059];
// let mapZoomLevel = 12;

// Create the createMap function.
function createMap(bikeStations){
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  let baseMaps = {
    "Street Map": streetmap
  };

  let overlaysMaps = {
    "Bike Stations": bikeStations
  };

  let map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 15,
    layers: [streetmap, bikeStations]
  });

  L.control.layers(baseMaps, overlaysMaps, {
    collapsed: false
  }).addTo(map)
}


function createMarkers(response){
  
  let stations = response.data.stations;

  let bikeMarkers = [];

  for (let i = 0; i < stations.length; i++){
    let station = stations[i];

    let bikeMarker = L.marker([station.lat, station.lon])
    .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");

    bikeMarkers.push(bikeMarker);
  }


  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  createMap(L.layerGroup(bikeMarkers));
}


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);

  // Create the tile layer that will be the background of our map.


  // Create a baseMaps object to hold the lightmap layer.


  // Create an overlayMaps object to hold the bikeStations layer.


  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.

  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
