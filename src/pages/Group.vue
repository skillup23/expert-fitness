<script setup>
import ButtonMain from '@/components/ButtonMain.vue';
</script>

<template>
  <main class="mt-[64px] xl:mt-[7%] 2xl:mt-[6%]">
    <section class="pt-8 sm:pt-10 mb-10 sm:mb-24 relative">
      <div class="wrapper">
        <div class="flex flex-col lg:flex-row justify-between">
          <div
            class="mt-0 lg:mt-14 flex flex-col items-start w-full lg:w-5/12 xl:w-2/3"
          >
            <h1
              class="heading text-xl leading-[1.5rem] sm:leading-[2.5rem] sm:text-[32px] xl:leading-[4rem] xl:text-[52px] text-black"
            >
              <span class="text-purple">курс тренера</span> групповых фитнес
              программ
            </h1>
            <p
              class="max-w-[255px] sm:max-w-[438px] mt-6 sm:text-xl xl:text-2xl leading-none font-roboto font-light"
            >
              Профессиональная подготовка тренеров с выдачей
              <span class="text-purple font-bold"
                >диплома государственного образца.</span
              >
            </p>
            <p
              class="max-w-[255px] sm:max-w-[438px] mt-6 sm:text-xl xl:text-2xl leading-none font-roboto font-light"
            >
              3 направления в одном курсе:
            </p>
            <ul>
              <li class="flex items-center">
                <svg class="w-6 h-6 text-[#923EA1]">
                  <use xlink:href="/icons-sprite.svg#romb"></use>
                </svg>
                Базовая аэробика
              </li>
            </ul>
            <a href="#minikyrs" class="hidden lg:block">
              <ButtonMain class="mt-6">Учиться бесплатно</ButtonMain>
            </a>
          </div>

          <img
            src="/media/Group/main-group1.png"
            alt="Фото Йога"
            class="mx-auto lg:mx-0 mt-4 sm:mt-10 lg:mt-0 lg:-ml-[4vw] xl:-ml-[12vw] w-10/12 lg:w-6/12 xl:w-6/12"
          />

          <div class="flex flex-col items-center lg:hidden">
            <a href="#minikyrs" class="w-full sm:w-9/12">
              <ButtonMain class="mt-6">Учиться бесплатно</ButtonMain>
            </a>

            <div
              class="w-11/12 sm:w-8/12 mx-auto flex justify-between mt-6 sm:mt-8 mb-0 sm:mb-10"
            >
              <div>
                <h6 class="font-light">Формат</h6>
                <h6 class="text-purple font-medium">Очно</h6>
                <h6 class="text-purple font-medium">Онлайн</h6>
              </div>
              <div>
                <h6 class="font-light">Старт</h6>
                <h6 class="text-purple font-medium">13 июня</h6>
                <h6 class="text-purple font-medium">1 апреля</h6>
              </div>
              <div>
                <h6 class="font-light">Длительность</h6>
                <h6 class="text-purple font-medium">3 месяца</h6>
                <h6 class="text-purple font-medium">3 месяца</h6>
              </div>
            </div>
          </div>

          <div
            class="mt-6 sm:mt-[35px] flex flex-row lg:flex-col items-end gap-4"
          >
            <div class="hidden lg:flex mb-[74px] flex-col gap-[12px]">
              <a href="https://vk.com/fitnesstrener123" target="_blank">
                <svg class="w-8 h-8 transition-hover hover:scale-110">
                  <use xlink:href="/icons-sprite.svg#vk"></use>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCcv3jQFkqR5G7hMGBEwxlXQ?view_as=subscriber"
                target="_blank"
              >
                <svg class="w-8 h-8 transition-hover hover:scale-110">
                  <use xlink:href="/icons-sprite.svg#youtube"></use>
                </svg>
              </a>
              <a href="https://t.me/fitnesstrener23" target="_blank">
                <svg class="w-8 h-8 transition-hover hover:scale-110">
                  <use xlink:href="/icons-sprite.svg#telegram"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="hidden mt-2 mb-10 lg:flex gap-14">
          <div>
            <h6 class="text-xl font-light">Формат</h6>
            <h6 class="mt-5 text-xl text-purple font-medium">ОЧНО</h6>
            <h6 class="mt-5 text-xl text-purple font-medium">ОНЛАЙН</h6>
          </div>
          <div>
            <h6 class="text-xl font-light">Дата начала курса</h6>
            <h6 class="mt-5 text-xl text-purple font-medium">
              13 июня 2026 г.
            </h6>
            <h6 class="mt-5 text-xl text-purple font-medium">
              1 апреля 2026 г.
            </h6>
          </div>
          <div>
            <h6 class="text-xl font-light">Длительность</h6>
            <h6 class="mt-5 text-xl text-purple font-medium">3 месяца</h6>
            <h6 class="mt-5 text-xl text-purple font-medium">3 месяца</h6>
          </div>
        </div>
      </div>
    </section>

    <!--     Курс идеально подойдет Мобильная      -->
    <section class="mt-8 sm:mt-10 mb-10 sm:mb-24 relative">
      <div class="wrapper">
        <Heading class="heading text-black mt-14 sm:mt-24 mb-8 sm:mb-14">
          Курс идеально подойдет
        </Heading>
        <div
          class="mt-8 sm:mt-14 flex flex-col sm:flex-row justify-center gap-6 sm:gap-20"
        >
          <img
            src="/media/Yoga/foto-top-3.jpg"
            alt="Начинающим Фото"
            class="mx-auto sm:mx-0 w-10/12 sm:w-5/12 rounded-2xl"
          />
          <img
            src="/media/Yoga/foto-top-4.jpg"
            alt="Тренерам Фото"
            class="mx-auto sm:mx-0 w-10/12 sm:w-5/12 rounded-2xl"
          />
        </div>
      </div>
    </section>
  </main>
</template>
