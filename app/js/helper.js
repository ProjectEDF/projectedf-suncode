function asyncParseCSV(callback) {
  d3.csv('../app/data/data.csv')
    .then(parseDataPoints)
    .then(callback)
    .catch(function(e) {
      console.error(e);
    });
}

function parseDataPoints(data) {
  const dataPoints = [];

  data.forEach(function(d) {
    dataPoints.push([
      parseFloat(d.Latitude),
      parseFloat(d.Longitude),
      parseFloat(d.receptivity) // || 0.0
    ]);
  });

  return dataPoints;
}

function createPoints(geoJson, color) {
  var geojsonMarkerOptions = {
    radius: 2,
    weight: 0,
    fillColor: '#DB162F',
    fillOpacity: 0.8
  };

  return L.geoJSON(geoJson, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
    }
  });
}

function createGeoJson(data) {
  var geojson_list = [];

  data.forEach(function(d) {
    geojson = {
      type: 'Point',
      coordinates: [d[0], d[1]]
    };

    geojson_list.push(geojson);
  });

  return geojson_list;
}
