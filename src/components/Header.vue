<script setup>
import { ref } from 'vue';
import ButtonMain from '@/components/ButtonMain.vue';
import { linksMenu } from '@/assets/data';

const links = ref(linksMenu);

const isOpen = ref(false);

function menuOpen() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <header class="w-full bg-purple z-50">
    <div class="wrapper">
      <div class="flex justify-between items-center">
        <RouterLink
          to="/"
          class="w-[250px] my-2 sm:my-4 flex justify-between items-center gap-2 opacity-100 hover:opacity-90 transition-hover"
        >
          <img
            src="/media/logo.png"
            alt="Логотип"
            class="w-12 sm:w-16 sm:h-16"
          />
          <div class="w-full sm:p-[6px] text-white">
            <h6
              class="mb-1 font-unbounded font-medium text-[14px] sm:text-[16px] leading-none"
            >
              ЭКСПЕРТ
            </h6>
            <p
              class="font-roboto font-normal text-[12px] sm:text-[14px] leading-none"
            >
              Центр дополнительного образования
            </p>
          </div>
        </RouterLink>

        <nav
          class="hidden lg:flex justify-between text-4 text-white font-roboto font-light gap-8 xl:gap-10 2xl:gap-12"
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

        <div @click="menuOpen" class="flex md:hidden hamburger-lines">
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

        <RouterLink to="#" class="hidden lg:block">
          <ButtonMain
            class="px-4 py-2 bg-white text-[16px] text-black hover:text-white"
          >
            Записаться
          </ButtonMain>
        </RouterLink>
      </div>
    </div>
  </header>
  <div
    class="menu-items"
    :class="[isOpen ? `translate-x-0` : `-translate-x-full`]"
  >
    <RouterLink
      v-for="link in links"
      :key="link.id"
      :to="link.url"
      class="opacity-100 hover:opacity-70 transition-hover"
    >
      {{ link.text }}
    </RouterLink>
  </div>
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

.menu-items {
  padding-top: 120px;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
  height: 100vh;
  width: 100%;
  /* transform: translate(-150%); */
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: -40px;
  padding-left: 50px;
  transition: transform 0.5s ease-in-out;
  text-align: center;
  z-index: 200;
}
</style>
