import type { RouteRecordRaw } from 'vue-router'
import { ExceptionNotFound } from '@/components'
import { Layout } from '@/layout/index'
import NaiveUIDemo from '@/views/demo/naive-ui'

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
