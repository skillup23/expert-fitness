<template>
  <div
    v-if="!consentGiven && showBanner"
    class="fixed bottom-0 w-full z-[101] flex items-center justify-center bg-white wrapper"
  >
    <div class="p-2 md:p-3">
      <div class="mb-2">
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
          🍪 Использование файлов cookie
        </h3>
      </div>

      <div class="space-y-1 text-gray-700">
        <p>
          Мы используем файлы cookie для улучшения работы сайта и сбора
          анонимной статистики с помощью
          <span class="font-medium text-gray-900">Яндекс.Метрики</span>.
          <br />Статистика помогает нам улучшать наш сервис. Приняв cookie, вы
          помогаете стать нам лучше!
        </p>
      </div>

      <div class="mt-2 flex flex-col sm:flex-row gap-3">
        <button
          @click="rejectCookies"
          class="flex-1 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-1 border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow hover:shadow-md"
        >
          Отклонить
        </button>

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
      </div>

      <p class="mt-2 text-xs text-gray-500 text-center">
        Нажимая «Принять», вы соглашаетесь с использованием cookie в
        соответствии с нашей
        <a href="/privacy" class="text-blue-600 hover:text-blue-800 underline"
          >Политикой конфиденциальности</a
        >. Настройки сохраняются на 30 дней.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const consentGiven = ref(false);
const showBanner = ref(false);

const checkConsent = () => {
  const consent = localStorage.getItem("cookieConsent");
  const consentDate = localStorage.getItem("cookieConsentDate");

  if (consent && consentDate) {
    const date = new Date(consentDate);
    const now = new Date();
    const daysDiff = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (daysDiff > 30) {
      localStorage.removeItem("cookieConsent");
      localStorage.removeItem("cookieConsentDate");
      showBanner.value = true;
    } else {
      consentGiven.value = consent === "accepted";
    }
  } else {
    showBanner.value = true;
  }
};

const acceptCookies = () => {
  localStorage.setItem("cookieConsent", "accepted");
  localStorage.setItem("cookieConsentDate", new Date().toISOString());
  consentGiven.value = true;
  showBanner.value = false;

  // Перезагружаем страницу для применения скрипта из index.html
  setTimeout(() => {
    window.location.reload();
  }, 300);
};

const rejectCookies = () => {
  localStorage.setItem("cookieConsent", "rejected");
  localStorage.setItem("cookieConsentDate", new Date().toISOString());
  consentGiven.value = false;
  showBanner.value = false;
};

onMounted(() => {
  setTimeout(checkConsent, 500);
});
</script>
