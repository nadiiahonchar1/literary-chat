<template>
  <div class="slide container" v-cloak>
    <div class="content-container">
      <div class="background-onbording background-onbording-first">
        <img
          class="girl-one"
          src="@/assets/img/girl1.svg"
          alt="Дівчина що читає книгу"
        />
        <img
          class="girl-two"
          src="@/assets/img/girl2.svg"
          alt="Дівчина що розмірковує над книгою"
        />
      </div>
      <div class="slide__text">
        <div class="slide__tittle h2">ОБГОВОРЮЙ</div>
        <div class="slide__description h3">прочитані книги українською</div>
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
import btn from "@/components/greetings/button-table.vue";
import PageIndicator from "@/components/UI/PageIndicator.vue";
export default {
  components: {
    btn,
    PageIndicator,
  },
  data() {
    return {
      buttonTitle: "Дізнатися більше",
      buttonskip: "Пропустити",
    };
  },
  methods: {
    nextpage() {
      this.$router.push("slide3");
    },
    skipall() {
      this.$router.push("#");
    },
  },
};
</script>
