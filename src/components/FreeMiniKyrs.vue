<script setup>
import ButtonMain from "@/components/ButtonMain.vue";
import Heading from "@/components/Heading.vue"; // Убедитесь, что пути верны

defineProps({
  title: {
    type: String,
    default: "Бесплатный мини-курс",
  },
  subtitle: {
    type: String,
    default: "Чтобы понять подходит ли вам курс, вы можете пройти тест-драйв",
  },
  imageSrc: {
    type: String,
    default: "/media/Yoga/free-kyrs.jpg",
  },
  vkLink: {
    type: String,
    default: "https://vk.com/thapp?mid=-181150794",
  },
  tgLink: {
    type: String,
    default: "https://thm.page/p/66bf9b59bafbff762d5b103c",
  },
  // Список уроков
  lessons: {
    type: Array,
    default: () => [
      { id: 1, text: "Анатомия человека", icon: "free-kyrs-icon-1" },
      { id: 2, text: "Фитнес-диагностика", icon: "free-kyrs-icon-2" },
      { id: 3, text: "Фитнес-йога", icon: "free-kyrs-icon-3" },
      { id: 4, text: "Система Пилатес", icon: "free-kyrs-icon-4" },
      { id: 5, text: "Cтретчинг", icon: "free-kyrs-icon-5" },
    ],
  },
});
</script>

<template>
  <Heading class="heading mb-4 sm:mb-14 text-center lg:text-start">
    {{ title }}
  </Heading>

  <div class="w-full flex items-start">
    <div
      class="w-full lg:w-7/12 xl:w-1/2 flex flex-col item-center lg:items-start"
    >
      <h4
        class="m-auto lg:m-0 md:w-[400px] lg:w-full text-purple text-center lg:text-start"
        v-html="subtitle"
      ></h4>

      <div
        class="mx-[5px] sm:mx-0 mt-8 flex flex-col lg:flex-row items-start sm:items-center lg:items-start"
      >
        <div class="w-full sm:w-1/2 flex flex-col items-start gap-3 sm:gap-6">
          <article
            v-for="lesson in lessons"
            :key="lesson.id"
            class="flex items-center gap-2"
          >
            <svg class="w-5 sm:w-6 h-6 flex-shrink-0">
              <use :xlink:href="`/icons-sprite.svg#${lesson.icon}`"></use>
            </svg>
            <p>{{ lesson.text }}</p>
          </article>
        </div>

        <div
          class="mt-6 lg:mt-0 w-full sm:w-1/2 lg:w-[45%] flex flex-col gap-4 sm:gap-6"
        >
          <slot name="description">
            <p class="text-sm sm:text-[16px]">
              Мини-курс содержит 6 уроков и тестовые задания после каждого урока
            </p>
            <p class="text-sm sm:text-[16px]">
              Уроки вы изучаете последовательно, начиная с теоретических
              дисциплин, после каждого урока вы проходите мини-тест для
              закрепления знаний.
            </p>
            <p class="text-sm sm:text-[16px]">
              Мини-курс можно пройти на платформе ВКонтакте или Телеграм.
            </p>
          </slot>
        </div>
      </div>

      <div class="mx-auto lg:mx-0 mt-8 lg:mt-[121px] flex gap-4 sm:gap-6">
        <a :href="vkLink" target="_blank">
          <ButtonMain class="flex items-center gap-2">
            <svg class="w-5 h-8 sm:w-10">
              <use xlink:href="/icons-sprite.svg#vk-white"></use>
            </svg>
            <span>Учиться в вк</span>
          </ButtonMain>
        </a>
        <a :href="tgLink" target="_blank">
          <ButtonMain class="flex items-center gap-2">
            <svg class="w-5 h-8 sm:w-10">
              <use xlink:href="/icons-sprite.svg#telegram-white"></use>
            </svg>
            <span>Учиться в ТГ</span>
          </ButtonMain>
        </a>
      </div>
    </div>

    <img
      :src="imageSrc"
      :alt="title"
      class="hidden lg:block w-5/12 xl:w-5/12 ml-6 xl:ml-24 rounded-[25px]"
    />
  </div>
</template>
