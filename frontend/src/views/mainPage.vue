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
            <!-- <img
              :src="require(`@/assets/icons/${chat.iconName}.svg`)"
              :alt="chat.name"
              class="chat-icon"
            /> -->
            <svg class="chat-icon" width="40" height="40" viewBox="0 0 40 40">
              <use
                :xlink:href="
                  require('@/assets/icons/chatIcons.svg') + '#' + chat.iconName
                "
              ></use>
            </svg>
          </div>
          <span class="chat-name">{{ chat.name }}</span>
          <p v-if="!chat.numberOfPersons">Тут поки що нічого немає.</p>
          <div v-if="chat.numberOfPersons">
            <img
              :src="require(`@/assets/icons/person.svg`)"
              :alt="chat.name"
              class="chat-icon"
            />
            <span>{{ chat.numberOfPersons }}</span>
          </div>
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
