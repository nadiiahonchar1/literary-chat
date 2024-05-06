import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from "@/stores/UserStore";
import { setActivePinia, createPinia } from "pinia";
import app from '../App.vue';
import slide1 from '@/views/greetings/slide-1.vue';
import slide2 from '@/views/greetings/slide-2.vue';
import slide3 from '@/views/greetings/slide-3.vue';
import slide4 from '@/views/greetings/slide-4.vue';
import getAcquaintance from "@/views/greetings/getAcquaintance.vue";
import registFrom from '@/views/greetings/registFrom.vue';
import emptyProfiel from '@/views/emptyProfiel.vue'
import regesit from '@/views/greetings/select-code.vue'

import MainPage from '@/views/mainPage.vue';
import ChatPage from '@/views/chatPage.vue';

const pinia = createPinia();
setActivePinia(pinia);

const routes = [
  {
    path: "/",
    component: app,
    children: [
      {
        path: "",
        component: slide1,
        name: slide1,
      },
      {
        path: "slide2",
        component: slide2,
        name: slide2,
      },
      {
        path: "slide3",
        component: slide3,
        name: slide3,
      },
      {
        path: "slide4",
        component: slide4,
        name: slide4,
      },
      {
        path: "regist-form",
        component: registFrom,
        name: registFrom,
      },
      {
        path: "get-acquaintance",
        component: getAcquaintance,
        name: getAcquaintance,
      },
      {
        path: "profiel",
        component: emptyProfiel,
        name: emptyProfiel,
      },
      {
        path: "registcode",
        component: regesit,
        name: regesit,
      },
      {
        path: "main",
        component: MainPage,
        name: MainPage,
        // meta: { requiresAuth: true },
      },
      {
        path: "/:chatName",
        component: ChatPage,
        name: "ChatPage",
        meta: { requiresAuth: true }, 
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useUserStore(); 
  const isLoggedIn = checkIfUserIsLoggedIn(store); 
  if (to.meta.requiresAuth && !isLoggedIn) {
    next("/"); 
  } else {
    next(); 
  }
});


function checkIfUserIsLoggedIn(store) {
  const id = store.id;
  return id !== null && id !== undefined;
}

export default router;
