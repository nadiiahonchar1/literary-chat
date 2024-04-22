<template>
  <button @click="handleClick" class="btnIcon">
    <img :src="iconPath" alt="Icon" />
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
