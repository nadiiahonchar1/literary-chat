<template>
  <Transition name="fade" appear>
    <div v-cloak>
      <header class="container-header header">
        <button-with-icon iconName="back-arrow.svg" @clicked="goBack" />
        <h2>Мій профіль</h2>
      </header>
      <div class="container smmall-top-padding">
        <div class="yout-info">
          <div class="your-photo">
            <img
              v-show="!profilePhoto"
              class="your-photo-icon"
              src="@/assets/icons/book-open-reader.svg"
              alt="Фото вашого профілю"
            />
            <img
              v-show="profilePhoto"
              class="your-photo-icon original-photo"
              :src="profilePhoto"
              alt="Фото вашого профілю"
            />
          </div>
          <p class="your-nickname" v-text="yourNickname"></p>
          <button class="change-photo-button" @click="modal = true">
            Змінити фото
          </button>
          <teleport to="#modal">
            <app-modal v-if="modal" @close="handleModalClose"></app-modal>
          </teleport>
        </div>
        <form class="profiel-form" @submit.prevent="submitHandler">
          <app-input
            class="profiel-input"
            label="Як тебе називати?"
            v-model.trim="name"
          ></app-input>
          <app-area
            class="profiel-area"
            labelareaLabel="Розкажи трішки більше про себе"
            v-model.trim="aboutYou"
          ></app-area>
          <button-icon-text class="saved-button" iconName="saved.svg">
            <div class="button-text-container">
              <span>Збережене</span>
              <span class="button-text-count">{{ savedCount }}</span>
            </div>
          </button-icon-text>
          <button-icon-text class="setting-button" iconName="settings.svg"
            >Налаштування
          </button-icon-text>
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
  </Transition>
</template>

<script>
import ButtonWithIcon from "@/components/UI/ButtonWithIcon.vue";
import AppModal from "@/components/UI/AppModal.vue";
import AppInput from "@/components/UI/AppInput.vue";
import AppArea from "@/components/UI/AppArea.vue";
import btn from "@/components/greetings/button-table.vue";
import ButtonIconText from "@/components/UI/ButtonIconText.vue";

export default {
  components: {
    ButtonWithIcon,
    AppModal,
    AppInput,
    AppArea,
    btn,
    ButtonIconText,
  },
  data() {
    return {
      backIcon: "@/assets/icons/back-arrow.svg",
      yourNickname: localStorage.getItem("nikname") || "@yourNickname",
      modal: false,
      name: "",
      aboutYou: "",
      buttonTitle: "Зберегти зміни",
      buttonskip: "Скасувати",
      savedCount: 0,
      profilePhoto: localStorage.getItem("savedPhoto") || null,
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
    handleModalClose() {
      this.modal = false;
      this.profilePhoto = localStorage.getItem("savedPhoto") || null;
    },
    submitHandler() {
      if (this.name && this.aboutYou) {
        console.group("Form Data");
        console.log("Name", this.name);
        console.log("About", this.aboutYou);
        console.groupEnd();
      }
    },
  },
  computed: {
    isNextDisabled() {
      return !(this.name && this.aboutYou);
    },
  },
};
</script>

<style lang="scss" scoped></style>
