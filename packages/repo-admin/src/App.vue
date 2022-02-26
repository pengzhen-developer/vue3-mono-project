<template>
  <ApplicationProvider class="h-screen">
    <RouterView></RouterView>
  </ApplicationProvider>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { useTheme } from '@/store/theme'

const themeStore = useTheme()
themeStore.setTheme()
</script>
