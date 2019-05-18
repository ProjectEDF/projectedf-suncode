var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer(
  'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3RhbmxleWxpdTE1IiwiYSI6ImNqdnRwaXJzMTE2ZXY0OG54bHU4cGk2bGgifQ.WuacZYwxwAMIWvxjZL9BOw',
  {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken:
      'pk.eyJ1Ijoic3RhbmxleWxpdTE1IiwiYSI6ImNqdnRwaXJzMTE2ZXY0OG54bHU4cGk2bGgifQ.WuacZYwxwAMIWvxjZL9BOw',
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
  }
).addTo(map);
