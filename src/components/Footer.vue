<script setup>
import { ref } from 'vue';
import { linksMenu } from '@/assets/data';
import YandexMap from './YandexMap.vue';

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
            <div class="mt-6">
              <a
                href="https://yandex.ru/maps/-/CDgRVDO1"
                target="_blank"
                class="mb-4 flex item-center gap-4 opacity-100 hover:opacity-70 transition-hover"
              >
                <img src="/media/marker.svg" alt="Адрес" class="w-5 h-5" />
                <p class="text-[14px] sm:text-[16px]">
                  г. Краснодар, ул.Шоссе Нефтяников, 28
                </p>
              </a>
              <a
                href="tel:89615858995"
                target="_blank"
                class="mb-4 flex item-center gap-4 opacity-100 hover:opacity-70 transition-hover"
              >
                <img src="/media/phone.svg" alt="Телефон" class="w-5 h-5" />
                <p class="text-[14px] sm:text-[16px]">+7(961) 585-89-95</p>
              </a>
              <a
                href="mailto:info@fitnesstrener23.ru"
                target="_blank"
                class="mb-4 flex item-center gap-4 opacity-100 hover:opacity-70 transition-hover"
              >
                <img src="/media/mail.svg" alt="Майл" class="w-5 h-5" />
                <p class="text-[14px] sm:text-[16px]">
                  info@fitnesstrener23.ru
                </p>
              </a>
            </div>

            <div class="mt-6 sm:mt-0 flex gap-5">
              <a href="#" target="_blank">
                <img
                  src="/media/vk-white.svg"
                  alt="Вконтакте"
                  class="w-8 h-8 opacity-100 hover:opacity-70 transition-hover"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="/media/youtube-white.svg"
                  alt="Вконтакте"
                  class="w-8 h-8 opacity-100 hover:opacity-70 transition-hover"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="/media/telegram-white.svg"
                  alt="Вконтакте"
                  class="w-8 h-8 opacity-100 hover:opacity-70 transition-hover"
                />
              </a>
            </div>

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
