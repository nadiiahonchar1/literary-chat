import { defineStore } from "pinia";
import axios from "axios";

// export const useUserStore = defineStore("UserStore", {
//   state: () => ({
//     userEmail: "",
//     userNikname: "",
//     userName: "",
//     userPhoto: "",
//     aboutUser: "",
//     userId: null,
//   }),
//   getters: {
//     loggedIn: (state) => state.userId !== null,
//   },
//   actions: {
//     clearUser() {
//       this.$reset();
//     },
//   },
// });