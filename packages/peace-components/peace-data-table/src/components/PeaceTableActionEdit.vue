<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle @click="handleEdit">
        <NIcon><EditOutlined></EditOutlined></NIcon>
      </NButton>
    </template>

    <span>编辑</span>
  </NTooltip>
</template>

<script setup lang="ts">
import { EditOutlined } from '@vicons/antd'

const emit = defineEmits(['click'])

const handleEdit = () => {
  emit('click')
}
</script>
