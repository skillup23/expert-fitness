<template>
  <form @submit.prevent="submitForm" ref="mainForm">
    <div class="mb-3">
      <label for="nameUser" class="">Имя</label>
      <input required type="text" class="" id="nameUser" v-model="name" />
    </div>
    <div class="mb-3">
      <label for="telephone" class="">Телефон</label>
      <input
        required
        type="tel"
        class="form-control"
        id="telephone"
        v-model="tel"
      />
    </div>

    <select required v-model="feedback" id="feedback">
      <option disabled value="radio">Выбрать способ связи</option>
      <option>А</option>
      <option>Б</option>
      <option>В</option>
    </select>
    <div class="mb-3 form-check">
      <input
        required
        type="checkbox"
        class=""
        id="exampleCheck1"
        v-model="term"
      />
      <label class="" for="exampleCheck1"
        >Нажимая на кнопку Вы соглашаетесь на обработку персональных
        данных</label
      >
    </div>
    <button type="submit" class="">Записаться</button>
  </form>
</template>

<script>
const botToken = '7230527247:AAHyB7HsKfJgYdiLXJO3eLyGclYVBIzD54k';
const chatId = -4263099299;

export default {
  data() {
    return {
      name: '',
      tel: '',
      feedback: '',
      term: '',
    };
  },
  methods: {
    submitForm() {
      // Perform actions like making an API request
      const telegram_message = `Имя: ${this.name}\nТелефон: ${this.tel}\nСпособ связи: ${this.feedback}\nСогласие на обработку ПД: ${this.term}`;
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegram_message,
        }),
      }).catch((error) => {
        console.error('Error sending message:', error);
      });

      this.$refs.mainForm.reset();
    },
  },
};
</script>
