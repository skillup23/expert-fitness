<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<script setup>
import { ref } from 'vue';
import { sliderReviewYouga } from '@/assets/data';

const slides = ref(sliderReviewYouga);
</script>

<template>
  <Carousel :wrap-around="true" class="slider__review -mx-3">
    <Slide v-for="slide in slides" :key="slide.id">
      <div
        class="carousel__item bg-purple flex flex-col lg:flex-row lg:gap-[80px] xl:gap-[118px]"
      >
        <img
          :src="slide.image"
          :alt="slide.name"
          class="w-full lg:w-5/12 xl:w-[400px] mb-4 lg:mb-0 rounded-[18px]"
        />
        <div class="text-white">
          <div
            class="relative lg:min-h-[350px] xl:min-h-[400px] flex flex-col justify-between"
          >
            <p class="absolute top-10 sm:top-0 -left-4 sm:-left-14 heading">
              “
            </p>
            <p class="absolute -bottom-4 lg:bottom-24 right-0 heading">“</p>

            <div class="flex flex-col gap-4">
              <h6 class="block lg:hidden text-start">{{ slide.name }}</h6>
              <p
                v-for="listText in slide.listText"
                :key="listText"
                class="text-start leading-5"
              >
                {{ listText }}
              </p>
            </div>

            <div
              class="hidden lg:flex mt-6 xl:mt-0 mb-20 gap-[40px] xl:gap-[195px]"
            >
              <h6>{{ slide.name }}</h6>
              <h6>{{ slide.date }}</h6>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <div
        class="xl:ml-[170px] 2xl:mx-auto mt-4 lg:-mt-12 flex items-center justify-center"
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
.slider__review .carousel__slide {
  padding-left: 26px;
  padding-right: 26px;
  align-items: start;
}

.slider__review .carousel__prev,
.slider__review .carousel__next {
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
.slider__review .carousel__prev:hover .carousel__icon {
  color: #923ea1;
  opacity: 0.3;
}
.slider__review .carousel__next:hover .carousel__icon {
  color: #923ea1;
  opacity: 0.3;
}
.slider__review .hide_prev .carousel__prev {
  display: none;
}
.slider__review .hide_next .carousel__next {
  display: none;
}

.slider__review .carousel__pagination {
  background-color: #f8f4f3;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 0;
  padding: 12px;
}
.slider__review .carousel__pagination-button {
  padding: 0 6px;
}
.slider__review .carousel__pagination-button::after {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  opacity: 0.3;
  background-color: #923ea1;
}
.slider__review .carousel__pagination-button--active::after {
  opacity: 1;
}

@media (min-width: 768px) {
  .slider__review .carousel__slide {
    padding-left: 85px;
    padding-right: 85px;
  }
}
@media (min-width: 1024px) {
  .slider__review .carousel__slide {
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
