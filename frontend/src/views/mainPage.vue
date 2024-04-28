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
import axios from "axios";

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
  methods: {
    async getUser() {
      /*const axiosInstance = axios.create({
        maxRedirects: 0,
      });
      console.log("axiosInstance", axiosInstance.defaults);*/

      try {
        //const response = await axiosInstance.get(
        const response = await axios.get(
          `${process.env.VUE_APP_API_BASE_URL}api/users/me`,
          {
            headers: {
              "api-key": process.env.VUE_APP_API_KEY,
              Accept: "*/*",
              "Content-Type": "application/json",
              "Postman-Token": "8c22fb14-40d9-48d3-a69a-7863e5cc4923",
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );
        console.log("Про мене", response);
      } catch (error) {
        console.error("Я в мі", error);
      }
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
