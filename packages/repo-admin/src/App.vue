<template>
  <div class="flex items-center max-w-sm mx-auto mb-4">
    <span class="">App</span>
  </div>

  <div class="flex items-center max-w-sm mx-auto">
    <RouterLink class="underline mr-4" to="/">Home</RouterLink>
    <RouterLink class="underline" to="/about">About</RouterLink>
  </div>

  <div class="flex items-center max-w-sm mx-auto">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
