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
        id="nameUser"
        v-model="name"
        placeholder="Имя"
        class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple"
      />
    </div>
    <div>
      <input
        required
        type="tel"
        pattern="^(\+7|7|8)\d{10}$"
        title="Введите номер в формате +79991234567 или 89991234567"
        id="telephone"
        v-model="tel"
        placeholder="Телефон"
        class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple"
      />
    </div>

    <select 
      required 
      v-model="feedback" 
      id="feedback"
      class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple bg-white"
    >
      <option disabled value="">Выбрать способ связи</option>
      <option>WhatsApp</option>
      <option>Telegram</option>
      <option>Звонок</option>
    </select>

    <!-- Скрытая ловушка для ботов (honeypot) -->
    <div style="position: absolute; left: -9999px; opacity: 0">
      <input
        type="text"
        v-model="honeypot"
        tabindex="-1"
        autocomplete="off"
      />
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="button-main mt-4 sm:mt-10 2xl:mt-20 rounded-[8px] bg-purple text-white hover:bg-black transition-colors"
    >
      {{ isSubmitting ? 'Отправка...' : 'Записаться' }}
    </button>

    <!-- Чекбокс согласия (по закону 152-ФЗ галочка изначально снята) -->
    <div class="mt-0 sm:-mt-2 mb-3 form-check flex items-start gap-3">
      <input
        required
        type="checkbox"
        class="w-5 h-5 mt-0.5 rounded border-purple text-purple focus:ring-purple cursor-pointer accent-[#923EA1]"
        id="termCheck"
        v-model="term"
      />
      <label
        class="text-[14px] leading-tight font-roboto font-light text-gray-700 cursor-pointer"
        for="termCheck"
      >
        Я даю 
        <a 
          href="/media/docs/Согласие субъекта персональных данных.pdf" 
          target="_blank" 
          class="underline text-purple hover:text-black"
        >
          согласие на обработку персональных данных
        </a> 
        и соглашаюсь с 
        <router-link 
          to="/privacy" 
          target="_blank" 
          class="underline text-purple hover:text-black"
        >
          политикой конфиденциальности
        </router-link>
      </label>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      tel: '',
      feedback: '',
      term: false, // галочка изначально выключена
      honeypot: '',
      loadTime: 0,
      isSubmitting: false,
    };
  },
  mounted() {
    this.loadTime = Date.now();
  },
  methods: {
    async submitForm() {
      // Защита: форма не может быть заполнена живым человеком быстрее 2 секунд
      const secondsOpened = (Date.now() - this.loadTime) / 1000;
      if (this.honeypot || secondsOpened < 2) {
        this.success();
        this.resetForm();
        return;
      }

      this.isSubmitting = true;

      try {
        // Отправляем запрос на ваш скрипт на хостинге Reg.ru
        const response = await fetch('https://energo-alyans.com/send.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            tel: this.tel,
            feedback: this.feedback,
            honeypot: this.honeypot,
          }),
        });

        if (!response.ok) {
          throw new Error('Ошибка сервера при отправке');
        }

        this.resetForm();
        this.success();
      } catch (err) {
        console.error('Ошибка:', err);
        this.error();
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.name = '';
      this.tel = '';
      this.feedback = '';
      this.honeypot = '';
      this.loadTime = Date.now();
    },
    success() {
      this.$swal({
        icon: 'success',
        title: 'Отлично!',
        text: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.',
      });
    },
    error() {
      this.$swal({
        icon: 'error',
        title: 'Ошибка!',
        text: 'Не удалось отправить заявку. Попробуйте позже.',
      });
    },
  },
};
</script>