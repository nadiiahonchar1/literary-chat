<template>
  <div>
    <h1>{{ chatHeader }}</h1>
    <div v-if="messages.length > 0">
      <div v-for="(message, index) in messages" :key="index">
        {{ message }}
      </div>
    </div>
    <div v-else>
      <p>Тут пусто</p>
    </div>
  </div>
</template>

<script>
import chatsList from "@/chat-list.json";

export default {
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
