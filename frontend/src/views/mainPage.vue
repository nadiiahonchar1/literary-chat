<template>
  <div class="chat-list">
    <div v-for="chat in chats" :key="chat.id" class="chat-item">
      <router-link :to="`/${chat.iconName}`">
        <img
          :src="require(`@/assets/icons/${chat.iconName}.svg`)"
          :alt="chat.name"
          class="chat-icon"
        />
        <span>{{ chat.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import chatsList from "@/chat-list.json";

export default {
  data() {
    return {
      chats: chatsList,
    };
  },
};
</script>

<style lang="scss" scoped>
.chat-item {
  margin: 10px;
  text-align: center;
}

.chat-icon {
  width: 50px;
  height: 50px;
}
</style>
