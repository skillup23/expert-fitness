<script setup>
import ButtonMain from "@/components/ButtonMain.vue";
import FormFeedback from "@/components/FormFeedback.vue";
import Heading from "@/components/Heading.vue";
</script>

<template>
  <main class="mt-[64px] lg:mt-[5%] xl:mt-[4%]">
    <!-- Hero / Заголовок акции -->
    <section class="py-8 sm:py-16">
      <div class="wrapper">
        <div class="text-center max-w-4xl mx-auto">
          <div
            class="inline-block bg-purple text-white px-5 py-2 rounded-full text-sm sm:text-base font-semibold mb-4 tracking-wider uppercase"
          >
            Черная Пятница 11.11
          </div>
          <h1 class="heading text-xl sm:text-5xl lg:text-4xl text-black">
            Скидки на очные и онлайн-курсы
            <span class="text-purple">до 30%</span>
          </h1>
          <p class="mt-4 text-base sm:text-xl font-medium text-gray-700">
            Друзья! У нас тоже бывает ЧЕРНАЯ ПЯТНИЦА!
            <br class="hidden sm:inline" />
            Только 3 дня —
            <span class="text-purple font-bold">с 11.11 по 13.11.2026 г.!</span>
          </p>
          <p
            class="mt-2 text-sm sm:text-base text-red-600 font-semibold uppercase tracking-wide"
          >
            Количество мест на курсы строго ограничено!
          </p>

          <!-- Быстрые внешние действия -->
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://fitnesstrener23.ru/registracija/" target="_blank">
              <ButtonMain class="bg-purple text-white shadow-md hover:bg-black">
                Регистрация на платформе
              </ButtonMain>
            </a>
            <a href="https://fitnesstrener23.ru/kursi/" target="_blank">
              <ButtonMain
                class="bg-white border-2 border-purple text-purple hover:bg-purple hover:text-white"
              >
                Все курсы школы
              </ButtonMain>
            </a>
            <a href="https://vk.ru/fitnesstrener123" target="_blank">
              <ButtonMain
                class="bg-[#0077FF] text-white border-2 border-[#0077FF] hover:bg-blue-700"
              >
                Сообщество ВКонтакте
              </ButtonMain>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Блок 1: Дипломные онлайн-программы -->
    <section class="py-10 bg-purple text-white">
      <div class="wrapper">
        <Heading
          class="heading text-xl sm:text-5xl lg:text-4xl text-white text-center mb-4"
        >
          Онлайн-курсы с выдачей дипломов гос. образца
        </Heading>
        <p
          class="text-center text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto"
        >
          Присвоение квалификации «Тренер по фитнесу» с внесением в базу ФИС
          ФРДО. <br />
          <b>Сроки обучения:</b> 17 ноября 2026 – 12 февраля 2027 г.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Карточка 1 -->
          <div
            class="bg-white text-black p-6 sm:p-8 rounded-[20px] flex flex-col justify-between shadow-lg"
          >
            <div>
              <span
                class="inline-block bg-pink text-purple font-bold px-3 py-1 rounded-lg text-sm mb-3"
                >Скидка 20%</span
              >
              <h3 class="text-lg sm:text-xl font-bold leading-snug mb-3">
                «Тренер по фитнес-йоге, Пилатесу, стретчингу»
              </h3>
              <p class="text-sm text-gray-500 mb-4">
                3 ключевых направления Mind & Body в одном курсе
              </p>
            </div>
            <div
              class="mt-4 pt-4 border-t border-gray-100 flex items-baseline justify-between"
            >
              <div>
                <span
                  class="text-gray-400 line-through text-sm sm:text-base mr-2"
                  >39 900 р.</span
                >
                <span class="text-xl sm:text-2xl font-bold text-purple"
                  >32 000 р.</span
                >
              </div>
              <a
                href="#zapisatca"
                class="text-xs uppercase font-bold text-purple hover:underline"
                >Занять место &rarr;</a
              >
            </div>
          </div>

          <!-- Карточка 2 -->
          <div
            class="bg-white text-black p-6 sm:p-8 rounded-[20px] flex flex-col justify-between shadow-lg"
          >
            <div>
              <span
                class="inline-block bg-pink text-purple font-bold px-3 py-1 rounded-lg text-sm mb-3"
                >Скидка 20%</span
              >
              <h3 class="text-lg sm:text-xl font-bold leading-snug mb-3">
                «Тренер групповых фитнес-программ»
              </h3>
              <p class="text-sm text-gray-500 mb-4">
                Базовая, степ-аэробика, силовой тренинг, стретчинг
              </p>
            </div>
            <div
              class="mt-4 pt-4 border-t border-gray-100 flex items-baseline justify-between"
            >
              <div>
                <span
                  class="text-gray-400 line-through text-sm sm:text-base mr-2"
                  >39 900 р.</span
                >
                <span class="text-xl sm:text-2xl font-bold text-purple"
                  >32 000 р.</span
                >
              </div>
              <a
                href="#zapisatca"
                class="text-xs uppercase font-bold text-purple hover:underline"
                >Занять место &rarr;</a
              >
            </div>
          </div>

          <!-- Карточка 3 -->
          <div
            class="bg-white text-black p-6 sm:p-8 rounded-[20px] flex flex-col justify-between shadow-lg"
          >
            <div>
              <span
                class="inline-block bg-pink text-purple font-bold px-3 py-1 rounded-lg text-sm mb-3"
                >Скидка 20%</span
              >
              <h3 class="text-lg sm:text-xl font-bold leading-snug mb-3">
                «Тренер по системе Пилатес»
              </h3>
              <p class="text-sm text-gray-500 mb-4">
                Базовый курс (mat 1, mat 2) + Пилатес с малым оборудованием
              </p>
            </div>
            <div
              class="mt-4 pt-4 border-t border-gray-100 flex items-baseline justify-between"
            >
              <div>
                <span
                  class="text-gray-400 line-through text-sm sm:text-base mr-2"
                  >39 900 р.</span
                >
                <span class="text-xl sm:text-2xl font-bold text-purple"
                  >32 000 р.</span
                >
              </div>
              <a
                href="#zapisatca"
                class="text-xs uppercase font-bold text-purple hover:underline"
                >Занять место &rarr;</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Блок 2: Онлайн-курсы с сертификатами -->
    <section class="py-12 bg-white">
      <div class="wrapper">
        <Heading
          class="heading text-xl sm:text-5xl lg:text-4xl text-black text-center mb-3"
        >
          Онлайн-курсы с выдачей сертификатов
        </Heading>
        <p
          class="text-center text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto"
        >
          Доступ к урокам на 1 полный год. <br />
          Для получения сертификата необходимо сдать домашние задания до 31
          января 2027 г.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <!-- 1 -->
          <div
            class="p-5 border border-gray-200 rounded-[20px] hover:border-purple transition-all flex flex-col justify-between bg-[#FDFBFD]"
          >
            <div>
              <div class="flex justify-between items-center mb-2">
                <span
                  class="text-xs font-bold text-purple bg-pink px-2.5 py-1 rounded-md"
                  >-20%</span
                >
              </div>
              <h4 class="font-bold text-base sm:text-lg mb-2">
                «Пилатес онлайн»
              </h4>
            </div>
            <div
              class="mt-4 flex items-baseline justify-between pt-3 border-t border-gray-200"
            >
              <span class="text-gray-400 line-through text-sm">8 900 р.</span>
              <span class="text-xl font-bold text-purple">7 100 р.</span>
            </div>
          </div>

          <!-- 2 -->
          <div
            class="p-5 border border-purple/40 bg-pink/20 rounded-[20px] flex flex-col justify-between shadow-sm"
          >
            <div>
              <div class="flex justify-between items-center mb-2">
                <span
                  class="text-xs font-bold text-white bg-purple px-2.5 py-1 rounded-md"
                  >-30% ТОП</span
                >
              </div>
              <h4 class="font-bold text-base sm:text-lg mb-2">
                «Пилатес с малым оборудованием онлайн»
              </h4>
            </div>
            <div
              class="mt-4 flex items-baseline justify-between pt-3 border-t border-purple/20"
            >
              <span class="text-gray-400 line-through text-sm">14 900 р.</span>
              <span class="text-xl font-bold text-purple">9 900 р.</span>
            </div>
          </div>

          <!-- 3 -->
          <div
            class="p-5 border border-gray-200 rounded-[20px] hover:border-purple transition-all flex flex-col justify-between bg-[#FDFBFD]"
          >
            <div>
              <span
                class="text-xs font-bold text-purple bg-pink px-2.5 py-1 rounded-md"
                >-25%</span
              >
              <h4 class="font-bold text-base sm:text-lg mt-2 mb-2">
                «Фитнес-йога онлайн»
              </h4>
            </div>
            <div
              class="mt-4 flex items-baseline justify-between pt-3 border-t border-gray-200"
            >
              <span class="text-gray-400 line-through text-sm">8 900 р.</span>
              <span class="text-xl font-bold text-purple">6 700 р.</span>
            </div>
          </div>

          <!-- 4 -->
          <div
            class="p-5 border border-gray-200 rounded-[20px] hover:border-purple transition-all flex flex-col justify-between bg-[#FDFBFD]"
          >
            <div>
              <span
                class="text-xs font-bold text-purple bg-pink px-2.5 py-1 rounded-md"
                >-30%</span
              >
              <h4 class="font-bold text-base sm:text-lg mt-2 mb-2">
                «Стретчинг онлайн»
              </h4>
            </div>
            <div
              class="mt-4 flex items-baseline justify-between pt-3 border-t border-gray-200"
            >
              <span class="text-gray-400 line-through text-sm">8 900 р.</span>
              <span class="text-xl font-bold text-purple">6 200 р.</span>
            </div>
          </div>

          <!-- 5 -->
          <div
            class="p-5 border border-gray-200 rounded-[20px] hover:border-purple transition-all flex flex-col justify-between bg-[#FDFBFD]"
          >
            <div>
              <span
                class="text-xs font-bold text-purple bg-pink px-2.5 py-1 rounded-md"
                >-25%</span
              >
              <h4 class="font-bold text-base sm:text-lg mt-2 mb-2">
                «Детский фитнес онлайн»
              </h4>
            </div>
            <div
              class="mt-4 flex items-baseline justify-between pt-3 border-t border-gray-200"
            >
              <span class="text-gray-400 line-through text-sm">8 900 р.</span>
              <span class="text-xl font-bold text-purple">6 700 р.</span>
            </div>
          </div>

          <!-- 6 -->
          <div
            class="p-5 border border-gray-200 rounded-[20px] hover:border-purple transition-all flex flex-col justify-between bg-[#FDFBFD]"
          >
            <div>
              <span
                class="text-xs font-bold text-purple bg-pink px-2.5 py-1 rounded-md"
                >-25%</span
              >
              <h4 class="font-bold text-base sm:text-lg mt-2 mb-2">
                «Фитнес для беременных»
              </h4>
            </div>
            <div
              class="mt-4 flex items-baseline justify-between pt-3 border-t border-gray-200"
            >
              <span class="text-gray-400 line-through text-sm">8 900 р.</span>
              <span class="text-xl font-bold text-purple">6 700 р.</span>
            </div>
          </div>

          <!-- 7 -->
          <div
            class="p-5 border border-gray-200 rounded-[20px] hover:border-purple transition-all flex flex-col justify-between bg-[#FDFBFD]"
          >
            <div>
              <span
                class="text-xs font-bold text-purple bg-pink px-2.5 py-1 rounded-md"
                >-25%</span
              >
              <h4 class="font-bold text-base sm:text-lg mt-2 mb-2">
                «Степ-аэробика онлайн»
              </h4>
            </div>
            <div
              class="mt-4 flex items-baseline justify-between pt-3 border-t border-gray-200"
            >
              <span class="text-gray-400 line-through text-sm">8 900 р.</span>
              <span class="text-xl font-bold text-purple">6 700 р.</span>
            </div>
          </div>

          <!-- 8 -->
          <div
            class="p-5 border border-gray-200 rounded-[20px] hover:border-purple transition-all flex flex-col justify-between bg-[#FDFBFD]"
          >
            <div>
              <span
                class="text-xs font-bold text-purple bg-pink px-2.5 py-1 rounded-md"
                >-25%</span
              >
              <h4 class="font-bold text-base sm:text-lg mt-2 mb-2">
                «Силовой тренинг онлайн»
              </h4>
            </div>
            <div
              class="mt-4 flex items-baseline justify-between pt-3 border-t border-gray-200"
            >
              <span class="text-gray-400 line-through text-sm">8 900 р.</span>
              <span class="text-xl font-bold text-purple">6 700 р.</span>
            </div>
          </div>

          <!-- 9 -->
          <div
            class="p-5 border border-gray-200 rounded-[20px] hover:border-purple transition-all flex flex-col justify-between bg-[#FDFBFD]"
          >
            <div>
              <span
                class="text-xs font-bold text-purple bg-pink px-2.5 py-1 rounded-md"
                >-20%</span
              >
              <h4 class="font-bold text-base sm:text-lg mt-2 mb-2">
                «Стрип-пластика онлайн»
              </h4>
            </div>
            <div
              class="mt-4 flex items-baseline justify-between pt-3 border-t border-gray-200"
            >
              <span class="text-gray-400 line-through text-sm">7 900 р.</span>
              <span class="text-xl font-bold text-purple">6 300 р.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Блок 3: Очные курсы в Краснодаре с сертификатом -->
    <section class="py-12 bg-pink/40">
      <div class="wrapper">
        <Heading
          class="heading text-xl sm:text-5xl lg:text-4xl text-black text-center mb-8"
        >
          Очные курсы в Краснодаре (с сертификатом)
        </Heading>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            class="bg-white p-6 rounded-[20px] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div class="flex justify-between items-center mb-2">
                <span
                  class="text-xs font-bold text-purple bg-pink px-2 py-1 rounded"
                  >-20%</span
                >
                <span class="text-xs font-medium text-gray-500"
                  >15 ноября 2026 г.</span
                >
              </div>
              <h4 class="font-bold text-lg mb-2">
                «Функциональный тренинг в тренажерном зале»
              </h4>
            </div>
            <div
              class="mt-4 pt-3 border-t border-gray-100 flex items-baseline justify-between"
            >
              <span class="text-gray-400 line-through text-sm">6 900 р.</span>
              <span class="text-xl font-bold text-purple">5 500 р.</span>
            </div>
          </div>

          <div
            class="bg-white p-6 rounded-[20px] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div class="flex justify-between items-center mb-2">
                <span
                  class="text-xs font-bold text-purple bg-pink px-2 py-1 rounded"
                  >-17%</span
                >
                <span class="text-xs font-medium text-gray-500"
                  >28–29 ноября 2026 г.</span
                >
              </div>
              <h4 class="font-bold text-lg mb-2">«Стретчинг»</h4>
            </div>
            <div
              class="mt-4 pt-3 border-t border-gray-100 flex items-baseline justify-between"
            >
              <span class="text-gray-400 line-through text-sm">11 900 р.</span>
              <span class="text-xl font-bold text-purple">9 900 р.</span>
            </div>
          </div>

          <div
            class="bg-white p-6 rounded-[20px] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div class="flex justify-between items-center mb-2">
                <span
                  class="text-xs font-bold text-purple bg-pink px-2 py-1 rounded"
                  >-20%</span
                >
                <span class="text-xs font-medium text-gray-500"
                  >12–13 декабря 2026 г.</span
                >
              </div>
              <h4 class="font-bold text-lg mb-2">«Нутрициология в фитнесе»</h4>
            </div>
            <div
              class="mt-4 pt-3 border-t border-gray-100 flex items-baseline justify-between"
            >
              <span class="text-gray-400 line-through text-sm">9 900 р.</span>
              <span class="text-xl font-bold text-purple">7 900 р.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Блок бронирования / Запись -->
    <section id="zapisatca" class="py-12 bg-white">
      <div class="wrapper">
        <div class="bg-purple text-white rounded-[20px] p-6 sm:p-12">
          <div class="flex flex-col lg:flex-row gap-8 items-center">
            <div class="w-full lg:w-1/2">
              <h2 class="text-2xl sm:text-3xl font-bold mb-4">
                Забронировать место по&nbsp;акции 11.11
              </h2>
              <p class="text-base sm:text-lg mb-6 leading-relaxed">
                Зарегистрироваться на любой курс по акционной цене можно через
                форму, по прямому номеру телефона или в диалоге группы
                ВКонтакте.
              </p>

              <div class="flex flex-col gap-3 font-medium">
                <a
                  href="tel:+79615858995"
                  class="text-lg sm:text-2xl font-bold hover:underline flex items-center gap-2"
                >
                  <span>📞</span> +7 (961) 585-89-95
                </a>
                <a
                  href="https://vk.ru/fitnesstrener123"
                  target="_blank"
                  class="hover:underline flex items-center text-sm sm:text-xl gap-2"
                >
                  <span>💬</span> Написать в сообщения сообщества ВК
                </a>
              </div>
            </div>

            <div class="w-full lg:w-1/2 bg-white text-black p-6 rounded-[20px]">
              <h4 class="font-bold text-lg mb-4 text-center">
                Оставить заявку на акцию
              </h4>
              <FormFeedback />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
