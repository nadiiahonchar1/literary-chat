<template>
  <div class="chat-list">
    <header class="container-header header">
      <button-with-icon iconName="list.svg" />
      <h2>Кімнати</h2>
      <button-with-icon iconName="search.svg" />
    </header>
    <div class="chat-item container-chat" :key="chatWithId1.id">
      <chat-link :chat-data="chatWithId1" :attached="false" />
    </div>
    <ul class="container-chat">
      <li v-for="chat in attachedChats" :key="chat.id" class="chat-item">
        <chat-link :chat-data="chat" :attached="true" />
      </li>
    </ul>
    <ul class="container-chat">
      <li v-for="chat in unattachedChats" :key="chat.id" class="chat-item">
        <chat-link :chat-data="chat" :attached="false" />
      </li>
    </ul>
  </div>
</template>

<script>
import chatsList from "@/chat-list.json";
import ButtonWithIcon from "@/components/UI/ButtonWithIcon.vue";
import ChatLink from "@/components/UI/ChatLink.vue";

export default {
  components: {
    ButtonWithIcon,
    ChatLink,
  },
  data() {
    return {
      chats: chatsList,
    };
  },
  computed: {
    attachedChats() {
      return this.chats.filter((chat) => chat.attached === true);
    },
    unattachedChats() {
      return this.chats.filter(
        (chat) => chat.attached === false && chat.id !== 1
      );
    },
    chatWithId1() {
      return this.chats.find((chat) => chat.id === 1);
    },
  },
};
</script>

<style lang="scss"></style>
