<template>
  <ApplicationProvider class="h-screen">
    <RouterView></RouterView>
  </ApplicationProvider>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { useUserStore, useThemeStore } from '@/store'

const userStore = useUserStore()
const themeStore = useThemeStore()

userStore.startup()
themeStore.startup()
</script>
