<template>
  <ApplicationDarkMode class="flex items-center h-full pl-4 shadow-sm dark:shadow-gray-800">
    <NBreadcrumb>
      <NBreadcrumbItem href="/">
        <NTooltip>
          <template #trigger>
            <NIcon class="cursor-pointer" size="14"> <AppstoreOutlined></AppstoreOutlined> </NIcon>
          </template>
          首页
        </NTooltip>
      </NBreadcrumbItem>
      <NBreadcrumbItem v-for="matched in getRouteMatched()"> {{ matched.meta.menuName }} </NBreadcrumbItem>
    </NBreadcrumb>
  </ApplicationDarkMode>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ApplicationDarkMode } from '@/components'
import { AppstoreOutlined } from '@vicons/antd'

const getRouteMatched = () => {
  const route = useRoute()
  const matched = route.matched
  const matchedFilter = matched.filter((item) => item.meta.menuName)

  return matchedFilter
}
</script>
