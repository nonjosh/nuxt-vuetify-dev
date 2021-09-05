import Vue from 'vue';
import { Icon } from 'leaflet';
import { latLngBounds, latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LGeoJson } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-geo-json', LGeoJson);

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default ({ app }, inject) => {
  inject('latLngBounds', latLngBounds)
  inject('latLng', latLng)
}
