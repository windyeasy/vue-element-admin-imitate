import { createRouter, createWebHashHistory } from 'vue-router'

import { ACCOUNT_TOKEN } from '@/store/constants'
import { localCache } from '@/utils/cache'

const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/layout',
    },
    {
      path: '/layout',
      component: () => import('@/layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/home/index.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
    },
  ],
  history: createWebHashHistory(),
})
// 路由守卫
router.beforeEach((to) => {
  const token = localCache.getCache(ACCOUNT_TOKEN)

  if (to.path !== '/login' && !token)
    return '/login'
  if (to.path === '/login' && token)
    return '/layout'
  return true
})
export default router
