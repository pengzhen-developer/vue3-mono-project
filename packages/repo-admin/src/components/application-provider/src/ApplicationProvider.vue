<template>
  <NConfigProvider :theme="themeStore.naiveTheme" :theme-overrides="themeStore.naiveThemeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <NLoadingBarProvider>
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <ApplicationGlobalProvider>
              <slot></slot>
            </ApplicationGlobalProvider>
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { zhCN, dateZhCN } from 'naive-ui'
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()
</script>
