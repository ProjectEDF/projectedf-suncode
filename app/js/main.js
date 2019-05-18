function renderMap(dataPoints) {
  var map = L.map('map', {
    center: [39.8283, -98.5795],
    zoom: 5,
    minZoom: 4,
    maxZoom: 18
  });

  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3RhbmxleWxpdTE1IiwiYSI6ImNqdnRwaXJzMTE2ZXY0OG54bHU4cGk2bGgifQ.WuacZYwxwAMIWvxjZL9BOw',
    {
      id: 'mapbox.streets',
      accessToken:
        'pk.eyJ1Ijoic3RhbmxleWxpdTE1IiwiYSI6ImNqdnRwaXJzMTE2ZXY0OG54bHU4cGk2bGgifQ.WuacZYwxwAMIWvxjZL9BOw',
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    }
  ).addTo(map);

  L.heatLayer(dataPoints, {
    // radius: 15,
    // blur: 5,
    // gradient: { 0: 'red', 0.33: 'red', 0.5: 'red', 0.66: 'red', 1: 'red' }
  }).addTo(map);

  L.Control.geocoder().addTo(map);
  new L.Control.Geocoder.Nominatim();
  L.Control.Geocoder.nominatim();

  var geojson_list = createGeoJson(dataPoints);
  var points = createPoints(geojson_list);

  var points_layer = {
    'Display Points': points
  };

  L.control.layers({}, points_layer, { collapsed: false }).addTo(map);
}

asyncParseCSV(renderMap);
