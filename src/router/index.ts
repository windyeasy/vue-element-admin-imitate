import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/home',
      component: () => import('@/views/home/index.vue'),
    },
  ],
  history: createWebHashHistory(),
})
