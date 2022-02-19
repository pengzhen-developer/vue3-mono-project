import type { RouteRecordRaw } from 'vue-router'
import { ExceptionNotFound } from '@/components'
import { Layout } from '@/layout/index'

const staticRoutes: Array<RouteRecordRaw> = [
  {
    name: '/',
    path: '/',
    component: Layout
  },
  {
    name: 'ErrorPage',
    path: '/:path(.*)*',
    component: ExceptionNotFound
  }
]

export { staticRoutes }
