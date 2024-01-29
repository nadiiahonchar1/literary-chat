<template>
  <div class="slide container" v-cloak>
    <div class="content-container">
      <div class="background-onbording background-onbording-third">
        <img
          class="boy-with-book"
          src="@/assets/img/boy-with-book.svg"
          alt="Хлопець захоплено читає книгу"
        />
      </div>
      <div class="slide__text">
        <div class="slide__tittle h2">ОБМІНЮЙСЯ</div>
        <div class="slide__description h3">прочитаними книгами</div>
      </div>
    </div>
    <div class="btn-container">
      <btn
        :title="buttonTitle"
        @click="nextpage"
        @skip-all="skipall"
        :skiptext="buttonskip"
      />
      <page-indicator :totalPages="3" :currentPage="3"></page-indicator>
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
      buttonTitle: "Почнемо!",
      buttonskip: "Пропустити",
    };
  },
  methods: {
    nextpage() {
      this.$router.push("get-acquaintance");
    },
    skipall() {
      this.$router.push("#");
    },
  },
};
</script>
