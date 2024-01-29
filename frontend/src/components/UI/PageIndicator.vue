<template>
  <div class="page-indicator">
    <div
      v-for="circle, index in circles"
      :key="index"
      :class="{ 'active': index + 1 === currentPage }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    circles() {
      return Array(this.totalPages).fill("");
    },
  },
};
</script>

<style scoped>
.page-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}

.page-indicator div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--disabled-button-color, #d7d8d8);
  margin: 0 8px;
}

.page-indicator div.active {
  background-color: var(--main-button-color, #6792c1);
  width: 30px;
  border-radius: 8px;
}
</style>
