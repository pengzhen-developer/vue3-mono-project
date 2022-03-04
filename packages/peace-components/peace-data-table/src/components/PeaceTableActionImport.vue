<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle>
        <NIcon><ImportOutlined></ImportOutlined></NIcon>
      </NButton>
    </template>

    <span>导入</span>
  </NTooltip>
</template>

<script setup lang="ts">
// TODO

import { ImportOutlined } from '@vicons/antd'
</script>
