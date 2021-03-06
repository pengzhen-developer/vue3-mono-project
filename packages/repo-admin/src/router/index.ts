import { createRouter, createWebHistory } from 'vue-router'
import { dynamicRoutes } from './create-dynamic-router'
import { staticRoutes } from './create-static-router'

const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes.concat(dynamicRoutes),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
