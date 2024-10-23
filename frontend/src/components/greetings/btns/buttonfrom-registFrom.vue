<template>
  <div class="slide__btn">
    <button class="btn" @click="authentication">
      <div class="btn__title">{{ title }}</div>
    </button>
  </div>
</template>

<script>
import { authentication } from "@/api/authenticationCode";
import { useUserStore } from "@/stores/UserStore";

export default {
  data() {
    return {
      title: 'Увійти',
      isLoaded: false,
      IsActive: false,
      error: false,
      incorrect: false,
    };
  },
  setup() {
    const codeStore = useUserStore(); 
    return { codeStore };
  },
  methods: {
    async authentication() {
      this.isLoaded = true;
      this.IsActive = !this.IsActive;

      try {
        const email = this.codeStore.email; 
        const code = this.codeStore.valueCode.join(''); 
        
        console.log('Submitting code:', code);

        const response = await authentication(email, code);

        if (response.success) {
          this.$router.push("profile");
        } else {
          this.error = true;
          this.incorrect = true;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoaded = false; 
        this.IsActive = false; 
      }
    },
  },
};
</script>
