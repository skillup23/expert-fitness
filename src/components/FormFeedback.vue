<template>
  <form
    @submit.prevent="submitForm"
    ref="mainForm"
    class="w-full flex flex-col gap-6"
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
    <button
      type="submit"
      class="button-main mt-10 2xl:mt-20 rounded-[8px] bg-black text-white hover:bg-purple"
    >
      Записаться
    </button>
    <div class="-mt-2 mb-3 form-check flex items-center gap-4">
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
        <a href="#" target="_blank" class="underline"
          >на обработку персональных данных</a
        ></label
      >
    </div>
  </form>
</template>

<script>
const botToken = "7230527247:AAHyB7HsKfJgYdiLXJO3eLyGclYVBIzD54k";
const chatId = -4263099299;

export default {
  data() {
    return {
      name: "",
      tel: "",
      feedback: "",
      term: "",
    };
  },
  methods: {
    submitForm() {
      //   Отправка заявки в Телеграмм
      const telegram_message = `Имя: ${this.name}\nТелефон: ${this.tel}\nСпособ связи: ${this.feedback}\nСогласие на обработку персональных данных: ${this.term}`;
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          console.error("Error sending message:", error);
          this.error();
        });
    },
    success() {
      // Всплывающее окно об успехе отправки
      this.$swal({
        icon: "success",
        title: "Отлично!",
        text: "Заявка отправлена!",
      });
    },
    error() {
      // Всплывающее окно об успехе отправки
      this.$swal({
        icon: "error",
        title: "Ошибка!",
        text: "Попробуйте позже.",
      });
    },
  },
};
</script>
