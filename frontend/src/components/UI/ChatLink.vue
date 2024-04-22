<template>
  <router-link :to="`/${chatData.iconName}`" class="chat-link">
    <div class="name-chat-wrapper">
      <div :class="iconBorderClass">
        <svg :class="iconClass" width="40" height="40" viewBox="0 0 40 40">
          <use :xlink:href="iconPath"></use>
        </svg>
      </div>
      <span :class="chatNameClass">{{ chatData.name }}</span>
    </div>
    <p v-if="!chatData.numberOfPersons">Тут поки що нічого немає.</p>
    <div v-if="chatData.numberOfPersons" class="namber-person-wrapper">
      <img
        :src="require(`@/assets/icons/person.svg`)"
        :alt="chatData.name"
        class="person-icon"
      />
      <div class="number-person-centered">{{ chatData.numberOfPersons }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    chatData: {
      type: Object,
      required: true,
    },
    attached: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    iconBorderClass() {
      return {
        "icon-border": true,
        "icon-border__unattached": !this.attached,
        "icon-border__attached": this.attached,
      };
    },
    iconClass() {
      return {
        "chat-icon": true,
        "chat-icon__unattached": !this.attached,
        "chat-icon__attached": this.attached,
      };
    },
    chatNameClass() {
      return {
        "chat-name": true,
        "chat-name__unattached": !this.attached,
        "chat-name__attached": this.attached,
      };
    },
    iconPath() {
      return (
        require("@/assets/icons/chatIcons.svg") + "#" + this.chatData.iconName
      );
    },
  },
};
</script>

<style lang="scss"></style>
