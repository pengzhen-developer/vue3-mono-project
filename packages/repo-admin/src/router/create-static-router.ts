import type { RouteRecordRaw } from 'vue-router'
import { ExceptionNotFound } from '@/components'
import { Layout } from '@/layout/index'
import SystemLogin from '@/views/system/system-login/index'

const staticRoutes: Array<RouteRecordRaw> = [
  {
    name: '/',
    path: '/',
    component: Layout
  },
  {
    name: 'login',
    path: '/login',
    component: SystemLogin
  },
  {
    name: 'ErrorPage',
    path: '/:path(.*)*',
    component: ExceptionNotFound
  }
]

export { staticRoutes }
