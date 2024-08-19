<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<script setup>
import { ref } from "vue";
import { sliderAdvantages } from "@/assets/data";

const slides = ref(sliderAdvantages);
</script>

<template>
  <Carousel :wrap-around="true" class="slider__advantages mt-8">
    <Slide
      v-for="slide in slides"
      :key="slide.id"
      class="p-6 sm:p-12 hidden lg:flex items-start rounded-[20px] bg-white gap-4"
    >
      <img :src="slide.image" alt="Преимущества" class="w-1/2 rounded-[20px]" />
      <p
        class="w-1/2 text-[14px] sm:text-[24px] text-start leading-4 sm:leading-5"
      >
        {{ slide.text }}
      </p>
    </Slide>

    <template #addons>
      <div
        class="xl:ml-[170px] 2xl:mx-auto mt-6 sm:mt-10 flex items-center justify-center"
      >
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
.slider__advantages .carousel__slide {
  padding-left: 12px;
  padding-right: 12px;
  align-items: start;
}

.slider__advantages .carousel__prev,
.slider__advantages .carousel__next {
  top: 0;
  margin: 0;
  position: relative;
  width: 40px;
  height: 40px;
  box-sizing: content-box;
  color: #923ea1;
  background-color: #f8f4f3;
  border-radius: 50%;
  transform: translateY(0%);
}
.slider__advantages .carousel__prev:hover .carousel__icon {
  color: #923ea1;
  opacity: 0.3;
}
.slider__advantages .carousel__next:hover .carousel__icon {
  color: #923ea1;
  opacity: 0.3;
}
.slider__advantages .hide_prev .carousel__prev {
  display: none;
}
.slider__advantages .hide_next .carousel__next {
  display: none;
}

.slider__advantages .carousel__pagination {
  background-color: #f8f4f3;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 0;
  padding: 12px;
}
.slider__advantages .carousel__pagination-button {
  padding: 0 6px;
}
.slider__advantages .carousel__pagination-button::after {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  opacity: 0.3;
  background-color: #923ea1;
}
.slider__advantages .carousel__pagination-button--active::after {
  opacity: 1;
}
</style>
