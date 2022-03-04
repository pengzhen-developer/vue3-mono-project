<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle @click="handleDelete">
        <NIcon><DeleteOutlined></DeleteOutlined></NIcon>
      </NButton>
    </template>

    <span>删除</span>
  </NTooltip>
</template>

<script setup lang="ts">
import { DeleteOutlined } from '@vicons/antd'

const emit = defineEmits(['click'])

const handleDelete = () => {
  emit('click')
}
</script>
