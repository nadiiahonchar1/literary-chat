<template>
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
        <p class="acquaintance__caption">
          Додаткову інформацію ти завжди зможеш внести в особистому кабінеті.
        </p>
        <form @submit.prevent="submitHandler">
          <app-input label="Нікнейм" v-model.trim="nikname"></app-input>
          <p class="acquaintance__explanation">
            Нікнейм може містити лише латинські літери і цифри.
          </p>
        </form>
      </div>
    </div>
    <div class="btn-container">
      <btn
        :title="buttonTitle"
        @click="nextpage"
        @skip-all="skipall"
        :skiptext="buttonskip"
      />
      <page-indicator :totalPages="3" :currentPage="1"></page-indicator>
    </div>
  </div>
</template>

<script>
import AppInput from "@/components/UI/AppInput.vue";
export default {
  data() {
    return {
      nikname: "",
    };
  },
  components: {
    AppInput,
  },
  methods: {
    submitHandler() {
      if (this.nikname) {
        console.group("Form Data");
        console.log("Name", this.nikname);
        console.groupEnd();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
