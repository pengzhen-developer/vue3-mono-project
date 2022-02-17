<template>
  <div class="overflow-hidden">
    <img class="w-8 h-8" src="https://www.naiveui.com/assets/naivelogo.93278402.svg" />
    <div class="ml-4 whitespace-nowrap" v-show="!layoutStore.siderCollapse">System Name</div>
  </div>
</template>

<script setup lang="ts">
import { useLayout } from '@/store/layout'

const layoutStore = useLayout()
</script>
