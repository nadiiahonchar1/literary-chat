<template>
  <div class="slide container" v-cloak>
    <div class="content-container">
      <div class="background-onbording background-onbording-second">
        <img
          class="girl-with-book"
          src="@/assets/img/girl-with-book.svg"
          alt="Дівчина захоплено читає книгу"
        />
      </div>
      <div class="slide__text">
        <div class="slide__tittle h2">ВІДКРИВАЙ</div>
        <div class="slide__description h3">молодих авторів</div>
      </div>
    </div>
    <div class="btn-container">
      <btn
        :title="buttonTitle"
        @click="nextpage"
        @skip-all="skipall"
        :skiptext="buttonskip"
      />
      <page-indicator :totalPages="3" :currentPage="2"></page-indicator>
    </div>
  </div>
</template>
<script>
import btn from "@/components/greetings/button-table.vue";
import PageIndicator from "@/components/UI/PageIndicator.vue";
export default {
  components: {
    btn,
    PageIndicator,
  },
  data() {
    return {
      buttonTitle: "... і ще більше...",
      buttonskip: "Пропустити",
    };
  },
  methods: {
    nextpage() {
      this.$router.push("slide4");
    },
    skipall() {
      this.$router.push("#");
    },
  },
};
</script>
