<template>
  <PeaceLayout
    :min-width="layoutStore.minWidth"
    :fixed-header-and-tab="layoutStore.fixedHeaderAndTab"
    :header-height="layoutStore.headerHeight"
    :tab-visible="layoutStore.tabVisible"
    :tab-height="layoutStore.tabHeight"
    :sider-visible="layoutStore.siderVisible"
    :sider-width="layoutStore.siderWidth"
    :sider-collapsed-width="layoutStore.siderCollapsedWidth"
    :sider-collapse="layoutStore.siderCollapse"
  >
    <template #header> <LayoutHeader></LayoutHeader> </template>
    <template #tab> <LayoutTab></LayoutTab> </template>
    <template #sider> <LayoutSider></LayoutSider> </template>
    <template #default> <LayoutContent></LayoutContent> </template>
    <template #footer> <LayoutFooter></LayoutFooter> </template>
  </PeaceLayout>
</template>

<script lang="ts" setup>
import { useResizeObserver } from '@vueuse/core'
import { useTheme } from '@/store/theme'
import { useLayout } from '@/store/layout'
import { PeaceLayout } from 'peace-component'
import LayoutSider from './components/LayoutSider.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutContent from './components/LayoutContent.vue'
import LayoutTab from './components/LayoutTab.vue'
import LayoutFooter from './components/LayoutFooter.vue'

const layoutStore = useLayout()
const themeStore = useTheme()

themeStore.setTheme()

useResizeObserver(window.document.body, (entries) => {
  const { width } = entries[0].contentRect

  if (width < 1024) {
    layoutStore.siderCollapse = true
  } else {
    layoutStore.siderCollapse = false
  }
})
</script>
