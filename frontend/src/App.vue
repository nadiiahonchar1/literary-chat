<template id="app" v-cloak>
  <router-view></router-view>
</template>

<script>
import slide1 from '@/views/greetings/slide-1.vue';

export default {
  data() {
    return {
      currentpage: slide1,
    };
  }
}
</script>