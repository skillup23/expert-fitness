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
import { slideExpert } from "@/assets/data";

const slides = ref(slideExpert);
</script>

<template>
  <Carousel :wrap-around="true" class="slider__expert">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item p-14 gap-[85px]">
        <div class="text-start w-[59%] mb-8">
          <h3 class="mb-8 text-3xl xl:text-4xl font-bold text-start">
            {{ slide.title }}
          </h3>
          <h4 class="mb-8 text-xl xl:text-2xl font-light leading-6">
            {{ slide.subtitle }}
          </h4>
          <ul v-for="listText in slide.listText" :key="listText">
            <li
              class="ml-7 mb-3 xl:mb-5 texl-lg xl:text-xl leading-6 font-light list-disc"
            >
              {{ listText }}
            </li>
          </ul>
        </div>
        <img :src="slide.image" :alt="slide.title" class="w-[36%]" />
      </div>
    </Slide>

    <template #addons>
      <div class="mr-auto ml-10 -mt-24 flex items-center justify-start">
        <div class="hide_next ml-10">
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
.slider__expert .carousel__slide {
  padding-left: 12px;
  padding-right: 12px;
}

.slider__expert .carousel__item {
  min-height: 792px;
  background-color: #f8f4f3;
  color: #242424;
}
.slider__expert .carousel__prev,
.slider__expert .carousel__next {
  top: 0;
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
.slider__expert .carousel__prev:hover .carousel__icon {
  color: #f8f4f3;
  opacity: 0.3;
}
.slider__expert .carousel__next:hover .carousel__icon {
  color: #f8f4f3;
  opacity: 0.3;
}

.slider__expert .hide_prev .carousel__prev {
  display: none;
}
.slider__expert .hide_next .carousel__next {
  display: none;
}

.slider__expert .carousel__pagination {
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 0;
  padding: 12px;
}
.slider__expert .carousel__pagination-button {
  padding: 0 6px;
}
.slider__expert .carousel__pagination-button::after {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  opacity: 0.3;
  background-color: #f8f4f3;
}
.slider__expert .carousel__pagination-button--active::after {
  opacity: 1;
}
</style>
