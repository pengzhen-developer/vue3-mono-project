<template>
  <NConfigProvider :theme="themeStore.naiveTheme" :theme-overrides="themeStore.naiveThemeOverrides" class="h-screen">
    <NLoadingBarProvider>
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <slot></slot>
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { NConfigProvider, NLoadingBarProvider, NDialogProvider, NNotificationProvider, NMessageProvider } from 'naive-ui'
import { useTheme } from '@/store/theme'

const themeStore = useTheme()
</script>
