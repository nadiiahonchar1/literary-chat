<template>
  <header class="container">
    <button-with-icon iconName="back-arrow.svg" @clicked="goBack" />
    <h2>Мій профіль</h2>
    <div class="container"></div>
  </header>
</template>

<script>
import ButtonWithIcon from "@/components/UI/ButtonWithIcon.vue";

export default {
  components: { ButtonWithIcon },
  data() {
    return {
      backIcon: "@/assets/icons/back-arrow.svg",
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
