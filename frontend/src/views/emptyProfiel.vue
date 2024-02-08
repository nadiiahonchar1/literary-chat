<template>
  <div>
    <header class="container-header header">
      <button-with-icon iconName="back-arrow.svg" @clicked="goBack" />
      <h2>Мій профіль</h2>
    </header>
    <div class="container"></div>
  </div>
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
