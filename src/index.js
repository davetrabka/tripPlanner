const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1Ijoia2lya2ZzIiwiYSI6ImNqZ280NTFmczBqZW8zM3BhaGdlcGVzbDMifQ.ZLB51Nvl66wxqlVGkPxxlg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
})

new mapboxgl.Marker().setLngLat([-74.009, 40.705]).addTo(map);
new mapboxgl.Marker().setLngLat([-87.641, 41.895]).addTo(map);

