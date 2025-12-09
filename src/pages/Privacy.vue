<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Хедер -->
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <router-link to="/" class="flex items-center gap-3">
            <div
              class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"
            >
              <span class="text-white font-bold text-xl">Э</span>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">
                Фитнес школа "Эксперт"
              </h1>
              <p class="text-gray-600 text-sm">Политика конфиденциальности</p>
            </div>
          </router-link>

          <router-link
            to="/"
            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← На главную
          </router-link>
        </div>
      </div>
    </header>

    <!-- Основной контент -->
    <main class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Заголовок -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Политика конфиденциальности
          </h1>
          <div class="flex items-center gap-2 text-gray-600">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Последнее обновление: {{ currentDate }}</span>
          </div>
        </div>

        <!-- Основной контент -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="space-y-8">
            <!-- Введение -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                1. Общие положения
              </h2>
              <div class="text-gray-700 space-y-3">
                <p>
                  Фитнес школа "Эксперт" (далее — "Мы", "Наш", "Компания")
                  уважает вашу конфиденциальность и обязуется защищать ваши
                  персональные данные. Настоящая Политика конфиденциальности
                  описывает, как мы собираем, используем и защищаем информацию о
                  вас при использовании нашего веб-сайта.
                </p>
                <p>
                  Используя наш сайт, вы соглашаетесь с условиями данной
                  Политики конфиденциальности.
                </p>
              </div>
            </section>

            <!-- Сбор данных -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                2. Какие данные мы собираем
              </h2>
              <div
                class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg"
              >
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0">
                    <div
                      class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                    >
                      <span class="text-blue-600 font-bold text-xl">!</span>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">
                      Важная информация
                    </h3>
                    <p class="text-gray-700">
                      <strong
                        >Мы собираем только анонимные данные для аналитики через
                        Яндекс.Метрику.</strong
                      >
                    </p>
                    <p class="text-gray-700 mt-2">
                      Мы <strong>НЕ</strong> собираем:
                    </p>
                    <ul
                      class="list-disc list-inside text-gray-700 mt-2 space-y-1 ml-4"
                    >
                      <li>Ваши персональные данные (имя, email, телефон)</li>
                      <li>Платежную информацию</li>
                      <li>Данные для регистрации аккаунта</li>
                      <li>
                        Любую информацию, позволяющую идентифицировать вас
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- Яндекс.Метрика -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <div
                  class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center"
                >
                  <span class="text-red-600 font-bold text-sm">Я</span>
                </div>
                3. Яндекс.Метрика
              </h2>
              <div class="space-y-4 text-gray-700">
                <p>
                  На нашем сайте используется <strong>Яндекс.Метрика</strong> —
                  сервис веб-аналитики, предоставляемый компанией Яндекс.
                </p>

                <div class="bg-gray-50 p-6 rounded-xl">
                  <h4 class="font-bold text-gray-900 mb-3">
                    Что собирает Яндекс.Метрика:
                  </h4>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="flex items-start gap-3">
                      <svg
                        class="w-5 h-5 text-green-600 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <span class="font-medium">Технические данные</span>
                        <p class="text-sm text-gray-600 mt-1">
                          Тип браузера, разрешение экрана
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <svg
                        class="w-5 h-5 text-green-600 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <span class="font-medium">Поведенческие данные</span>
                        <p class="text-sm text-gray-600 mt-1">
                          Время на сайте, переходы по страницам
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <svg
                        class="w-5 h-5 text-green-600 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <span class="font-medium">Географические данные</span>
                        <p class="text-sm text-gray-600 mt-1">
                          Страна и город (без точного адреса)
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <svg
                        class="w-5 h-5 text-green-600 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <span class="font-medium">Источники трафика</span>
                        <p class="text-sm text-gray-600 mt-1">
                          Откуда пришел пользователь на сайт
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg"
                >
                  <h4 class="font-bold text-gray-900 mb-2">Важно знать:</h4>
                  <ul
                    class="list-disc list-inside text-gray-700 space-y-2 ml-4"
                  >
                    <li>
                      Все данные <strong>анонимизированы</strong> и не позволяют
                      идентифицировать личность
                    </li>
                    <li>
                      Мы видим только <strong>общую статистику</strong>, а не
                      данные конкретных пользователей
                    </li>
                    <li>
                      Данные используются
                      <strong>только для аналитики</strong> и улучшения сайта
                    </li>
                    <li>
                      Мы <strong>не передаем</strong> данные третьим лицам
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Cookie -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
                4. Использование Cookie
              </h2>
              <div class="space-y-4 text-gray-700">
                <p>
                  Яндекс.Метрика использует файлы cookie для сбора анонимных
                  данных. Эти файлы сохраняются на вашем устройстве и помогают
                  анализировать использование сайта.
                </p>

                <div class="bg-green-50 p-6 rounded-xl">
                  <h4 class="font-bold text-gray-900 mb-3">
                    🍪 Что такое cookie?
                  </h4>
                  <p class="mb-3">
                    Cookie — это небольшие текстовые файлы, которые сохраняются
                    на вашем устройстве при посещении веб-сайтов. Они помогают
                    запоминать ваши предпочтения.
                  </p>
                  <p>
                    В нашем случае cookie используются
                    <strong>только Яндекс.Метрикой</strong>
                    для сбора статистики о посещениях сайта.
                  </p>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mt-6">
                  <div class="border border-gray-200 rounded-xl p-5">
                    <div class="flex items-center gap-3 mb-3">
                      <div
                        class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"
                      >
                        <svg
                          class="w-6 h-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h4 class="font-bold text-gray-900">Вы приняли cookie</h4>
                    </div>
                    <p class="text-gray-600 text-sm">
                      Яндекс.Метрика собирает анонимные данные для улучшения
                      нашего сайта.
                    </p>
                  </div>

                  <div class="border border-gray-200 rounded-xl p-5">
                    <div class="flex items-center gap-3 mb-3">
                      <div
                        class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"
                      >
                        <svg
                          class="w-6 h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <h4 class="font-bold text-gray-900">
                        Вы отклонили cookie
                      </h4>
                    </div>
                    <p class="text-gray-600 text-sm">
                      Яндекс.Метрика не собирает данные. Статистика посещений не
                      ведется.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Управление данными -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                5. Управление настройками
              </h2>
              <div class="space-y-4 text-gray-700">
                <p>Вы можете управлять использованием cookie в любое время:</p>

                <div class="bg-gray-50 p-6 rounded-xl">
                  <h4 class="font-bold text-gray-900 mb-4">
                    Как изменить настройки:
                  </h4>

                  <div class="space-y-4">
                    <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                      <div class="flex-shrink-0">
                        <div
                          class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                        >
                          <span class="text-blue-600 font-bold">1</span>
                        </div>
                      </div>
                      <div>
                        <h5 class="font-semibold text-gray-900 mb-1">
                          Очистить cookie браузера
                        </h5>
                        <p class="text-gray-600 text-sm">
                          Удалите файлы cookie через настройки вашего браузера.
                          Это сбросит ваше согласие.
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                      <div class="flex-shrink-0">
                        <div
                          class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                        >
                          <span class="text-blue-600 font-bold">2</span>
                        </div>
                      </div>
                      <div>
                        <h5 class="font-semibold text-gray-900 mb-1">
                          Использовать режим инкогнито
                        </h5>
                        <p class="text-gray-600 text-sm">
                          Посещайте наш сайт в режиме инкогнито/приватного
                          просмотра.
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                      <div class="flex-shrink-0">
                        <div
                          class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                        >
                          <span class="text-blue-600 font-bold">3</span>
                        </div>
                      </div>
                      <div>
                        <h5 class="font-semibold text-gray-900 mb-1">
                          Подождать 30 дней
                        </h5>
                        <p class="text-gray-600 text-sm">
                          Наше согласие на cookie автоматически сбрасывается
                          через 30 дней, и вы сможете сделать новый выбор.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Контакты -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                6. Контактная информация
              </h2>
              <div class="space-y-4 text-gray-700">
                <p>
                  Если у вас есть вопросы о нашей Политике конфиденциальности
                  или использовании Яндекс.Метрики, пожалуйста, свяжитесь с
                  нами:
                </p>

                <div class="bg-blue-50 p-6 rounded-xl">
                  <div class="flex items-center gap-4 mb-4">
                    <div
                      class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        class="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">
                        Фитнес школа "Эксперт"
                      </h4>
                      <p class="text-gray-600">
                        Мы заботимся о вашей конфиденциальности
                      </p>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="flex items-center gap-3">
                      <svg
                        class="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Email: info@fitnesstrener23.ru</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg
                        class="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Сайт: fitness-trener23.ru</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Заключение -->
            <section class="pt-6 border-t border-gray-200">
              <div class="bg-gray-50 p-6 rounded-xl">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0">
                    <svg
                      class="w-8 h-8 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-2">Краткий итог:</h4>
                    <p class="text-gray-700">
                      Мы используем <strong>только Яндекс.Метрику</strong> для
                      сбора анонимной статистики. Мы не собираем ваши
                      персональные данные, не храним их и не передаем третьим
                      лицам. Ваша конфиденциальность важна для нас.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- Дата обновления -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <p class="text-gray-500 text-sm">
              Документ вступил в силу: 1 января 2025 года<br />
              Последнее обновление: {{ currentDate }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const currentDate = computed(() => {
  const now = new Date();
  return now.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
