<template>
  <div class="modal-backdrop" @click="closeOnBackdropClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    closeOnBackdropClick(event) {
      if (event.target.classList.contains("modal-backdrop")) {
        this.$emit("close");
      }
    },
  },
};
</script>
