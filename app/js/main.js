function renderMap(dataPoints) {
  var map = L.map('map', {
    center: [39.8283, -98.5795],
    zoom: 5,
    minZoom: 1,
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

  var heatMapLayer = L.heatLayer(dataPoints, {
    max: 9000,
    radius: 15,
    minOpacity: 0.1,
    blur: 5,
    gradient: { 0: 'red' }
  });

  heatMapLayer.addTo(map);

  L.Control.geocoder().addTo(map);
  new L.Control.Geocoder.Nominatim();
  L.Control.Geocoder.nominatim();

  var geojson_list = createGeoJson(dataPoints);
  var pointsLayer = createPoints(geojson_list, dataPoints);

  var mapLayers = {
    'Display Points': pointsLayer,
    'Heat Map': heatMapLayer
  };

  L.control.layers({}, mapLayers, { collapsed: false }).addTo(map);

  var legend = L.control({ position: 'bottomleft' });

  legend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML +=
      '<i style="background: #33089f"></i><span>Top 100</span><br>';
    div.innerHTML +=
      '<i style="background: #FFBA08"></i><span>Top 500</span><br>';
    div.innerHTML += '<i style="background: #DB162F"></i><span>Rest</span><br>';

    return div;
  };

  legend.addTo(map);
}

asyncParseCSV(renderMap);
