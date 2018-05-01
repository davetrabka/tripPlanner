const mapboxgl = require('mapbox-gl');
import { buildMarker } from './marker'

mapboxgl.accessToken = 'pk.eyJ1Ijoia2lya2ZzIiwiYSI6ImNqZ280NTFmczBqZW8zM3BhaGdlcGVzbDMifQ.ZLB51Nvl66wxqlVGkPxxlg';

export const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
})

buildMarker('activity', [-74.009, 40.705])
buildMarker('activity', [-87.641, 41.895])

