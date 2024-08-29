<script setup>
import { ref } from 'vue';
import ButtonMain from '@/components/ButtonMain.vue';
import { linksMenu } from '@/assets/data';
import SocialMedia from './SocialMedia.vue';
import Contacts from './Contacts.vue';

const links = ref(linksMenu);

const isOpen = ref(false);

function menuOpen() {
  isOpen.value = !isOpen.value;

  const b = document.querySelector('body');

  if (isOpen.value === true) {
    b.classList.add('overflow-hidden');
    b.classList.remove('overflow-auto');
  } else {
    b.classList.add('overflow-auto');
    b.classList.remove('overflow-hidden');
  }
}
</script>

<template>
  <header class="w-full bg-purple z-50 overflow-hidden">
    <div class="wrapper">
      <div class="flex justify-between items-center">
        <RouterLink
          to="/"
          class="w-[220px] xl:w-[250px] my-2 sm:my-4 flex justify-between items-center gap-2 opacity-100 hover:opacity-90 transition-hover"
        >
          <img
            src="/media/logo.png"
            alt="Логотип"
            class="w-12 sm:w-14 xl:w-16 sm:h-14 xl:h-16"
          />
          <div class="w-full sm:p-[6px] text-white">
            <h6
              class="mb-1 font-unbounded font-medium text-[14px] xl:text-[16px] leading-none"
            >
              ЭКСПЕРТ
            </h6>
            <p
              class="font-roboto font-normal text-[12px] xl:text-[14px] leading-none"
            >
              Центр дополнительного образования
            </p>
          </div>
        </RouterLink>

        <!-- Меню ПК -->
        <nav
          class="hidden lg:flex justify-between text-4 text-white font-roboto font-light gap-6 xl:gap-[20px] 2xl:gap-[60px]"
        >
          <a
            v-for="link in links"
            :key="link.id"
            :href="link.url"
            class="lg:text-[16px] opacity-100 hover:opacity-70 transition-hover"
          >
            {{ link.text }}
          </a>
        </nav>

        <a href="tel:89615858995" class="hidden lg:flex gap-2"
          ><img
            src="/media/phone-header.svg"
            alt="Иконка"
            class="w-5 h-5 hidden xl:block"
          />
          <h6 class="text-white text-[14px] lg:text-[16px]">
            +7(961) 585-89-95
          </h6></a
        >

        <!-- Бургер меню кнопка -->
        <div @click="menuOpen" class="flex lg:hidden hamburger-lines">
          <span
            class="line transition-transform"
            :class="[isOpen ? `rotate-45 translate-y-[9px]` : `origin-[0%_0%]`]"
          ></span>
          <span
            class="line transition-transform"
            :class="[isOpen ? `scale-y-0` : `origin-[0%_0%]`]"
          ></span>
          <span
            class="line transition-transform"
            :class="[
              isOpen ? `-rotate-45 -translate-y-[9px]` : `origin-[0%_100%]`,
            ]"
          ></span>
        </div>

        <a href="#zapisatca" class="hidden lg:block">
          <ButtonMain
            class="px-4 py-2 bg-white text-[14px] xl:text-[16px] text-black hover:text-white"
          >
            Записаться
          </ButtonMain>
        </a>
      </div>
    </div>

    <!-- Меню мобильное -->
    <div
      class="flex lg:hidden absolute w-full h-dvh bg-purple p-8 top-[63px] sm:top-[93px] flex-col gap-8 rounded-b-[15px] transition-hover z-30"
      :class="[isOpen ? `translate-x-0` : `-translate-x-full`]"
    >
      <a
        v-for="link in links"
        :key="link.id"
        :href="link.url"
        @click="menuOpen"
        class="text-[20px] text-white uppercase opacity-100 hover:opacity-70 transition-hover"
      >
        {{ link.text }}
      </a>

      <div class="mt-2 flex gap-9">
        <a
          href="#zapisatca"
          class="text-[20px] text-white uppercase underline hover:text-black"
          @click="menuOpen"
          >Связаться</a
        >

        <SocialMedia />
      </div>

      <Contacts class="text-white" />
    </div>
  </header>
</template>

<style>
.hamburger-lines {
  height: 20px;
  width: 32px;
  z-index: 200;
  flex-direction: column;
  justify-content: space-between;
}

.line {
  display: block;
  height: 2px;
  width: 100%;
  border-radius: 10px;
  background: #f8f4f3;
}
</style>
