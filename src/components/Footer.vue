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
            <a
              v-for="link in links"
              :key="link.id"
              :href="link.url"
              class="opacity-100 hover:opacity-70 transition-hover"
            >
              {{ link.text }}
            </a>
            <p class="hidden lg:block mt-24 text-[16px]">
              © 2024 ЦДО ”ЭКСПЕРТ”
            </p>
          </nav>
          <div class="text-white">
            <h6 class="uppercase">Контакты</h6>

            <Contacts class="mt-6" />

            <SocialMedia class="mt-6 sm:mt-0" />

            <div
              class="mt-6 sm:mt-[18px] flex gap-5 justify-between sm:justify-start"
            >
              <a
                href="https://yandex.ru/maps/org/ekspert/31606864366/?display-text=эксперт%20фитнес&filter=alternate_vertical%3ARequestWindow&ll=39.003759%2C45.078269&mode=search&sctx=ZAAAAAgBEAAaKAoSCWeasP1kfENAEY%2F%2FAkGAjEZAEhIJZvUOt0PDuj8RqKj6lc6Hpz8iBgABAgMEBSgKOABAI0gBYjtyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X3NlcnBfZm9ybXVsYT0wLjYwOmwzX2RjMzc4MzQ1X2V4cGI7cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl93b3JsZF9mb3JtdWxhPTAuNzpsM19kYzM3ODM0NV9leHBiO3JlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfbWFwc19mb3JtdWxhPTAuNjA6bDNfZGMzNzgzNDVfZXhwYilyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2RjMzc5ODQxX2V4cGI0cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNGJOcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9SdWJyaWNSZWFycmFuZ2VzL1JlYXJyYW5nZVJ1YnJpY0J5L0Rpc2FibGVHdWRpbmlSZWFycj0xagJydZ0BzcxMPaABAKgBAL0BXRSDG8IBBe7zqd916gEA8gEA%2BAEAggIb0Y3QutGB0L%2FQtdGA0YIg0YTQuNGC0L3QtdGBigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=39.003759%2C45.078269&sspn=0.104542%2C0.045974&text=эксперт%20фитнес&utm_campaign=desktop&utm_medium=search&utm_source=share&z=14"
                target="_blank"
                class="w-[124px]"
              >
                <img
                  src="/media/yandex-rating.jpg"
                  alt="Вконтакте"
                  class="rounded-lg"
                />
              </a>
              <a
                href="https://2gis.ru/krasnodar/search/фитнес%20эксперт/firm/70000001044079186/38.98272%2C45.067742"
                target="_blank"
                class="w-[124px]"
              >
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
        <p
          class="block lg:hidden mt-6 sm:mt-12 text-[14px] sm:text-[16px] text-white"
        >
          © 2024 ЦДО ”ЭКСПЕРТ”
        </p>
      </div>
    </div>
  </footer>
</template>
