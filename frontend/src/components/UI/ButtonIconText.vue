<template>
  <button @click="handleClick" class="btnIconText">
    <div class="img-container">
      <img class="btnIconText__img" :src="iconPath" alt="Icon" />
    </div>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    iconName: String,
  },
  computed: {
    iconPath() {
      return require(`@/assets/icons/${this.iconName}`);
    },
  },
  methods: {
    handleClick() {
      this.$emit("clicked");
    },
  },
};
</script>
