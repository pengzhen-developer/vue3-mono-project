<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <div>
        <NButton circle @click="loadData">
          <NIcon><ReloadOutlined></ReloadOutlined></NIcon>
        </NButton>
      </div>
    </template>

    <span>刷新</span>
  </NTooltip>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { NTooltip, NIcon } from 'naive-ui'
import { ReloadOutlined } from '@vicons/antd'

defineProps({
  loadData: Function as PropType<(...arg: any[]) => Promise<any>>
})
</script>
