<template>
  <ApplicationDarkMode class="flex items-center h-full pl-4 shadow-sm dark:shadow-gray-800">
    <NBreadcrumb>
      <NBreadcrumbItem v-for="name in getRouteMatchedNames()"> {{ name }} </NBreadcrumbItem>
    </NBreadcrumb>
  </ApplicationDarkMode>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ApplicationDarkMode } from '@/components'

const getRouteMatchedNames = () => {
  const route = useRoute()
  const matched = route.matched
  return matched.filter((item) => item.meta.menuName).map((item) => item.meta.menuName)
}
</script>
