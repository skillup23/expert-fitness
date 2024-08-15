<script setup>
import { ref } from 'vue';
import ButtonMain from '@/components/ButtonMain.vue';
import { linksMenu } from '@/assets/data';

const links = ref(linksMenu);
</script>

<template>
  <header class="w-full bg-purple z-50">
    <div class="wrapper">
      <div class="flex justify-between items-center">
        <RouterLink
          to="/"
          class="w-[250px] my-4 flex justify-between items-center gap-2 opacity-100 hover:opacity-90 transition-hover"
        >
          <img src="/media/logo.png" alt="Логотип" class="w-16 h-16" />
          <div class="w-full p-[6px] text-white">
            <h6 class="mb-1 font-unbounded font-medium text-4 leading-none">
              ЭКСПЕРТ
            </h6>
            <p class="font-roboto font-normal text-[14px] leading-none">
              Центр дополнительного образования
            </p>
          </div>
        </RouterLink>

        <nav
          class="flex justify-between text-4 text-white font-roboto font-light gap-8 xl:gap-10 2xl:gap-12"
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

        <RouterLink to="#">
          <ButtonMain
            class="px-4 py-2 bg-white text-[16px] text-black hover:text-white"
          >
            Записаться
          </ButtonMain>
        </RouterLink>
      </div>
    </div>
  </header>
</template>
