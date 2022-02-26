<template>
  <div id="app">
    <h3>Mouse: {{ x }} x {{ y }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
</script>
