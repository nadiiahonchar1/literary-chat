import { createRouter, createWebHistory } from 'vue-router';
import app from '../App.vue';
import slide1 from '@/views/greetings/slide-1.vue';
import slide2 from '@/views/greetings/slide-2.vue';
import slide3 from '@/views/greetings/slide-3.vue';
import slide4 from '@/views/greetings/slide-4.vue';
import getAcquaintance from "@/views/greetings/getAcquaintance.vue";
<<<<<<< HEAD
import registFrom from '@/views/greetings/registFrom.vue';
import emptyProfiel from '@/views/emptyProfiel.vue'
import regesit from '@/views/greetings/select-code.vue'
=======
import emptyProfiel from "@/views/emptyProfiel.vue";
import MainPage from '@/views/mainPage.vue';
import ChatPage from '@/views/chatPage.vue';
>>>>>>> b8d0cc22a883346cde5305ed17219c4ab7812e4a


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
        path: 'regist-form',
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
<<<<<<< HEAD
        path: 'registcode',
        component: regesit,
        name:regesit,

=======
        path: "main",
        component: MainPage,
        name: MainPage,
      },
      {
        path: "/:chatName", 
        component: ChatPage,
        name: "ChatPage",
>>>>>>> b8d0cc22a883346cde5305ed17219c4ab7812e4a
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;