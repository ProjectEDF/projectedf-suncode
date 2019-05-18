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
      parseFloat(d.receptivity)
    ]);
  });

  return dataPoints;
}
