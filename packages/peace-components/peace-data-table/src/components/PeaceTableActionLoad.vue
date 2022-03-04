<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle type="primary" @click="handleLoad">
        <NIcon><SearchOutlined></SearchOutlined></NIcon>
      </NButton>
    </template>

    <span>查询</span>
  </NTooltip>
</template>

<script setup lang="ts">
import { SearchOutlined } from '@vicons/antd'

const emit = defineEmits(['click'])

const handleLoad = () => {
  emit('click')
}
</script>
