import { createRouter, createWebHistory } from 'vue-router'
import filmView from '@/views/filmView.vue'
import informationView from '@/views/informationView.vue'
import startView from '@/views/startView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "/",
    name: "start",
    component: startView
  },
  {
    path: "/info",
    name: "information",
    component: informationView
   },
   {
    path: "/film",
    name: "film",
    component: filmView
  }
],
})

export default router
