<template>
  <ApplicationDarkMode class="h-full p-4 overflow-hidden dark:bg-neutral-900">
    <RouterView></RouterView>
  </ApplicationDarkMode>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
