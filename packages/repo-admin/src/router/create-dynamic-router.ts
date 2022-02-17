import type { RouteRecordRaw, RouteComponent } from 'vue-router'
import { menus } from '@/mock/menu'
import { arrayToTree } from 'peace-library'
import { ExceptionUnFinished } from '@/components/application-exception'
import { Layout, LayoutEmpty } from '@/layout'

const modules = import.meta.glob('../views/**/*.vue')
const menuTree = arrayToTree(menus, { id: 'id', parentId: 'parentId' })

/**
 * @description: 创建路由组件
 * @param {string} componentPath
 * @return {*}
 */
const createRouteComponent = (componentPath: string): RouteComponent => {
  if (componentPath) {
    return modules[`../${componentPath}`] || ExceptionUnFinished
  } else {
    return LayoutEmpty
  }
}

/**
 * @description: 创建路由表
 * @param {Array} menus
 * @param {any} parentMenu
 * @return {*}
 */
const createRoute = (menus: Array<any>, parentMenu?: any): Array<RouteRecordRaw> => {
  return menus.map((menu) => {
    if (Array.isArray(menu.children) && menu.children.length > 0) {
      const route: RouteRecordRaw = {
        name: menu.routeName,
        path: parentMenu ? `/${parentMenu.routePath}/${menu.routePath}` : `/${menu.routePath}`,
        component: createRouteComponent(menu.componentPath),
        children: createRoute(menu.children, menu)
      }

      return route
    } else {
      const route: RouteRecordRaw = {
        name: menu.routeName,
        path: parentMenu?.routePath ? `/${parentMenu.routePath}/${menu.routePath}` : `/${menu.routePath}`,
        component: createRouteComponent(menu.componentPath)
      }

      return route
    }
  })
}

const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    name: 'layout',
    path: '/',
    redirect: '/',
    component: Layout,
    children: createRoute(menuTree)
  }
]

export { dynamicRoutes }
