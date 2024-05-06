<template>
  <Transition name="fade" appear>
    <div class="slide container" v-cloak>
      <div class="content-container">
        <div class="background-onbording background-onbording-sixth">
          <img
            class="get-acquainted"
            src="@/assets/img/get-acquainted.svg"
            alt="Застосунок готовий познайомитись з вами"
          />
        </div>
        <div class="slide__text acquaintance__text">
          <h2 class="acquaintance__tittle">Познайомимося?</h2>
          <h3 class="acquaintance__description">
            Придумай унікальний нікнейм, <br />
            за яким тебе можуть знайти однодумці.
          </h3>
          <form @submit.prevent="submitAllData">
            <app-input
              label="Нікнейм"
              v-model.trim="nikname"
              :error="nicknameError"
            ></app-input>
            <p
              class="acquaintance__explanation"
              :class="{ 'text-hidden': nicknameError }"
            >
              Лише латинські літери і цифри.
            </p>
            <div class="btn-container">
              <btn
                :title="buttonTitle"
                @skip-all="skipall"
                :skiptext="buttonskip"
                firstButtonType="submit"
                :first-button-disabled="isNextDisabled"
              />
            </div>
          </form>
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
import { submitAllData } from "@/api/signUp";
import { useUserStore } from "@/stores/UserStore";

export default {
  data() {
    return {
      nikname: "",
      buttonTitle: "Зберегти та увійти",
      buttonskip: "",
      nicknameError: false,
      isLoaded: false,
      IsActive: false,
    };
  },
  components: {
    AppInput,
    btn,
    preload,
  },
  computed: {
    isNextDisabled() {
      if (!this.nikname) {
        this.skipError();
        return true;
      } else {
        if (!/^[a-zA-Z0-9]+$/.test(this.nikname)) {
          this.setErrorMessage();
          return true;
        }
      }
      this.skipError();
      return false;
    },
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
  methods: {
    skipall() {
      this.nikname = "";
    },
    skipError() {
      this.nicknameError = "";
    },
    niknameValidate() {
      return /^[a-zA-Z0-9]+$/.test(this.nikname);
    },
    setErrorMessage() {
      this.nicknameError = "Лише латинські літери і цифри.";
    },
    async submitAllData() {
      useUserStore().setNikname(this.nikname);
      console.log("useUserStore().nikname", useUserStore().nikname);
      try {
        const response = await submitAllData(this.nikname);
        if (response.success) {
          this.isLoaded = false;
          this.$router.push("registcode");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
