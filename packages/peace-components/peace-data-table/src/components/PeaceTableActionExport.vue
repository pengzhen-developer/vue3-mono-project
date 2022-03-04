<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle>
        <NIcon><ExportOutlined></ExportOutlined></NIcon>
      </NButton>
    </template>

    <span>导出</span>
  </NTooltip>
</template>

<script setup lang="ts">
// TODO

import { ExportOutlined } from '@vicons/antd'
</script>
