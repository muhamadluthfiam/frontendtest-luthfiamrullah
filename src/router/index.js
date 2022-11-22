import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AkunToko from '../views/AkunToko.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/toko',
      name: 'toko',
      children: [
        {
            path: 'akun-toko',
            name: 'AkunToko',
            component: AkunToko,
        },
      ]
    }
  ]
})

export default router
