<template>
  <div class="slide__btn">
    <button class="btn" :type="firstButtonType" @click="nextpage">
      <div class="btn__title">{{ title }}</div>
    </button>
    <button class="skip" :type="secondButtonType" @click="skip">
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
    firstButtonType: {
      type: String,
      default: "button",
    },
    secondButtonType: {
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
