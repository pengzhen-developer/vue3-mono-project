<template>
  <ApplicationDarkMode class="h-full">
    <div class="p-[16px] h-full bg-[#f6f9f8] dark:bg-[#101014] transition duration-300 ease-in-out overflow-hidden">
      <RouterView></RouterView>
    </div>
  </ApplicationDarkMode>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ApplicationDarkMode } from '@/components'
</script>
