import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    useremail: "",
    nikname: "",
    userName: "",
    userPhoto: "",
    aboutUser: "",
    userId: null,
  }),
  getters: {
    loggedIn: (state) => state.userId !== null,
  },
  actions: {
    clearUser() {
      this.$reset();
    },
    clearNikname() {
      this.nikname = "";
    },
    setNikname(newValue) {
      this.nikname = newValue;
    },
    setId(newId) {
      this.userId = newId;
    }
  },
});