<template>
  <div
    v-if="!consentGiven && showBanner"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
  >
    <div
      class="bg-white rounded-xl shadow-2xl max-w-lg w-full animate-slide-in"
    >
      <div class="p-6 md:p-8">
        <div class="mb-4">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">
            🍪 Использование файлов cookie
          </h3>
          <div class="flex items-center gap-2 text-gray-600 mb-4">
            <svg
              class="w-5 h-5 text-blue-500"
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
            <span class="text-sm">Настройки сохраняются на 30 дней</span>
          </div>
        </div>

        <div class="space-y-4 text-gray-700">
          <p>
            Мы используем файлы cookie для улучшения работы сайта и сбора
            анонимной статистики с помощью
            <span class="font-medium text-gray-900">Яндекс.Метрики</span>.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  class="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-blue-700">
                  Статистика помогает нам улучшать наш сервис. Приняв cookie, вы
                  помогаете стать нам лучше!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            @click="acceptCookies"
            class="flex-1 px-6 py-3 bg-purple text-white font-semibold rounded-lg hover:bg-purple transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            Принять
          </button>

          <button
            @click="rejectCookies"
            class="flex-1 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow hover:shadow-md"
          >
            Отклонить
          </button>
        </div>

        <p class="mt-6 text-xs text-gray-500 text-center">
          Нажимая «Принять», вы соглашаетесь с использованием cookie в
          соответствии с нашей
          <a href="/privacy" class="text-blue-600 hover:text-blue-800 underline"
            >Политикой конфиденциальности</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const consentGiven = ref(false);
const showBanner = ref(false);

const checkConsent = () => {
  const consent = localStorage.getItem('cookieConsent');
  const consentDate = localStorage.getItem('cookieConsentDate');

  if (consent && consentDate) {
    const date = new Date(consentDate);
    const now = new Date();
    const daysDiff = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (daysDiff > 30) {
      localStorage.removeItem('cookieConsent');
      localStorage.removeItem('cookieConsentDate');
      showBanner.value = true;
    } else {
      consentGiven.value = consent === 'accepted';
    }
  } else {
    showBanner.value = true;
  }
};

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted');
  localStorage.setItem('cookieConsentDate', new Date().toISOString());
  consentGiven.value = true;
  showBanner.value = false;

  // Перезагружаем страницу для применения скрипта из index.html
  setTimeout(() => {
    window.location.reload();
  }, 300);
};

const rejectCookies = () => {
  localStorage.setItem('cookieConsent', 'rejected');
  localStorage.setItem('cookieConsentDate', new Date().toISOString());
  consentGiven.value = false;
  showBanner.value = false;
};

onMounted(() => {
  setTimeout(checkConsent, 500);
});
</script>
