<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle @click="handleReset">
        <NIcon><ReloadOutlined></ReloadOutlined></NIcon>
      </NButton>
    </template>

    <span>重置</span>
  </NTooltip>
</template>

<script setup lang="ts">
import { ReloadOutlined } from '@vicons/antd'

const emit = defineEmits(['click'])

const handleReset = () => {
  emit('click')
}
</script>
