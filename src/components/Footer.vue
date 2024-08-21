<script setup>
import { ref } from 'vue';
import { linksMenu } from '@/assets/data';
import YandexMap from './YandexMap.vue';
import SocialMedia from './SocialMedia.vue';
import Contacts from './Contacts.vue';

const links = ref(linksMenu);
</script>

<template>
  <footer class="bg-purple py-8 lg:py-14">
    <div class="wrapper">
      <div class="mx-auto lg:mx-0 w-[320px] lg:w-full">
        <div
          class="lg:w-full flex flex-col lg:flex-row gap-8 sm:gap-14 justify-between"
        >
          <nav
            class="flex flex-row flex-wrap lg:flex-nowrap lg:flex-col justify-center sm:justify-between text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] text-white font-roboto font-light gap-4"
          >
            <RouterLink
              v-for="link in links"
              :key="link.id"
              :to="link.url"
              class="opacity-100 hover:opacity-70 transition-hover"
            >
              {{ link.text }}
            </RouterLink>
            <p class="hidden lg:block mt-24 text-[16px]">
              © 2024 ЦДО ”ЭКСПЕРТ”
            </p>
          </nav>
          <div class="text-white">
            <h6 class="uppercase">Контакты</h6>

            <Contacts class="mt-6" />

            <SocialMedia class="mt-6 sm:mt-0" />

            <div class="mt-6 sm:mt-[18px] flex gap-5">
              <a href="#" target="_blank">
                <img
                  src="/media/yandex-rating.jpg"
                  alt="Вконтакте"
                  class="rounded-lg"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="/media/2gis-rating.jpg"
                  alt="Вконтакте"
                  class="rounded-lg"
                />
              </a>
            </div>
          </div>
          <div class="hidden lg:block w-[47%] rounded-[20px]">
            <YandexMap />
          </div>
        </div>
        <p class="block lg:hidden mt-6 sm:mt-12 text-[16px] text-white">
          © 2024 ЦДО ”ЭКСПЕРТ”
        </p>
      </div>
    </div>
  </footer>
</template>
