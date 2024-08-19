<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 500px and up
      500: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    },
  }),
});
</script>

<script setup>
import { ref } from "vue";
import { sliderLessonYouga } from "@/assets/data";

const slides = ref(sliderLessonYouga);
</script>

<template>
  <Carousel
    v-bind="settings"
    :breakpoints="breakpoints"
    :wrap-around="true"
    class="slide__less_youga"
  >
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <img :src="slide.image" :alt="slide.id" />
      </div>
    </Slide>

    <template #addons>
      <div class="mx-auto mt-10 flex items-center justify-center">
        <div class="hide_next ml-auto">
          <Navigation />
        </div>
        <Pagination />
        <div class="hide_prev mr-auto">
          <Navigation />
        </div>
      </div>
    </template>
  </Carousel>
</template>

<style>
.slide__less_youga .carousel__slide {
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
}

.slide__less_youga .carousel__prev,
.slide__less_youga .carousel__next {
  margin: 0;
  position: relative;
  width: 40px;
  height: 40px;
  box-sizing: content-box;
  color: #f8f4f3;
  background-color: #923ea1;
  border-radius: 50%;
  transform: translateY(0%);
}
.slide__less_youga .carousel__prev:hover .carousel__icon {
  color: #f8f4f3;
  opacity: 0.3;
}
.slide__less_youga .carousel__next:hover .carousel__icon {
  color: #f8f4f3;
  opacity: 0.3;
}

.slide__less_youga .hide_prev .carousel__prev {
  display: none;
}
.slide__less_youga .hide_next .carousel__next {
  display: none;
}

.slide__less_youga .carousel__pagination {
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 0;
  padding: 12px;
  background-color: #923ea1;
}
.slide__less_youga .carousel__pagination-button {
  padding: 0 6px;
}
.slide__less_youga .carousel__pagination-button::after {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  opacity: 0.3;
  background-color: #f8f4f3;
}
.slide__less_youga .carousel__pagination-button--active::after {
  opacity: 1;
}
</style>
