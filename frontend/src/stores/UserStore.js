import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    email: "",
    nikname: "",
    name: "",
    photo: "",
    description: "",
    id: null,
  }),
  getters: {
    // loggedIn: (state) => state.id !== null,
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
    setName(newValue) {
      this.name = newValue;
    },
    setId(newId) {
      this.id = newId;
    },
    setEmail(newEmail) {
      this.email = newEmail;
    },
    setDescription(newValue) {
      this.description = newValue;
    },
    setPhoto(newValue) {
      this.photo = newValue;
    },
  },
});