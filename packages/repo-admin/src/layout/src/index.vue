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
    <template #header> <LayoutHeader class="h-full shadow-sm"></LayoutHeader> </template>
    <template #tab> <LayoutTab class="h-full"></LayoutTab> </template>
    <template #sider> <LayoutSider class="h-full shadow-md"></LayoutSider> </template>
    <template #default> <LayoutContent></LayoutContent> </template>
    <template #footer> <LayoutFooter class="h-full"></LayoutFooter> </template>
  </PeaceLayout>
</template>

<script lang="ts" setup>
import { useResizeObserver } from '@vueuse/core'
import { useLayout } from '@/store/layout'
import { PeaceLayout } from 'peace-component'
import LayoutSider from './components/LayoutSider.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutContent from './components/LayoutContent.vue'
import LayoutTab from './components/LayoutTab.vue'
import LayoutFooter from './components/LayoutFooter.vue'

const layoutStore = useLayout()

useResizeObserver(window.document.body, (entries) => {
  const { width } = entries[0].contentRect

  if (width < 1024) {
    layoutStore.siderCollapse = true
  } else {
    layoutStore.siderCollapse = false
  }
})
</script>
