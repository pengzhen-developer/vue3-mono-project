<template>
  <ApplicationDarkMode>
    <LayoutLogo class="flex items-center h-16 px-4 shadow-sm"></LayoutLogo>
    <LayoutMenu class="flex-auto"></LayoutMenu>
  </ApplicationDarkMode>
</template>

<script setup lang="ts">
import { ApplicationDarkMode } from '@/components'
import LayoutLogo from './LayoutLogo.vue'
import LayoutMenu from './LayoutMenu.vue'
</script>

<style scoped></style>
