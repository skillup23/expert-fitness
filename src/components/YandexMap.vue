<template>
  <yandex-map
    :settings="{
      location: {
        center: [38.982, 45.067812],
        zoom: 17,
      },
      showScaleInCopyrights: true,
    }"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />

    <yandex-map-marker
      v-for="marker in markers"
      :key="marker.iconSrc"
      position="top-center left-center"
      :settings="{ coordinates: marker.coordinates }"
    >
      <img alt="" class="pin" :src="marker.iconSrc" @click="produceAnAlert" />
    </yandex-map-marker>
  </yandex-map>
</template>

<script setup>
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from 'vue-yandex-maps';

const markers = [
  {
    coordinates: [38.983218, 45.0681],
    iconSrc: '/media/boolen-yandex-map.png',
  },
];
</script>

<style scoped>
.pin {
  cursor: pointer;
  max-width: unset;
  width: 60px;
  height: 60px;
}
</style>
