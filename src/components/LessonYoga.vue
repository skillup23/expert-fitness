<script setup>
import { ref } from "vue";
// import { sliderLessonYouga } from "@/assets/data";

// const slides = ref(sliderLessonYouga);
const videoN = ref(1);
const videoL = ref("https://kinescope.io/embed/8mqUyr5BTDC5zsmHAHUVJG");

function nextVideo() {
  videoN.value++;
  if (videoN.value === 2) {
    videoL.value = "https://kinescope.io/embed/tEfDGJfkbikepWgF7GnZ9R";
  }
}
</script>

<template>
  <div class="">
    <div style="position: relative; padding-top: 177.78%; width: 100%">
      <iframe
        :src="videoL"
        allow=""
        frameborder="0"
        style="
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 20px;
        "
      ></iframe>
    </div>
    <button @click="nextVideo">Next</button>
  </div>
</template>
