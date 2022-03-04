<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle>
        <NIcon><PrinterOutlined></PrinterOutlined></NIcon>
      </NButton>
    </template>

    <span>打印</span>
  </NTooltip>
</template>

<script setup lang="ts">
// TODO

import { PrinterOutlined } from '@vicons/antd'
</script>
