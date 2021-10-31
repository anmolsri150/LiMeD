<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.maps')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card :title="$t('maps.google')" class="mb-4">
          <GmapMap :center="center" :zoom="9" map-type-id="roadmap" class="map-item">
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GmapMap>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card :title="$t('maps.yandex')" class="mb-4">
          <yandex-map :coords="coords" @click="onClick" zoom="9" class="map-item" map-type="map">
            <ymap-marker marker-id="123" :coords="coords" :balloon-template="balloonTemplate"></ymap-marker>
          </yandex-map>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>
<script>
import vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import ymapPlugin from "vue-yandex-maps";

const yandexOptions = {
  apiKey: "", // '' by default
  lang: "en-US", // 'ru_RU' by default
  version: "2.1" // '2.1' by default
};
const googleOptions = {
  load: {
    key: "AIzaSyCO8MfadmlotuuHC8wmjwL_46I5QAMIiRU",
    libraries: "geometry,drawing,places",
    v: "3.exp"
  }
};

vue.use(ymapPlugin, yandexOptions);
vue.use(VueGoogleMaps, googleOptions);

export default {
  data() {
    return {
      coords: [-34.397, 150.644],
      center: { lat: -34.397, lng: 150.644 },
      markers: [
        {
          position: { lat: -34.397, lng: 150.644 }
        }
      ]
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.coords}</p>
      `;
    }
  },
  methods: {
    onClick(e) {
      this.coords = e.get("coords");
    }
  }
};
</script>
<style>
.ymap-container {
  height: 400px;
}
</style>
