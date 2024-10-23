<template>
  <Transition name="fade" appear>
    <div class="slide container">
      <div class="content-container">
        <div class="background-onbording background-onbording-seven">
          <img
            class="boy-with-laptop"
            src="@/assets/img/registform.svg"
            alt="Застосунок готовий познайомитись з вами"
          />
        </div>
        <div class="slide__text">
          <h2 class="regist__title regsit-style">Вітаємо</h2>
          <h3 class="regist__description regsit-descript">
            Будь ласка,<br />введи свою електрону пошту
          </h3>
        </div>
        <form class="regist__form">
          <AppInput
            v-model.trim="email"
            type="email"
            label="Електронна пошта"
          ></AppInput>
        </form>
        <btn
          :title="btntitle"
          :first-button-disabled="isNextDisabled"
          @click="requestemail"
        />
        <div class="slide__service">
          <div class="slide__decription">або уйвійти за допомогую</div>
          <div class="slide__social">
            <div class="slide__btn-soc">
              <img
                class="slide__icon"
                src="@/assets/icons/faccebook.svg"
                alt="facebook"
              />
              <div class="slide__face social-style">Facebook</div>
            </div>
            <div class="slide__btn-soc">
              <img
                class="slide__icon"
                src="@/assets/icons/google.svg"
                alt="google"
              />
              <div class="slide__google social-style">Google</div>
            </div>
          </div>
        </div>
      </div>
      <div class="prel" v-if="isLoaded">
        <div class="slide__prell">
          <preload></preload>
        </div>
      </div>
      <div class="slide__prell" v-else></div>
    </div>
  </Transition>
</template>

<script>
import AppInput from "@/components/UI/AppInput.vue";
import btn from "@/components/greetings/button-table.vue";
import preload from "@/components/greetings/preload/pre-load.vue";
import { signIn } from "@/api/signIn";
import { resendverification } from "@/api/resend-verification-code"
import { useUserStore } from "@/stores/UserStore";

export default {
  data() {
    return {
      email: "",
      btntitle: "Отримати код",
      isLoaded: false,
      IsActive: false,
      test: 'go'
    };
  },
  components: {
    AppInput,
    btn,
    preload,
  },
  computed: {
    isNextDisabled() {
      return !this.email;
    },
  },
  methods: {
  async requestemail() {
    this.isLoaded = true;
    this.IsActive = !this.IsActive;  
    let condition = 'default';
    try {
      const response = await signIn(this.email);
      if (response.status === false) {
        if (response.error.response && response.error.response.status === 401 && this.test === 'go1') {
          condition = 'showbtn2'
          this.$router.push({ name: 'getAcquaintance', query: { condition }})
        } else if (response.error.response && response.error.response.status === 400 && this.test === 'go') {
          await resendverification(this.email)
          condition = 'showbtn1'
          this.$router.push({name:'regist', query: { condition }})
        } 
      } else if (response.status === true) {
        await signIn(this.email)
        condition = 'showbtn2'
        this.$router.push({name:'regist', query: { condition }})
      }
    } catch (error) {
      console.error('Произошла ошибка:', error.message || error);
    } finally {
      useUserStore().setEmail(this.email);
      this.isLoaded = false;  
    }
  }
},
watch: {
    IsActive(value) {
      if (value) {
        document.querySelector(".slide").classList.add("active");
        document.querySelector(".content-container").classList.add("load");
      } else {
        document.querySelector(".slide").classList.remove("active");
        document.querySelector(".content-container").classList.remove("load");
      }
    },
  },
};
</script>
