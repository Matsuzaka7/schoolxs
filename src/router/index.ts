import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/pages/index/index.vue')
  },
  {
    path: '/jour',
    component: () => import('@/pages/jour/index.vue')
  },
  {
    path: '/list',
    component: () => import('@/pages/list/index.vue')
  },
  {
    path: '/forum',
    component: () => import('@/pages/forum/index.vue')
  },
  {
    path: '/about',
    component: () => import('@/pages/about/index.vue')
  },
  {
    path: '/jourDetails',
    component: () => import('@/pages/jourDetails/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router