<template>
  <div class="chat-list">
    <header class="container-header header">
      <button-with-icon iconName="list.svg" />
      <h2>Кімнати</h2>
      <button-with-icon iconName="search.svg" />
    </header>
    <ul class="container-chat">
      <li v-for="chat in chats" :key="chat.id" class="chat-item">
        <router-link :to="`/${chat.iconName}`" class="chat-link">
          <div class="icon-border">
            <img
              :src="require(`@/assets/icons/${chat.iconName}.svg`)"
              :alt="chat.name"
              class="chat-icon"
            />
          </div>
          <span class="chat-name">{{ chat.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import chatsList from "@/chat-list.json";
import ButtonWithIcon from "@/components/UI/ButtonWithIcon.vue";

export default {
  components: {
    ButtonWithIcon,
  },
  data() {
    return {
      chats: chatsList,
    };
  },
};
</script>

<style lang="scss"></style>
