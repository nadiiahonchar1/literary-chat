import { createRouter, createWebHistory } from 'vue-router';
import app from '../App.vue';
import slide1 from '@/views/greetings/slide-1.vue';
import slide2 from '@/views/greetings/slide-2.vue';
import slide3 from '@/views/greetings/slide-3.vue';
import slide4 from '@/views/greetings/slide-4.vue';
import getAcquaintance from "@/views/greetings/getAcquaintance.vue";


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
        path: "get-acquaintance",
        component: getAcquaintance,
        name: getAcquaintance,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;