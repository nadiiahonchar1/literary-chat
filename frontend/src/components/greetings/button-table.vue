<template>
  <div class="slide__btn">
    <button class="btn" :type="buttonType" @click="nextpage">
      <div class="btn__title">{{ title }}</div>
    </button>
    <button class="skip" @click="skip">
      <div class="skip__text">{{ skiptext }}</div>
    </button>
  </div>
</template>
<script>
import "./button-style.scss";
export default {
  props: {
    title: String,
    skiptext: String,
    buttonType: {
      type: String,
      default: "button",
    },
  },
  emits: ["click", "skip-all"],
  methods: {
    nextpage() {
      this.$emit("click");
    },
    skip() {
      this.$emit("skip-all");
    },
  },
};
</script>
