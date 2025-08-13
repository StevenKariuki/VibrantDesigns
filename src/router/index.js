import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../Landingpage/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/AboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
