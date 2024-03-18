<template>
  <div>
    <h1>Отправка кода подтверждения на почту</h1>
    <input type="text" v-model="email" placeholder="Введите ваш email">
    <button @click="sendVerificationCode">Отправить код</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    async sendVerificationCode() {
      try {
        const response = await axios.post('https://klabapi.azurewebsites.net/api/authentication/sign-up', {
          email: this.email
        }, {
          headers: {
            'api-key': '6A38900C07D34C4F9839226B66FBEA24',
            'Content-Type': 'application/json'
          }
        });

        console.log('Код для регистрации отправлен на ваш email');
        console.log(response.data); 
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
      }
    }
  }
};
</script>
