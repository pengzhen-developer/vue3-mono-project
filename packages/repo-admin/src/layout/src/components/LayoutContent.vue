<template>
  <ApplicationDarkMode class="h-full p-4 overflow-hidden bg-gray-100 dark:bg-neutral-900">
    <RouterView></RouterView>
  </ApplicationDarkMode>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
