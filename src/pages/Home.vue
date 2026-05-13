<script setup>
import Heading from '@/components/Heading.vue';
import SliderExpert from '@/components/SliderExpert.vue';
import { ref } from 'vue';
// import SliderLessonYoga from "@/components/SliderLessonYoga.vue";
import { programmYoga } from '@/assets/data';
import AccordeonList from '@/components/AccordeonList.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import FormFeedback from '@/components/FormFeedback.vue';
import FreeMiniKyrs from '@/components/FreeMiniKyrs.vue';
import SliderAdvantages from '@/components/SliderAdvantages.vue';
import SliderLessonYogaMobile from '@/components/SliderLessonYogaMobile.vue';
import SliderReviews from '@/components/SliderReviews.vue';
import YandexMap from '@/components/YandexMap.vue';
import Preimushestva from '@/components/Preimushestva.vue';

const isKyrs = ref(true);
function toogleKyrs(elem) {
  isKyrs.value = elem;
}

const programms = ref(programmYoga);

function toggleAnswer(id) {
  programms.value = programms.value.map((programm) =>
    programm.isOpen && programm.id !== id
      ? { ...programm, isOpen: false }
      : programm,
  );
  programms.value = programms.value.map((programm) =>
    programm.id === id ? { ...programm, isOpen: !programm.isOpen } : programm,
  );
}
</script>

<template>
  <main class="mt-[64px] lg:mt-[7%] xl:mt-[6%]">
    <section
      class="pt-8 sm:pt-10 mb-10 sm:mb-24 relative bg-mandala bg-[left_35vw_top_-10px] sm:bg-[left_45vw_top_-70px] lg:bg-[left_72vw_top_55vh]"
    >
      <div class="wrapper">
        <div class="flex flex-col lg:flex-row justify-between">
          <div
            class="mt-0 lg:mt-14 flex flex-col items-start w-full lg:w-5/12 xl:max-w-[502px]"
          >
            <h1
              class="heading text-xl leading-[1.5rem] sm:leading-[2.5rem] sm:text-[32px] xl:leading-[4rem] xl:text-[52px] text-black"
            >
              <span class="text-purple">Курс</span> по фитнес-йоге пилатесу и
              стретчингу
            </h1>
            <p
              class="max-w-[255px] sm:max-w-[438px] mt-6 sm:text-xl xl:text-2xl leading-none font-roboto font-light"
            >
              Профессиональная подготовка тренеров с выдачей
              <span class="text-purple font-bold"
                >диплома государственного образца.</span
              >
              <br />
              Стань экспертом “Mind and Body” - 3&nbsp;направления
              в&nbsp;одном&nbsp;курсе.
            </p>
            <div class="hidden lg:flex flex-col mt-8">
              <a href="#zapisatca">
                <ButtonMain class="mt-6">Записаться</ButtonMain>
              </a>

              <a href="#minikyrs">
                <ButtonMain class="mt-6">Бесплатный мини-курс</ButtonMain>
              </a>
            </div>
          </div>

          <img
            src="/media/Yoga/main-foto1.png"
            alt="Фото Йога"
            class="mx-auto lg:mx-0 mt-4 sm:mt-10 lg:mt-0 lg:-ml-[4vw] xl:-ml-[12vw] w-10/12 lg:w-6/12 xl:w-6/12"
          />

          <div class="flex flex-col items-center lg:hidden">
            <div class="w-full flex flex-col gap-6">
              <a href="#zapisatca" class="w-full">
                <ButtonMain class="mt-6">Записаться</ButtonMain>
              </a>

              <a href="#minikyrs">
                <ButtonMain>Бесплатный мини-курс</ButtonMain>
              </a>
            </div>

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
                <h6 class="text-purple font-medium">13 июня</h6>
              </div>
              <div>
                <h6 class="font-light">Длительность</h6>
                <h6 class="text-purple font-medium">2 месяца</h6>
                <h6 class="text-purple font-medium">2 месяца</h6>
              </div>
            </div>
          </div>

          <div
            class="mt-6 sm:mt-[35px] flex flex-row lg:flex-col items-end gap-2 sm:gap-4"
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
              <a
                href="https://max.ru/u/f9LHodD0cOKRUCpJV3h_pJ_NOJxi4t7FpCoAI-Izm78JOWQv80xTgZ6AfZE"
                target="_blank"
              >
                <svg class="ml-1 w-7 h-7 transition-hover hover:scale-110">
                  <use xlink:href="/icons-sprite.svg#max"></use>
                </svg>
              </a>
            </div>

            <img
              src="/media/Yoga/foto-top-1.jpg"
              alt="Фото Йога"
              class="w-[32%] lg:w-full mb-4 rounded-2xl"
            />
            <img
              src="/media/Yoga/foto-top-5.jpg"
              alt="Фото Йога"
              class="w-[32%] lg:hidden mb-4 rounded-2xl"
            />
            <img
              src="/media/Yoga/foto-top-2.jpg"
              alt="Фото Йога"
              class="w-[32%] lg:w-full mb-4 rounded-2xl"
            />
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
              13 июня 2026 г.
            </h6>
          </div>
          <div>
            <h6 class="text-xl font-light">Длительность</h6>
            <h6 class="mt-5 text-xl text-purple font-medium">2 месяца</h6>
            <h6 class="mt-5 text-xl text-purple font-medium">2 месяца</h6>
          </div>
        </div>

        <!--     Курс идеально подойдет ПК версия      -->
        <div class="hidden lg:block">
          <Heading class="heading text-black mt-14 sm:mt-24 mb-8 sm:mb-14">
            Курс идеально подойдет
          </Heading>
          <div class="flex flex-col sm:flex-row justify-center gap-6 sm:gap-20">
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
      </div>
    </section>

    <!--     Курс идеально подойдет Мобильная      -->
    <section
      class="block lg:hidden mt-8 sm:mt-10 mb-10 sm:mb-24 relative bg-mandala bg-[right_50vw_top_10px] sm:bg-none"
    >
      <div class="wrapper">
        <Heading class="heading text-black mt-14 sm:mt-24 mb-8 sm:mb-14">
          Курс идеально подойдет
        </Heading>
        <div class="flex flex-col sm:flex-row justify-center gap-6 sm:gap-20">
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

    <!--     О курсе      -->
    <section id="kyrs" class="scroll-mt-16 py-6 sm:py-10 lg:py-14 bg-purple">
      <div class="wrapper">
        <div class="flex flex-col lg:flex-row gap-6">
          <div
            class="w-full lg:w-5/12 xl:w-1/2 flex flex-col justify-between text-white"
          >
            <Heading class="heading mb-4 sm:mb-8 text-start">О курсе</Heading>
            <p class="mb-6 sm:mb-[37px] leading-none sm:leading-7">
              Наш курс основан на таком направлении фитнеса как Mind and Body
              (психорегулирующие фитнес-программы), которое включет в себя
              фитнес-йогу, Систему Пилатес и стретчинг. Эти фитнес-направления
              положительно влияют как на развитие физических качеств, так и на
              психоэмоциональное состояние человека.
            </p>
            <img
              src="/media/Yoga/o-kyrse.jpg"
              alt="Асаны группа людей"
              loading="lazy"
              class="w-full rounded-[20px]"
            />
          </div>

          <div
            class="w-full lg:w-7/12 xl:w-1/2 px-0 py-6 sm:p-8 flex flex-col justify-between bg-purple lg:bg-white rounded-[20px]"
          >
            <div
              class="md:mb-8 flex flex-col gap-6 sm:gap-[40px] lg:gap-[1.3vw] text-white lg:text-black"
            >
              <article class="flex">
                <h6 class="w-1/2">Состав курса:</h6>
                <p class="w-1/2">320 академических часов. Теория и практика</p>
              </article>
              <article class="flex">
                <h6 class="w-1/2">Время обучения:</h6>
                <p class="w-1/2">2 месяца</p>
              </article>
              <article class="flex">
                <h6 class="w-1/2">Формат обучения:</h6>
                <p class="w-1/2">Онлайн или очно</p>
              </article>
              <article class="flex">
                <h6 class="w-1/2">Документ:</h6>
                <p class="w-1/2">
                  Диплом установленного государством образца с внесением в базу
                  ФИС ФРДО
                </p>
              </article>
              <article class="flex">
                <h6 class="w-1/2">Старт очного курса:</h6>
                <p class="w-1/2">13 июня 2026 г.</p>
              </article>
              <article class="flex">
                <h6 class="w-1/2">Стоимость очно:</h6>
                <p class="w-1/2">
                  <!-- <b>48 000 р.</b> до 20 февраля; <br />с 21 февраля - -->
                  <b>57 000 р.</b>
                </p>
              </article>
              <article class="flex">
                <h6 class="w-1/2">Старт онлайн курса:</h6>
                <p class="w-1/2">13 июня 2026 г.</p>
              </article>
              <article class="flex">
                <h6 class="w-1/2">Стоимость онлайн:</h6>
                <p class="w-1/2">
                  <!-- <b>39 000 р.</b> до 20 февраля; <br />с 20 февраля - -->
                  <b>49 900 р.</b>
                </p>
              </article>
            </div>

            <div
              class="mt-10 lg:mt-0 flex items-center justify-center lg:justify-end gap-6"
            >
              <a href="#programma">
                <ButtonMain
                  class="px-4 py-[14px] sm:px-[22px] sm:py-[14px] bg-purple lg:bg-white border-white lg:border-purple border-2 text-white lg:text-purple hover:border-black hover:text-white"
                  >Программа</ButtonMain
                >
              </a>
              <a href="#zapisatca">
                <ButtonMain
                  class="bg-white lg:bg-purple text-black lg:text-white"
                  >Записаться</ButtonMain
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--     Бесплатный мини-курс      -->
    <section
      id="minikyrs"
      class="py-10 lg:py-24 bg-mandala bg-[left_53vw_top_-30px] sm:bg-[left_60vw_top_-100px] lg:bg-[left_70vw_bottom_70vh] scroll-mt-16"
    >
      <div class="wrapper">
        <FreeMiniKyrs />
      </div>
    </section>

    <!--     Преимущества      -->
    <section id="onas" class="py-10 lg:pt-14 lg:pb-24 bg-purple scroll-mt-16">
      <div class="wrapper">
        <Preimushestva />
        <SliderAdvantages class="block lg:hidden" />
      </div>
    </section>

    <!--     Эксперты      -->
    <section
      class="-mt-[1px] lg:mt-0 pt-4 pb-10 sm:py-10 lg:pt-14 lg:pb-24 bg-purple"
    >
      <div class="wrapper">
        <Heading class="heading text-white mb-8 lg:mb-14"
          >Наши эксперты</Heading
        >
        <SliderExpert class="-mx-3" />
      </div>
    </section>

    <!--     Программа курса и Примеры уроков     -->
    <section
      id="programma"
      class="pt-10 sm:pt-24 bg-mandala bg-[left_25vw_top_750px] sm:bg-[right_36vw_top_-200px] lg:bg-[right_70vw_top_150px] scroll-mt-16"
    >
      <div class="wrapper">
        <!--     Программа курса      -->
        <Heading class="heading mb-8 sm:mb-14 lg:text-start"
          >Программа курса</Heading
        >
        <div class="lg:-mt-28 flex flex-col">
          <div
            class="w-full lg:w-[550px] 2xl:w-[664px] flex bg-pink self-end rounded-t-[20px]"
          >
            <div
              class="w-1/2 py-4 xl:py-[26px] flex items-center justify-center cursor-pointer rounded-t-[20px]"
              :class="[isKyrs ? `bg-pink` : `bg-purple`]"
              @click="toogleKyrs(false)"
            >
              <h4
                class="text-base sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-[36px]"
                :class="[isKyrs ? `text-black` : `text-white`]"
              >
                ОНЛАЙН
              </h4>
            </div>
            <div
              class="w-1/2 py-4 xl:py-[26px] flex items-center justify-center cursor-pointer rounded-t-[20px]"
              :class="[isKyrs ? `bg-purple` : `bg-pink`]"
              @click="toogleKyrs(true)"
            >
              <h4
                class="text-base sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-[36px]"
                :class="[isKyrs ? `text-white` : `text-black`]"
              >
                ОЧНО
              </h4>
            </div>
          </div>

          <div
            v-if="isKyrs"
            class="-mt-[1px] w-full min-h-96 p-6 sm:p-14 grid lg:grid-cols-2 gap-x-4 sm:gap-x-6 bg-purple rounded-b-[20px] lg:rounded-tl-[20px]"
          >
            <AccordeonList
              :programms="programms.slice(0, 5)"
              @toggleAnswer="toggleAnswer"
            />
            <AccordeonList
              :programms="programms.slice(5, 10)"
              @toggleAnswer="toggleAnswer"
              class="mt-5 lg:mt-0"
            />
          </div>

          <div
            v-else
            class="-mt-[1px] w-full min-h-96 p-6 sm:p-14 grid lg:grid-cols-2 gap-x-4 sm:gap-x-6 bg-purple rounded-b-[20px] lg:rounded-tl-[20px]"
          >
            <AccordeonList
              :programms="programms.slice(0, 4)"
              @toggleAnswer="toggleAnswer"
            />
            <AccordeonList
              :programms="programms.slice(5, 9)"
              @toggleAnswer="toggleAnswer"
              class="mt-6 lg:mt-0"
            />
          </div>
        </div>

        <!--     Примеры уроков и связок      -->
        <div id="yroki" class="mt-10 sm:mt-24 scroll-mt-4">
          <Heading class="heading mb-8 sm:mb-14"
            >Примеры уроков и связок</Heading
          >
          <!-- <SliderLessonYoga class="-mx-6 hidden sm:block" /> -->
          <SliderLessonYogaMobile class="-mx-6" />
        </div>
      </div>
    </section>

    <!--     Отзывы      -->
    <section
      id="otzivi"
      class="py-10 lg:py-24 bg-150% sm:bg-48% lg:bg-[url('/media/Yoga/bg-mandala.png')] lg:bg-no-repeat lg:bg-[left_58vw_top_-41px] scroll-mt-16"
    >
      <div class="wrapper px-0 lg:px-6 xl:px-14 2xl:px-20">
        <div class="p-8 lg:p-14 bg-purple lg:rounded-[20px]">
          <Heading
            class="heading mb-8 xl:mb-14 ml-[22px] sm:ml-[0px] text-white text-start"
            >Отзывы</Heading
          >
          <SliderReviews />
        </div>

        <!--     Записаться на обучение      -->
        <div id="zapisatca" class="px-[23px] sm:px-28 lg:px-0 scroll-mt-4">
          <Heading class="heading mt-10 lg:mt-24 mb-4 sm:mb-14 lg:text-start"
            >Записаться на обучение</Heading
          >
          <div>
            <h6
              class="text-purple uppercase text-center lg:text-start font-bold sm:font-medium"
            >
              Присоединяйтесь к нашей команде профессионалов!
            </h6>
            <div class="mt-6 flex gap-14 justify-center lg:justify-start">
              <div class="lg:w-1/2 sm:mt-6 px-[22px]">
                <FormFeedback />
              </div>

              <div class="hidden lg:block w-1/2">
                <img
                  src="/media/Yoga/form-feedback.jpg"
                  alt="Выпускники школы Эксперт"
                  loading="lazy"
                  class="rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="block lg:hidden mx-auto mt-10 px-6 sm:px-14 w-full h-[210px] sm:h-[500px] rounded-[20px]"
        >
          <YandexMap />
        </div>
      </div>
    </section>
  </main>
</template>
