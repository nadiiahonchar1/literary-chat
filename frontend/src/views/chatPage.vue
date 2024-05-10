<template>
  <div class="chat-list">
    <header class="container-header header">
      <button-with-icon iconName="back-arrow.svg" @clicked="goBack" />
      <h2>{{ chatHeader }}</h2>
      <button-with-icon iconName="search.svg" />
    </header>
    <div class="chat-item container-chat" v-if="messages.length > 0">
      <div v-for="(message, index) in messages" :key="index">
        {{ message }}
      </div>
    </div>
    <div class="chat-item container-chat" v-else>
      <p>Тут пусто</p>
    </div>
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
      chatName: "",
      chatHeader: "",
      messages: [],
      chats: chatsList,
    };
  },
  mounted() {
    this.chatName = this.$route.params.chatName;
    this.fetchMessages(this.chatName);
    this.setChatHeader(this.chatName);
  },
  methods: {
    goBack() {
      // window.history.back();
      this.$router.push("main");
    },
    fetchMessages(chatName) {
      // Виконати запит до API для отримання повідомлень для конкретного чату
      fetch(`https://api/${chatName}`)
        .then((response) => response.json())
        .then((data) => {
          this.messages = data;
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    },
    setChatHeader(chatName) {
      const chat = this.chats.find((chat) => chat.iconName === chatName);
      if (chat) {
        this.chatHeader = chat.name;
      } else {
        console.error("Chat not found in the chats list.");
      }
    },
  },
};
</script>
