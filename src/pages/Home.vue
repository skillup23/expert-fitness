<script setup>
import { ref } from "vue";
import Heading from "@/components/Heading.vue";
import Footer from "@/components/Footer.vue";
import SliderExpert from "@/components/SliderExpert.vue";
import SliderLessonYoga from "@/components/SliderLessonYoga.vue";
import SliderReviews from "@/components/SliderReviews.vue";
import ButtonMain from "@/components/ButtonMain.vue";
import AccordeonList from "@/components/AccordeonList.vue";
import FormFeedback from "@/components/FormFeedback.vue";

import { programmYoga } from "@/assets/data";

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
      class="mt-10 mb-24 relative bg-[url('/media/Yoga/bg-mandala.png')] bg-no-repeat bg-[left_62vw_bottom_2vh]"
    >
      <div class="wrapper">
        <div class="flex justify-between">
          <div class="flex flex-col items-start w-5/12 xl:max-w-[502px] mt-14">
            <h1
              class="heading leading-tight text-3xl xl:text-[52px] text-black"
            >
              <span class="text-purple">Тренер</span> по фитнес-йоге пилатесу и
              стретчингу
            </h1>
            <p
              class="max-w-[438px] mt-6 text-xl xl:text-2xl leading-none font-roboto font-light"
            >
              Образовательный курс с выдачей
              <span class="text-purple font-bold">диплома гос.обазца.</span>
              Стань экспертом “Mind and Body” - 3&nbsp;направления
              в&nbsp;одном&nbsp;курсе.
            </p>
            <RouterLink to="#">
              <ButtonMain class="mt-6">Записаться</ButtonMain>
            </RouterLink>
          </div>

          <img
            src="/media/Yoga/main-foto.png"
            alt="Фото Йога"
            class="-ml-[4vw] xl:-ml-[12vw] w-6/12 xl:w-6/12"
          />

          <div class="mt-[35px] flex flex-col items-end">
            <div class="mb-[74px] flex flex-col gap-[12px]">
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
              class="mb-4 rounded-2xl"
            />
            <img
              src="/media/Yoga/foto-top-2.jpg"
              alt="Фото Йога"
              class="rounded-2xl"
            />
          </div>
        </div>

        <div class="mt-2 mb-10 flex gap-14">
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

        <Heading class="heading text-black mt-24 mb-14">
          Курс идеально подойдет
        </Heading>
        <div class="flex justify-center gap-20">
          <img
            src="/media/Yoga/foto-top-3.jpg"
            alt="Начинающим Фото"
            class="w-5/12 rounded-2xl"
          />
          <img
            src="/media/Yoga/foto-top-4.jpg"
            alt="Тренерам Фото"
            class="w-5/12 rounded-2xl"
          />
        </div>
      </div>
    </section>

    <!--     О курсе      -->
    <section class="py-14 bg-purple">
      <div class="wrapper">
        <div class="flex gap-6">
          <div class="w-5/12 xl:w-1/2 text-white">
            <Heading class="heading mb-8 text-start">О курсе</Heading>
            <p class="mb-[37px]">
              Наш курс основан на таком направлении фитнеса как Mind and Body
              (психорегулирующие фитнес-программы), которое включет в себя
              фитнес-йогу, Систему Пилатес и стретчинг. Эти фитнес-направления
              положительно влияют как на развитие физических качеств, так и на
              психоэмоциональное состояние человека.
            </p>
            <img
              src="/media/Yoga/o-kyrse.jpg"
              alt="Асаны группа людей"
              class="rounded-[20px]"
            />
          </div>
          <div
            class="w-7/12 xl:w-1/2 p-8 flex flex-col justify-between bg-white rounded-[20px]"
          >
            <div class="flex flex-col gap-[3vw]">
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

            <div class="flex items-center justify-end gap-6">
              <RouterLink to="#">
                <ButtonMain
                  class="px-[22px] py-[14px] bg-white border-purple border-2 text-purple hover:bg-purple hover:text-white"
                  >Программа</ButtonMain
                >
              </RouterLink>
              <RouterLink to="#">
                <ButtonMain>Записаться</ButtonMain>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--     Бесплатный мини-курс      -->
    <section
      class="py-24 bg-[url('/media/Yoga/bg-mandala.png')] bg-no-repeat bg-[left_58vw_bottom_43vh]"
    >
      <div class="wrapper">
        <Heading class="heading mb-14 text-start">Бесплатный мини-курс</Heading>
        <div class="w-full flex items-start">
          <div class="w-7/12 xl:w-1/2 flex flex-col items-start">
            <h4 class="text-purple">
              Чтобы понять подходит ли вам курс, вы&nbsp;можете&nbsp;пройти
              тест-драйв
            </h4>
            <div class="mt-8 flex items-start">
              <div class="w-1/2 flex flex-col gap-6">
                <article class="w-full flex items-center gap-2">
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

              <div class="w-[45%] flex flex-col gap-6">
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

            <div class="mt-[121px] flex xl:flex-col gap-6">
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
            class="w-5/12 xl:w-1/2 ml-6 xl:ml-24 rounded-[20px]"
          />
        </div>
      </div>
    </section>

    <!--     Преимущества      -->
    <section class="pt-14 pb-24 bg-purple">
      <div class="wrapper">
        <Heading class="heading text-white mb-14">наши преимущества</Heading>
        <div class="grid grid-cols-4 gap-6">
          <img
            src="/media/Yoga/preim1.jpg"
            alt="Преимущества"
            class="h-full row-span-2 col-span-2 rounded-[20px]"
          />
          <div class="p-6 flex items-start rounded-[20px] bg-white gap-4">
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
          <div class="p-6 flex items-start rounded-[20px] bg-white gap-4">
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
          <div class="p-6 flex items-start rounded-[20px] bg-white gap-4">
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
          <div class="p-6 flex items-start rounded-[20px] bg-white gap-4">
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
      </div>
    </section>

    <!--     Эксперты      -->
    <section class="pt-14 pb-24 bg-purple">
      <div class="wrapper">
        <Heading class="heading text-white mb-14">Наши эксперты</Heading>
        <SliderExpert class="-mx-3" />
      </div>
    </section>

    <!--     Программа курса и Примеры уроков     -->
    <section
      class="pt-24 bg-[url('/media/Yoga/bg-mandala.png')] bg-no-repeat bg-[right_57vw_top_340px]"
    >
      <div class="wrapper">
        <!--     Программа курса      -->
        <Heading class="heading mb-14 text-start">Программа курса</Heading>
        <div class="-mt-28 flex flex-col">
          <div
            class="w-[550px] 2xl:w-[664px] flex bg-pink self-end rounded-t-[20px]"
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
            class="w-full min-h-96 p-14 grid grid-cols-2 gap-x-6 bg-purple rounded-b-[20px] rounded-tl-[20px]"
          >
            <AccordeonList
              :programms="programms.slice(0, 5)"
              @toggleAnswer="toggleAnswer"
            />
            <AccordeonList
              :programms="programms.slice(5, 10)"
              @toggleAnswer="toggleAnswer"
            />
          </div>

          <div
            v-else
            class="w-full min-h-96 p-14 grid grid-cols-2 gap-x-6 bg-purple rounded-b-[20px] rounded-tl-[20px]"
          >
            <AccordeonList
              :programms="programms.slice(0, 4)"
              @toggleAnswer="toggleAnswer"
            />
            <AccordeonList
              :programms="programms.slice(5, 9)"
              @toggleAnswer="toggleAnswer"
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
      class="py-24 bg-[url('/media/Yoga/bg-mandala.png')] bg-no-repeat bg-[left_58vw_top_-41px]"
    >
      <div class="wrapper">
        <div class="p-14 bg-purple rounded-[20px]">
          <Heading class="heading mb-6 xl:mb-14 text-white text-start"
            >Отзывы</Heading
          >
          <SliderReviews />
        </div>

        <!--     Записаться на обучение      -->
        <div>
          <Heading class="heading mt-24 mb-14 text-start"
            >Записаться на обучение</Heading
          >
          <div>
            <h6 class="text-purple uppercase">
              Присоединяйтесь к нашей команде профессионалов!
            </h6>
            <div class="mt-6 flex gap-14">
              <div class="w-1/2 mt-6 px-[22px]">
                <FormFeedback />
              </div>

              <div class="w-1/2">
                <img
                  src="/media/Yoga/form-feedback.jpg"
                  alt="Выпускники школы Эксперт"
                  class="rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</template>
