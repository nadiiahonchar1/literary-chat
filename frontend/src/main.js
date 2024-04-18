import { createApp } from 'vue'
// import { createPinia } from "pinia";
import App from './App.vue'
import router from './router';
import './assets/main.scss'

const pinia = createPinia();
// createApp(App).use(router).use(pinia).mount("#app");
createApp(App).use(router).mount("#app");
