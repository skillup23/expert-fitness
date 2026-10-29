<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Хедер -->
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <router-link to="/" class="flex items-center gap-3">
            <div
              class="w-10 h-10 bg-purple rounded-lg flex items-center justify-center"
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
            class="px-6 py-2 bg-purple text-white rounded-lg hover:bg-black transition-colors"
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
            <!-- 1. Общие положения -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-6 h-6 text-purple"
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
                  Настоящая Политика обработки персональных данных определяет порядок обработки 
                  и меры по обеспечению безопасности данных, предпринимаемые 
                  <strong>Обществом с ограниченной ответственностью «Центр дополнительного образования «ЭКСПЕРТ»</strong> 
                  (ООО «ЦДО «ЭКСПЕРТ», ОГРН 1182375053073, ИНН 2311260855, адрес: 350051, Краснодарский край, г. Краснодар, ул. Шоссе Нефтяников, д. 28, пом. 4) (далее — «Оператор»).
                </p>
                <p>
                  Политика разработана в строгом соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и действует в отношении всей информации, которую Оператор может получить о посетителях сайта <strong>https://fitness-trener23.ru</strong>.
                </p>
              </div>
            </section>

            <!-- 2. Состав собираемых данных -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-6 h-6 text-purple"
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
                2. Категории обрабатываемых данных
              </h2>
              <div
                class="bg-purple/5 border-l-4 border-purple p-6 rounded-r-lg"
              >
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  Оператор обрабатывает следующие персональные данные:
                </h3>
                <ul class="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Имя Пользователя;</li>
                  <li>Контактный номер телефона;</li>
                  <li>Предпочтительный канал обратной связи (WhatsApp, Telegram, звонок);</li>
                  <li>Обезличенные технические данные и файлы cookie (с использованием сервиса веб-аналитики Яндекс.Метрика).</li>
                </ul>
                <p class="text-gray-600 text-sm mt-3">
                  Оператор не осуществляет сбор специальных категорий персональных данных (сведения о расовой принадлежности, состоянии здоровья, биометрических данных или судимости).
                </p>
              </div>
            </section>

            <!-- 3. Цели обработки -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-6 h-6 text-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                3. Цели обработки данных
              </h2>
              <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Идентификация Пользователя, заполнившего форму обратной связи на сайте;</li>
                <li>Предоставление консультаций по курсам подготовки инструкторов по йоге, пилатесу, стретчингу и групповым программам;</li>
                <li>Запись на ознакомительные и базовые образовательные курсы;</li>
                <li>Анализ посещаемости и оптимизация удобства использования сайта.</li>
              </ul>
            </section>

            <!-- 4. Яндекс.Метрика и Cookie -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <div
                  class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center"
                >
                  <svg
                  class="w-6 h-6 text-purple"
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
                4. Использование файлов Cookie и веб-аналитика
              </h2>
              <div class="space-y-4 text-gray-700">
                <p>
                  На сайте используется сервис веб-аналитики <strong>Яндекс.Метрика</strong>, применяющий технологию cookie. Cookie — это небольшие текстовые фрагменты данных, сохраняемые в браузере Пользователя для учета поведения на страницах.
                </p>
                <p>
                  Сбор сведений ведется в обезличенной форме: статистика посещаемости, географический регион (город), длительность визита и типы используемых устройств. Пользователь вправе в любой момент заблокировать или удалить файлы cookie через настройки своего браузера.
                </p>
              </div>
            </section>

            <!-- 5. Сроки и порядок хранения -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-6 h-6 text-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                5. Сроки обработки и уничтожение данных
              </h2>
              <p class="text-gray-700 leading-relaxed">
                Персональные данные хранятся и обрабатываются до момента достижения целей их обработки (проведение консультации и формирование учебной группы) либо до момента отзыва согласия субъектом данных. При поступлении отзыва данные подлежат гарантированному удалению из баз Оператора в течение 30 дней.
              </p>
            </section>

            <!-- 6. Контакты и отзыв согласия -->
            <section>
              <h2
                class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
              >
                <svg
                  class="w-6 h-6 text-purple"
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
                6. Контактная информация и отзыв данных
              </h2>
              <div class="space-y-4 text-gray-700">
                <p>
                  По всем вопросам касательно обработки персональных данных, а также для отзыва предоставленного согласия Пользователь может направить электронное обращение:
                </p>

                <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <p class="text-xs uppercase text-gray-500 font-semibold">Оператор</p>
                      <p class="font-medium text-gray-900">ООО «ЦДО «ЭКСПЕРТ»</p>
                      <p class="text-sm text-gray-600 mt-1">ИНН: 2311260855 / ОГРН: 1182375053073</p>
                    </div>
                    <div>
                      <p class="text-xs uppercase text-gray-500 font-semibold">Электронная почта для обращений</p>
                      <a href="mailto:fitnesstrener23@yandex.ru" class="text-purple underline font-semibold text-lg">
                        fitnesstrener23@yandex.ru

                      </a>
                      <p class="text-sm text-gray-600 mt-1">Адрес: 350051, г. Краснодар, ул. Шоссе Нефтяников, 28, пом. 4</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- Подвал документа -->
          <div class="mt-12 pt-8 border-t border-gray-200 text-gray-500 text-sm">
            <p>
              Документ действует бессрочно до замены новой редакцией.<br />
              Текущая редакция от: {{ currentDate }}
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