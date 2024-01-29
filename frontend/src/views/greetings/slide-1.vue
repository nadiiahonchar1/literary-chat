<template>
  <lab />
</template>
<script>
import lab from "@/components/greetings/icon/K-lab.vue";
export default {
  components: {
    lab,
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("slide2");
    }, 2000);
  },
};
</script>
