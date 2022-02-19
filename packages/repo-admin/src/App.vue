<template>
  <ApplicationProvider class="h-screen"> <RouterView></RouterView></ApplicationProvider>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { ApplicationProvider } from '@/components'
</script>
