const mapboxgl = require('mapbox-gl');
import { map } from './index'


const markerType = (str) => {
  if (str === 'hotel') return `url(http://i.imgur.com/D9574Cu.png)`
  if (str === 'activity') return `url(http://i.imgur.com/WbMOfMl.png)`
  if (str === 'restaurant') return `url(http://i.imgur.com/cqR6pUI.png)`
}

export const buildMarker = (newMarkerType, coords) => {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  markerDomEl.style.backgroundImage = markerType(newMarkerType);

  const newMarker = new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);
  return newMarker
}
