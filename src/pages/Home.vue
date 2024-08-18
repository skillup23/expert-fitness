<script setup>
import { ref } from "vue";
import Heading from "@/components/Heading.vue";
import SliderExpert from "@/components/SliderExpert.vue";
import SliderLessonYoga from "@/components/SliderLessonYoga.vue";
import SliderReviews from "@/components/SliderReviews.vue";
import ButtonMain from "@/components/ButtonMain.vue";
import AccordeonList from "@/components/AccordeonList.vue";
import FormFeedback from "@/components/FormFeedback.vue";

import { programmYoga } from "@/assets/data";
import SliderAdvantages from "@/components/SliderAdvantages.vue";
import YandexMap from "@/components/YandexMap.vue";

const isKyrs = ref(true);
function toogleKyrs(elem) {
  isKyrs.value = elem;
}

const programms = ref(programmYoga);

function toggleAnswer(id) {
  programms.value = programms.value.map((programm) =>
    programm.isOpen && programm.id !== id
      ? { ...programm, isOpen: false }
      : programm
  );
  programms.value = programms.value.map((programm) =>
    programm.id === id ? { ...programm, isOpen: !programm.isOpen } : programm
  );
}
</script>

<template>
  <main>
    <section
      class="mt-8 sm:mt-10 mb-10 sm:mb-24 relative bg-[url('/media/Yoga/bg-mandala.png')] bg-no-repeat bg-150% sm:bd-auto bg-[left_35vw_top_-10px] sm:bg-[left_45vw_top_-70px] lg:bg-[left_62vw_bottom_2vh]"
    >
      <div class="wrapper">
        <div class="flex flex-col lg:flex-row justify-between">
          <div
            class="mt-0 lg:mt-14 flex flex-col items-start w-full lg:w-5/12 xl:max-w-[502px]"
          >
            <h1
              class="heading text-xl leading-[1.5rem] sm:leading-[2.5rem] sm:text-[32px] xl:leading-[4rem] xl:text-[52px] text-black"
            >
              <span class="text-purple">Тренер</span> по фитнес-йоге пилатесу и
              стретчингу
            </h1>
            <p
              class="max-w-[255px] sm:max-w-[438px] mt-6 sm:text-xl xl:text-2xl leading-none font-roboto font-light"
            >
              Образовательный курс с выдачей
              <span class="text-purple font-bold">диплома гос.обазца.</span>
              <br />
              Стань экспертом “Mind and Body” - 3&nbsp;направления
              в&nbsp;одном&nbsp;курсе.
            </p>
            <RouterLink to="#" class="hidden lg:block">
              <ButtonMain class="mt-6">Записаться</ButtonMain>
            </RouterLink>
          </div>

          <img
            src="/media/Yoga/main-foto.png"
            alt="Фото Йога"
            class="mx-auto lg:mx-0 mt-4 sm:mt-10 lg:mt-0 lg:-ml-[4vw] xl:-ml-[12vw] w-10/12 lg:w-6/12 xl:w-6/12"
          />

          <div class="flex flex-col items-center lg:hidden">
            <RouterLink to="#" class="w-full sm:w-9/12">
              <ButtonMain class="mt-6">Записаться</ButtonMain>
            </RouterLink>

            <div class="mx-auto flex mt-6 sm:mt-8 mb-0 sm:mb-10 gap-14">
              <div>
                <h6 class="font-light">Старт</h6>
                <h6 class="text-purple font-medium">19 октября</h6>
              </div>
              <div>
                <h6 class="font-light">Формат</h6>
                <h6 class="text-purple font-medium">Онлайн/Очно</h6>
              </div>
              <div>
                <h6 class="font-light">Длительность</h6>
                <h6 class="text-purple font-medium">3 месяца</h6>
              </div>
            </div>
          </div>

          <div
            class="mt-6 sm:mt-[35px] flex flex-row lg:flex-col items-end gap-4"
          >
            <div class="hidden lg:flex mb-[74px] flex-col gap-[12px]">
              <RouterLink to="#">
                <img src="/media/vk.svg" alt="ВК" class="w-[27px] h-[27px]" />
              </RouterLink>
              <RouterLink to="#">
                <img
                  src="/media/youtube.svg"
                  alt="ВК"
                  class="w-[27px] h-[27px]"
                />
              </RouterLink>
              <RouterLink to="#">
                <img
                  src="/media/telegram.svg"
                  alt="Телеграм"
                  class="w-[27px] h-[27px]"
                />
              </RouterLink>
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
              class="w-[32%] lg:w-full rounded-2xl"
            />
          </div>
        </div>

        <div class="hidden mt-2 mb-10 lg:flex gap-14">
          <div>
            <h6 class="text-xl font-light">Старт</h6>
            <h6 class="text-xl text-purple font-medium">19 октября</h6>
          </div>
          <div>
            <h6 class="text-xl font-light">Формат</h6>
            <h6 class="text-xl text-purple font-medium">Онлайн/Очно</h6>
          </div>
          <div>
            <h6 class="text-xl font-light">Длительность</h6>
            <h6 class="text-xl text-purple font-medium">3 месяца</h6>
          </div>
        </div>

        <!--     Курс идеально подойдет      -->

        <Heading class="heading text-black mt-14 sm:mt-24 mb-8 sm:mb-14">
          Курс идеально подойдет
        </Heading>
        <div class="flex flex-col sm:flex-row justify-center gap-6 sm:gap-20">
          <img
            src="/media/Yoga/foto-top-3.jpg"
            alt="Начинающим Фото"
            class="w-full sm:w-5/12 rounded-2xl"
          />
          <img
            src="/media/Yoga/foto-top-4.jpg"
            alt="Тренерам Фото"
            class="w-full sm:w-5/12 rounded-2xl"
          />
        </div>
      </div>
    </section>

    <!--     О курсе      -->
    <section class="py-6 sm:py-10 lg:py-14 bg-purple">
      <div class="wrapper">
        <div class="flex flex-col lg:flex-row gap-6">
          <div class="w-full lg:w-5/12 xl:w-1/2 text-white">
            <Heading class="heading mb-4 sm:mb-8 text-start">О курсе</Heading>
            <p class="mb-6 sm:mb-[37px] leading-none sm:leading-5">
              Наш курс основан на таком направлении фитнеса как Mind and Body
              (психорегулирующие фитнес-программы), которое включет в себя
              фитнес-йогу, Систему Пилатес и стретчинг. Эти фитнес-направления
              положительно влияют как на развитие физических качеств, так и на
              психоэмоциональное состояние человека.
            </p>
            <img
              src="/media/Yoga/o-kyrse.jpg"
              alt="Асаны группа людей"
              class="w-full rounded-[20px]"
            />
          </div>

          <div
            class="w-full lg:w-7/12 xl:w-1/2 px-0 py-6 sm:p-8 flex flex-col justify-between bg-purple lg:bg-white rounded-[20px]"
          >
            <div
              class="flex flex-col gap-6 sm:gap-[40px] lg:gap-[3vw] text-white lg:text-black"
            >
              <article class="flex">
                <h6 class="w-1/2">Состав курса:</h6>
                <p class="w-1/2">
                  320 академических часов. Теоретические дисциплины и практика
                </p>
              </article>
              <article class="flex">
                <h6 class="w-1/2">Продолжительность <br />обучения:</h6>
                <p class="w-1/2">3 месяца</p>
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
                <h6 class="w-1/2">Стоимость онлайн/<br />очно:</h6>
                <p class="w-1/2">36 000 р./43 000 р.</p>
              </article>
            </div>

            <div
              class="mt-10 lg:mt-0 flex items-center justify-start lg:justify-end gap-6"
            >
              <RouterLink to="#">
                <ButtonMain
                  class="px-[22px] py-[14px] bg-purple lg:bg-white border-white lg:border-purple border-2 text-white lg:text-purple hover:bg-purple hover:text-white"
                  >Программа</ButtonMain
                >
              </RouterLink>
              <RouterLink to="#">
                <ButtonMain
                  class="bg-white lg:bg-purple text-black lg:text-white"
                  >Записаться</ButtonMain
                >
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--     Бесплатный мини-курс      -->
    <section
      class="py-10 lg:py-24 bg-[url('/media/Yoga/bg-mandala.png')] bg-no-repeat bg-[left_60vw_top_-100px] lg:bg-[left_58vw_bottom_43vh]"
    >
      <div class="wrapper">
        <Heading class="heading mb-14 text-center lg:text-start"
          >Бесплатный мини-курс</Heading
        >
        <div class="w-full flex items-start">
          <div
            class="w-full lg:w-7/12 xl:w-1/2 flex flex-col item-center lg:items-start"
          >
            <h4
              class="m-auto lg:m-0 md:w-[400px] lg:w-full text-purple text-center lg:text-start"
            >
              Чтобы понять подходит ли вам курс, вы&nbsp;можете&nbsp;пройти
              тест-драйв
            </h4>
            <div
              class="mt-8 flex flex-col lg:flex-row items-center lg:items-start"
            >
              <div class="w-1/2 flex flex-col items-start gap-6">
                <article class="flex items-center gap-2">
                  <img
                    src="/media/Yoga/free-kyrs-icon-1.svg"
                    alt="Иконка"
                    class="w-6 h-6"
                  />
                  <p>Анатомия человека</p>
                </article>
                <article class="flex items-center gap-2">
                  <img
                    src="/media/Yoga/free-kyrs-icon-2.svg"
                    alt="Иконка"
                    class="w-6 h-6"
                  />
                  <p>Фитнес-диагностика</p>
                </article>
                <article class="flex items-center gap-2">
                  <img
                    src="/media/Yoga/free-kyrs-icon-3.svg"
                    alt="Иконка"
                    class="w-6 h-6"
                  />
                  <p>Фитнес-йога</p>
                </article>
                <article class="flex items-center gap-2">
                  <img
                    src="/media/Yoga/free-kyrs-icon-4.svg"
                    alt="Иконка"
                    class="w-6 h-6"
                  />
                  <p>Система Пилатес</p>
                </article>
                <article class="flex items-center gap-2">
                  <img
                    src="/media/Yoga/free-kyrs-icon-5.svg"
                    alt="Иконка"
                    class="w-6 h-6"
                  />
                  <p>Cтретчинг</p>
                </article>
              </div>

              <div class="mt-6 lg:mt-0 w-1/2 lg:w-[45%] flex flex-col gap-6">
                <p class="text-[16px]">
                  Мини-курс содержит 6 уроков и тестовые задания после каждого
                  урока
                </p>
                <p class="text-[16px]">
                  Уроки вы изучаете последовательно, начиная с теоретических
                  дисциплин, после каждого урока вы проходите мини-тест для
                  закрепления знаний.
                </p>
                <p class="text-[16px]">
                  Мини-курс можно пройти на платформе ВКонтакте или Телеграм.
                </p>
              </div>
            </div>

            <div
              class="mx-auto lg:mx-0 mt-8 lg:mt-[121px] flex xl:flex-col gap-6"
            >
              <RouterLink to="#">
                <ButtonMain class="flex items-center gap-2">
                  <img src="/media/vk-white.svg" alt="ВК ссылка" />
                  <span>Учиться в вк</span>
                </ButtonMain>
              </RouterLink>
              <RouterLink to="#">
                <ButtonMain class="flex items-center gap-2">
                  <img src="/media/telegram-white.svg" alt="Телеграм ссылка" />
                  <span>Учиться в ТГ</span>
                </ButtonMain>
              </RouterLink>
            </div>
          </div>

          <img
            src="/media/Yoga/free-kyrs.jpg"
            alt="Асана Йога"
            class="hidden lg:block w-5/12 xl:w-1/2 ml-6 xl:ml-24 rounded-[20px]"
          />
        </div>
      </div>
    </section>

    <!--     Преимущества      -->
    <section class="py-10 lg:pt-14 lg:pb-24 bg-purple">
      <div class="wrapper">
        <Heading class="heading text-white mb-8 lg:mb-14"
          >Наши преимущества</Heading
        >
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <img
            src="/media/Yoga/preim1.jpg"
            alt="Преимущества"
            class="w-full h-full row-span-2 col-span-2 rounded-[20px]"
          />

          <div
            class="p-6 hidden lg:flex items-start rounded-[20px] bg-white gap-4"
          >
            <img
              src="/media/Yoga/preim2.jpg"
              alt="Преимущества"
              class="w-1/2 rounded-[20px]"
            />
            <p class="w-1/2 text-[14px] 2xl:text-[16px]">
              Наш центр имеет лицензию на образователь-ную деятельность, после
              обучения вы можете получить налоговый вычет
            </p>
          </div>
          <div
            class="p-6 hidden lg:flex items-start rounded-[20px] bg-white gap-4"
          >
            <img
              src="/media/Yoga/preim3.jpg"
              alt="Преимущества"
              class="w-1/2 rounded-[20px]"
            />
            <p class="w-1/2 text-[14px] 2xl:text-[16px]">
              Вы получаете официальный документ, и компетенцию, которая позволит
              эффективно работать фитнес-тренером
            </p>
          </div>
          <div
            class="p-6 hidden lg:flex items-start rounded-[20px] bg-white gap-4"
          >
            <img
              src="/media/Yoga/preim4.jpg"
              alt="Преимущества"
              class="w-1/2 rounded-[20px]"
            />
            <p class="w-1/2 text-[14px] 2xl:text-[16px]">
              Учитесь только у экспертов со стажем более 20 лет в сфере фитнеса
              и образования
            </p>
          </div>
          <div
            class="p-6 hidden lg:flex items-start rounded-[20px] bg-white gap-4"
          >
            <img
              src="/media/Yoga/preim5.jpg"
              alt="Преимущества"
              class="w-1/2 rounded-[20px]"
            />
            <p class="w-1/2 text-[14px] 2xl:text-[16px]">
              Учитесь сейчас - платите потом!Доступна рассрочка на 3, 6 или 10
              месяцев
            </p>
          </div>
        </div>

        <SliderAdvantages class="block lg:hidden" />
      </div>
    </section>

    <!--     Эксперты      -->
    <section class="-mt-[1px] lg:mt-0 py-10 lg:pt-14 lg:pb-24 bg-purple">
      <div class="wrapper">
        <Heading class="heading text-white mb-8 lg:mb-14"
          >Наши эксперты</Heading
        >
        <SliderExpert class="-mx-3" />
      </div>
    </section>

    <!--     Программа курса и Примеры уроков     -->
    <section
      class="pt-24 bg-[url('/media/Yoga/bg-mandala.png')] bg-no-repeat bg-[right_36vw_top_-200px] lg:bg-[right_57vw_top_340px]"
    >
      <div class="wrapper">
        <!--     Программа курса      -->
        <Heading class="heading mb-14 lg:text-start">Программа курса</Heading>
        <div class="lg:-mt-28 flex flex-col">
          <div
            class="w-full lg:w-[550px] 2xl:w-[664px] flex bg-pink self-end rounded-t-[20px]"
          >
            <div
              class="w-1/2 py-5 xl:py-[26px] flex items-center justify-center cursor-pointer rounded-t-[20px]"
              :class="[isKyrs ? `bg-pink` : `bg-purple`]"
              @click="toogleKyrs(false)"
            >
              <h4
                class="text-2xl xl:text-3xl 2xl:text-[36px]"
                :class="[isKyrs ? `text-black` : `text-white`]"
              >
                ОНЛАЙН
              </h4>
            </div>
            <div
              class="w-1/2 py-5 xl:py-[26px] flex items-center justify-center cursor-pointer rounded-t-[20px]"
              :class="[isKyrs ? `bg-purple` : `bg-pink`]"
              @click="toogleKyrs(true)"
            >
              <h4
                class="text-2xl xl:text-3xl 2xl:text-[36px]"
                :class="[isKyrs ? `text-white` : `text-black`]"
              >
                ОЧНО
              </h4>
            </div>
          </div>

          <div
            v-if="isKyrs"
            class="w-full min-h-96 p-14 grid lg:grid-cols-2 gap-x-6 bg-purple rounded-b-[20px] lg:rounded-tl-[20px]"
          >
            <AccordeonList
              :programms="programms.slice(0, 5)"
              @toggleAnswer="toggleAnswer"
            />
            <AccordeonList
              :programms="programms.slice(5, 10)"
              @toggleAnswer="toggleAnswer"
              class="mt-6 lg:mt-0"
            />
          </div>

          <div
            v-else
            class="w-full min-h-96 p-14 grid lg:grid-cols-2 gap-x-6 bg-purple rounded-b-[20px] rounded-tl-[20px]"
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
        <div class="mt-24">
          <Heading class="heading mb-14">Примеры уроков и связок</Heading>
          <SliderLessonYoga class="-mx-6" />
        </div>
      </div>
    </section>

    <!--     Отзывы      -->
    <section
      class="py-10 lg:py-24 lg:bg-[url('/media/Yoga/bg-mandala.png')] lg:bg-no-repeat lg:bg-[left_58vw_top_-41px]"
    >
      <div class="wrapper px-0 lg:px-6">
        <div class="p-8 lg:p-14 bg-purple lg:rounded-[20px]">
          <Heading class="heading mb-6 xl:mb-14 ml-[71px] text-white text-start"
            >Отзывы</Heading
          >
          <SliderReviews />
        </div>

        <!--     Записаться на обучение      -->
        <div class="sm:px-28 lg:px-0">
          <Heading class="heading mt-10 lg:mt-24 mb-14 lg:text-start"
            >Записаться на обучение</Heading
          >
          <div>
            <h6 class="text-purple uppercase text-center lg:text-start">
              Присоединяйтесь к нашей команде профессионалов!
            </h6>
            <div class="mt-6 flex gap-14 justify-center lg:justify-start">
              <div class="lg:w-1/2 mt-6 px-[22px]">
                <FormFeedback />
              </div>

              <div class="hidden lg:block w-1/2">
                <img
                  src="/media/Yoga/form-feedback.jpg"
                  alt="Выпускники школы Эксперт"
                  class="rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="block lg:hidden mx-auto mt-10 px-14 w-full h-[500px] rounded-[20px]"
        >
          <YandexMap />
        </div>
      </div>
    </section>
  </main>
</template>
