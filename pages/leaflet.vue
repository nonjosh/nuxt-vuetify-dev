<template>
  <div id="map-wrap" style="height: 80vh">
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline"
          >A Dialog Box attached to a Marker :-)</v-card-title
        >
        <v-card-actions>
          <v-btn color="primary" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <client-only>
      <l-map :zoom="zoom" :center="[55.9464418, 8.1277591]">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker
          :lat-lng="[55.9464418, 8.1277591]"
          @click="dialog = true"
        ></l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 12,
      dialog: false,
    }
  },
}
</script>
<style lang="scss">
.vue2leaflet-map {
  z-index: 1;
}
</style>
