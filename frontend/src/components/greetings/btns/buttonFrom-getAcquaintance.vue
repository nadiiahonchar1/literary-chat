<template>
  <div class="slide__btn">
    <button class="btn" @click="submitAllData">
      <div class="btn__title">{{ title }}</div>
    </button>
  </div>
</template>

<script>
import { submitAllData } from "@/api/getVerify";
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
    async submitAllData() {
      this.isLoaded = true;
      this.IsActive = !this.IsActive;

      try {
        const email = this.codeStore.email; 
        const code = this.codeStore.valueCode.join(''); 

       
        const response = await submitAllData(email, code);

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
