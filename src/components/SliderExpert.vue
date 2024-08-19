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
      <div
        class="carousel__item px-6 pt-0 pb-6 sm:p-6 lg:p-14 gap-4 lg:gap-[85px]"
      >
        <div
          class="-mt-28 sm:mt-0 text-start w-full lg:w-[59%] lg:mb-8 bg-white"
        >
          <h3
            class="mt-4 sm:mt-0 mb-4 lg:mb-8 text-[14px] sm:text-[24px] lg:text-3xl xl:text-4xl font-bold text-start"
          >
            {{ slide.title }}
          </h3>

          <h4
            class="hidden lg:block mb-8 text-xl xl:text-2xl font-light leading-6"
          >
            {{ slide.subtitle }}
          </h4>

          <ul
            v-for="listText in slide.listText"
            :key="listText"
            class="hidden lg:block"
          >
            <li
              class="ml-7 mb-3 xl:mb-5 texl-lg xl:text-xl leading-6 font-light list-disc"
            >
              {{ listText }}
            </li>
          </ul>

          <ul
            v-for="listMobileText in slide.listMobileText"
            :key="listMobileText"
            class="lg:hidden"
          >
            <li
              class="mb-3 xl:mb-5 text-[14px] sm:text-lg xl:text-xl leading-4 sm:leading-6 font-light"
            >
              {{ listMobileText }}
            </li>
          </ul>
        </div>
        <img :src="slide.image" :alt="slide.title" class="w-full lg:w-[36%]" />
      </div>
    </Slide>

    <template #addons>
      <div
        class="mx-auto lg:mr-auto lg:ml-10 mt-10 lg:-mt-20 xl:-mt-24 flex items-center justify-center lg:justify-start"
      >
        <div class="hide_next lg:ml-10">
          <Navigation />
        </div>
        <Pagination />
        <div class="hide_prev lg:mr-auto">
          <Navigation />
        </div>
      </div>
    </template>
  </Carousel>
</template>

<style>
.slider__expert .carousel__slide {
  padding-left: 34px;
  padding-right: 34px;
}

.slider__expert .carousel__item {
  background-color: #f8f4f3;
  color: #242424;
  flex-direction: column-reverse;
}

.slider__expert .carousel__prev,
.slider__expert .carousel__next {
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
  background-color: #923ea1;
}
.slider__expert .carousel__pagination-button--active::after {
  opacity: 1;
}

@media (min-width: 768px) {
  .slider__expert .carousel__slide {
    padding-left: 85px;
    padding-right: 85px;
  }
}
@media (min-width: 1024px) {
  .slider__expert .carousel__slide {
    padding-left: 12px;
    padding-right: 12px;
  }
  .slider__expert .carousel__item {
    min-height: 750px;
  }
  .slider__expert .carousel__item {
    flex-direction: row;
  }
  .slider__expert .carousel__prev,
  .slider__expert .carousel__next {
    color: #f8f4f3;
    background-color: #923ea1;
  }
  .slider__expert .carousel__pagination-button::after {
    background-color: #f8f4f3;
  }
}
@media (min-width: 1280px) {
  .slider__expert .carousel__item {
    min-height: 825px;
  }
}
</style>
