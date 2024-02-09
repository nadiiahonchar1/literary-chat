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
    </div>
  </div>
</template>

<script>
import ButtonWithIcon from "@/components/UI/ButtonWithIcon.vue";
import AppModal from "@/components/UI/AppModal.vue";

export default {
  components: { ButtonWithIcon, AppModal },
  data() {
    return {
      backIcon: "@/assets/icons/back-arrow.svg",
      yourNickname: "@yourNickname",
      modal: false,
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style lang="scss" scoped></style>
