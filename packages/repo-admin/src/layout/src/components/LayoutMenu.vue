<template>
  <NMenu
    key-field="routeName"
    label-field="menuName"
    children-field="children"
    :collapsed-icon-size="24"
    :indent="32"
    :expanded-keys="expandedKeys"
    :collapsed="layoutStore.siderCollapse"
    :collapsed-width="layoutStore.siderCollapsedWidth"
    :options="menuOptions"
    :value="value"
    @update:value="handleUpdateValue"
    @update-expanded-keys="handleExpandedKeys" />
</template>

<script setup lang="tsx">
import type { Ref } from 'vue'
import type { MenuMixedOption } from 'naive-ui/lib/menu/src/interface'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NIcon } from 'naive-ui'
import { PeaceSvgIcon } from 'peace-component'
import { arrayToTree } from 'peace-library'
import { useLayout } from '@/store/layout'
import { menus } from '@/mock/menu'

const route = useRoute()
const router = useRouter()
const layoutStore = useLayout()
const menuTree = arrayToTree(menus, { id: 'id', parentId: 'parentId' })
const menuOptions: MenuMixedOption[] = []
const expandedKeys: Ref<Array<string>> = ref([])
const value = ref()

watch(
  () => route.fullPath,
  () => {
    const matchedKeys = route.matched?.map((item) => item.name) as Array<string>
    const matchedKey = route.matched[route.matched.length - 1].name as string

    expandedKeys.value = Array.from(new Set(expandedKeys.value.concat(matchedKeys)))
    value.value = matchedKey
  },
  {
    immediate: true
  }
)

const f = (menuTree: any, menuOptions: Array<MenuMixedOption>) => {
  menuTree.forEach((menu: any) => {
    if (menu.children?.length > 0) {
      const menuOption = {
        menuName: menu.menuName,
        routeName: menu.routeName,
        icon: () => {},
        children: []
      }

      if (menu.menuIcon) {
        menuOption.icon = () => (
          <NIcon>
            <PeaceSvgIcon name={menu.menuIcon}></PeaceSvgIcon>
          </NIcon>
        )
      }

      menuOptions.push(menuOption)

      f(menu.children, menuOption.children)
    } else {
      const menuOption = {
        menuName: menu.menuName,
        routeName: menu.routeName,
        icon: () => {}
      }

      if (menu.menuIcon) {
        menuOption.icon = () => (
          <NIcon>
            <PeaceSvgIcon name={menu.menuIcon}></PeaceSvgIcon>
          </NIcon>
        )
      }

      menuOptions.push(menuOption)
    }
  })
}

f(menuTree, menuOptions)

const handleUpdateValue = (key: string) => {
  router.push({ name: key })
}

const handleExpandedKeys = (keys: Array<string>) => {
  expandedKeys.value = keys
}
</script>
