<template>
  <form
    @submit.prevent="submitForm"
    ref="mainForm"
    class="w-full flex flex-col gap-4 sm:gap-6"
  >
    <div>
      <input
        required
        type="text"
        class=""
        id="nameUser"
        v-model="name"
        placeholder="Имя"
      />
    </div>
    <div>
      <input
        required
        type="tel"
        pattern="(^8|7|\+7)([0-9]{10})"
        class="w-full"
        id="telephone"
        v-model="tel"
        placeholder="Телефон"
      />
    </div>

    <select required v-model="feedback" id="feedback">
      <option disabled selected value="">Выбрать способ связи</option>
      <option>What's app</option>
      <option>Telegram</option>
      <option>Звонок</option>
    </select>

    <!-- Ловушка для ботов -->
    <div style="position: absolute; left: -9999px; opacity: 0">
      <input
        type="text"
        v-model="honeypot"
        tabindex="-1"
        autocomplete="off"
        placeholder="Do not fill this"
      />
    </div>

    <button
      type="submit"
      class="button-main mt-4 sm:mt-10 2xl:mt-20 rounded-[8px] bg-purple text-white hover:bg-black"
    >
      Записаться
    </button>
    <div class="mt-0 sm:-mt-2 mb-3 form-check flex items-center gap-4">
      <input
        required
        type="checkbox"
        checked
        class="w-6 h-6 border-purple"
        id="exampleCheck1"
        v-model="term"
      />
      <label
        class="text-[14px] leading-none font-roboto font-light"
        for="exampleCheck1"
        >Нажимая на кнопку Вы соглашаетесь
        <a
          href="/media/docs/Согласие субъекта персональных данных.docx"
          target="_blank"
          class="underline"
          >на обработку персональных данных</a
        ></label
      >
    </div>
  </form>
</template>

<script>
const botToken = '7230527247:AAEc6fXgjMRCwSWIRlXCDFOxIW4fBlrF5UU';
const chatId = -4263099299;

export default {
  data() {
    return {
      name: '',
      tel: '',
      feedback: '',
      term: '',
      honeypot: '',
      startTime: 0,
    };
  },
  mounted() {
    // Фиксируем время, когда страница загрузилась
    this.loadTime = Date.now();
  },
  methods: {
    submitForm() {
      const currentTime = Date.now();
      const secondsOpened = (currentTime - this.loadTime) / 1000;

      // 1. Проверка на бота:
      // Если поле ловушки заполнено ИЛИ форма отправлена быстрее чем за 4 секунды
      if (this.honeypot || secondsOpened < 4) {
        console.warn('Spam detected');
        // Имитируем успех для бота, чтобы он не пробовал другие методы
        this.success();
        this.resetForm();
        return;
      }

      //   Отправка заявки в Телеграмм
      const telegram_message = `Имя: ${this.name}\nТелефон: ${this.tel}\nСпособ связи: ${this.feedback}\nСогласие на обработку персональных данных: ${this.term}`;

      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegram_message,
        }),
      })
        .then(() => {
          this.$refs.mainForm.reset();
          this.success();
        })
        .catch((error) => {
          console.error('Error sending message:', error);
          this.error();
        });
    },
    resetForm() {
      this.name = '';
      this.tel = '';
      this.feedback = '';
      // Сбрасываем время для следующей попытки
      this.loadTime = Date.now();
    },
    success() {
      // Всплывающее окно об успехе отправки
      this.$swal({
        icon: 'success',
        title: 'Отлично!',
        text: 'Заявка отправлена!',
      });
    },
    error() {
      // Всплывающее окно об успехе отправки
      this.$swal({
        icon: 'error',
        title: 'Ошибка!',
        text: 'Попробуйте позже.',
      });
    },
  },
};
</script>
