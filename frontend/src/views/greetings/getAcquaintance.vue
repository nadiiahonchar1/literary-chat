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
          <p class="acquaintance__caption">
            Додаткову інформацію ти завжди зможеш внести в особистому кабінеті.
          </p>
          <form @submit.prevent="submitHandler">
            <app-input label="Нікнейм" v-model.trim="nikname"></app-input>
            <p class="acquaintance__explanation">
              Нікнейм може містити лише латинські літери і цифри.
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
    </div>
  </Transition>
</template>

<script>
import AppInput from "@/components/UI/AppInput.vue";
import btn from "@/components/greetings/button-table.vue";

export default {
  data() {
    return {
      nikname: "",
      buttonTitle: "Зберегти та увійти в чат",
      buttonskip: "Скасувати",
    };
  },
  components: {
    AppInput,
    btn,
  },
  methods: {
    skipall() {
      this.nikname = "";
    },
    submitHandler() {
      if (this.nikname) {
        console.group("Form Data");
        console.log("Name", this.nikname);
        console.groupEnd();
        this.$router.push("#");
      }
    },
  },
  computed: {
    isNextDisabled() {
      return !this.nikname;
    },
  },
};
</script>

<style lang="scss" scoped></style>
