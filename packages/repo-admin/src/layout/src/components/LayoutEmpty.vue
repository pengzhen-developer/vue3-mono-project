<template>
  <ApplicationDarkMode class="h-full p-4 overflow-hidden shadow-sm dark:shadow-gray-800 dark:bg-neutral-900">
    <RouterView></RouterView>
  </ApplicationDarkMode>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ApplicationDarkMode } from '@/components'
</script>
