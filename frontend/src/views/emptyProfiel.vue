<template>
  <div>
    <header class="container-header header">
      <button-with-icon iconName="back-arrow.svg" @clicked="goBack" />
      <h2>Мій профіль</h2>
    </header>
    <div class="container smmall-top-padding">
      <div class="yout-info">
        <div class="your-photo">
          <img
            class="your-photo-icon"
            src="@/assets/icons/book-open-reader.svg"
            alt="Фото вашого профілю"
          />
        </div>
        <p class="your-nickname" v-text="yourNickname"></p>
        <button class="change-photo-button" @click="modal = true">
          Змінити фото
        </button>
        <teleport to="#modal">
          <app-modal v-if="modal" @close="modal = false"></app-modal>
        </teleport>
      </div>
      <form class="profiel-form" @submit.prevent="submitHandler">
        <app-input
          class="profiel-input"
          label="Як тебе називати?"
          v-model.trim="name"
        ></app-input>
        <app-area
          labelareaLabel="Розкажи трішки більше про себе"
          v-model.trim="aboutYou"
        ></app-area>
        <div class="btn-container">
          <btn
            :title="buttonTitle"
            @skip-all="skipall"
            :skiptext="buttonskip"
            firstButtonType="submit"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonWithIcon from "@/components/UI/ButtonWithIcon.vue";
import AppModal from "@/components/UI/AppModal.vue";
import AppInput from "@/components/UI/AppInput.vue";
import AppArea from "@/components/UI/AppArea.vue";
import btn from "@/components/greetings/button-table.vue";

export default {
  components: { ButtonWithIcon, AppModal, AppInput, AppArea, btn },
  data() {
    return {
      backIcon: "@/assets/icons/back-arrow.svg",
      yourNickname: "@yourNickname",
      modal: false,
      name: "",
      aboutYou: "",
      buttonTitle: "Зберегти зміни",
      buttonskip: "Скасувати",
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    skipall() {
      this.name = "";
      this.aboutYou = "";
    },
    submitHandler() {
      if (this.name && this.aboutYou) {
        // console.group("Form Data");
        console.log("Name", this.name);
        console.log("Name", this.aboutYou);
        // console.groupEnd();
        // this.$router.push("#");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
