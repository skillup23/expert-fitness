<script setup>
import { ref } from 'vue';
import { linksMenu } from '@/assets/data';

const links = ref(linksMenu);
</script>

<template>
  <footer class="bg-purple py-14">
    <div class="wrapper">
      <div class="flex">
        <div class="flex gap-14 justify-between">
          <nav
            class="flex flex-col justify-between text-4 text-white font-roboto font-light gap-4"
          >
            <RouterLink
              v-for="link in links"
              :key="link.id"
              :to="link.url"
              class="opacity-100 hover:opacity-70 transition-hover"
            >
              {{ link.text }}
            </RouterLink>
          </nav>
          <div class="text-white">
            <h6 class="uppercase">Контакты</h6>
            <div class="mt-6">
              <a
                href="https://yandex.ru/maps/-/CDgRVDO1"
                target="_blank"
                class="mb-4 flex item-center gap-4"
              >
                <img src="/media/marker.svg" alt="Адрес" class="w-5 h-5" />
                <p>г. Краснодар, ул.Шоссе Нефтяников, 28</p>
              </a>
              <a href="tel:89615858995" class="mb-4 flex item-center gap-4">
                <img src="/media/phone.svg" alt="Телефон" class="w-5 h-5" />
                <p>+7(961) 585-89-95</p>
              </a>
              <a
                href="mailto:info@fitnesstrener23.ru"
                class="mb-4 flex item-center gap-4"
              >
                <img src="/media/mail.svg" alt="Майл" class="w-5 h-5" />
                <p>info@fitnesstrener23.ru</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
