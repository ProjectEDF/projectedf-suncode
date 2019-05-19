function asyncParseCSV(callback) {
  d3.csv('../app/data/ranking_receptivity_lat_lng.csv')
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
      parseFloat(d.LAT),
      parseFloat(d.LNG),
      parseFloat(d.receptivity) || 0.0
    ]);
  });

  return dataPoints;
}

function createPoints(geoJson, dataPoints) {
  var i = dataPoints.length - 1;

  return L.geoJSON(geoJson, {
    pointToLayer: function(feature, latlng) {
      var receptivity = dataPoints[i][2];
      var rank = i;
      var color;

      if (rank > 9000) {
        color = '#DB162F';
      } else if (rank < 9000 && rank > 8500) {
        color = '#FFBA08';
      } else {
        color = '#33089f';
      }

      i--;
      return L.circleMarker(latlng, {
        radius: 1,
        weight: 0,
        fillColor: color,
        fillOpacity: 0.8
      });
    }
  });
}

function createGeoJson(data) {
  var geojson_list = [];

  data.forEach(function(d) {
    geojson = {
      type: 'Point',
      coordinates: [d[1], d[0]]
    };

    geojson_list.push(geojson);
  });

  return geojson_list;
}
