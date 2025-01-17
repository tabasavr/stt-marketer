import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PolestarDetailsView from '../views/PolestarDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/h/:id',
      name: 'details',
      component: PolestarDetailsView,
    },
  ],
})

export default router
