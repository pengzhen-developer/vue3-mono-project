<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle @click="handleAdd">
        <NIcon><PlusOutlined></PlusOutlined></NIcon>
      </NButton>
    </template>

    <span>新增</span>
  </NTooltip>
</template>

<script setup lang="ts">
import { PlusOutlined } from '@vicons/antd'

const emit = defineEmits(['click'])

const handleAdd = () => {
  emit('click')
}
</script>
