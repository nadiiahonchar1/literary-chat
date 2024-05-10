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
              class="original-photo"
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
import AppModal from "@/components/UI/Modal/AppModal.vue";
import AppInput from "@/components/UI/AppInput.vue";
import AppArea from "@/components/UI/AppArea.vue";
import btn from "@/components/greetings/button-table.vue";
import { addDescription } from "@/api/addDescription";
import { getUser } from "@/api/getUser";
import { getPhoto } from "@/api/getPhoto";
import { useUserStore } from "@/stores/UserStore";

export default {
  components: {
    ButtonWithIcon,
    AppModal,
    AppInput,
    AppArea,
    btn,
  },
  data() {
    return {
      backIcon: "@/assets/icons/back-arrow.svg",
      modal: false,
      buttonTitle: "Зберегти зміни",
      buttonskip: "Скасувати",
    };
  },
  methods: {
    goBack() {
      // window.history.back();
      this.$router.push("main");
    },
    skipall() {
      this.name = "";
      this.aboutYou = "";
    },
    handleModalClose() {
      this.modal = false;
      this.profilePhoto = useUserStore().photo || null;
    },
    async submitHandler() {
      if (this.name && this.aboutYou) {
        useUserStore().setName(this.name);
        useUserStore().setDescription(this.aboutYou);
        try {
          await addDescription(this.name, this.aboutYou);
        } catch (erorr) {
          console.error(erorr);
        }
      }
    },
    async getUserData() {
      try {
        const response = await getUser();
        useUserStore().setId(response.data.id);
        useUserStore().setNikname(response.data.username);
        useUserStore().setName(response.data.nickname);
        useUserStore().setEmail(response.data.email);
        // useUserStore().setDescription(response.data.description);
      } catch (error) {
        console.error(error);
      } finally {
        this.getUserImg();
      }
    },
    async getUserImg() {
      try {
        const response = await getPhoto(useUserStore().id);
        useUserStore().setPhoto(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    isNextDisabled() {
      return !(this.name && this.aboutYou);
    },
    yourNickname() {
      return useUserStore().nikname || "@yourNickname";
    },
    name: {
      get() {
        return useUserStore().name || "";
      },
      set(value) {
        useUserStore().setName(value);
      },
    },
    aboutYou: {
      get() {
        return useUserStore().description || "";
      },
      set(value) {
        useUserStore().setDescription(value);
      },
    },
    profilePhoto() {
      return useUserStore().photo || null;
    },
  },
  mounted() {
    this.getUserData();
  },
};
</script>

<style lang="scss" scoped></style>
