<template>
  <ApplicationDarkMode class="flex flex-col h-full shadow-md dark:shadow-gray-800">
    <LayoutLogo class="flex items-center h-16 px-4 shadow-sm dark:shadow-gray-800"></LayoutLogo>
    <LayoutMenu class="flex-auto"></LayoutMenu>
  </ApplicationDarkMode>
</template>

<script setup lang="ts">
import { ApplicationDarkMode } from '@/components'
import LayoutLogo from './LayoutLogo.vue'
import LayoutMenu from './LayoutMenu.vue'
</script>

<style scoped></style>
