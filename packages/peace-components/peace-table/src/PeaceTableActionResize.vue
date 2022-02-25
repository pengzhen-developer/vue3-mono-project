<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <div>
        <NDropdown trigger="click" placement="bottom-end" :show-arrow="true" :options="options" @select="onSelect">
          <NButton circle>
            <NIcon><ColumnHeightOutlined></ColumnHeightOutlined></NIcon>
          </NButton>
        </NDropdown>
      </div>
    </template>

    <span>尺寸</span>
  </NTooltip>
</template>

<script setup lang="ts">
import { NTooltip, NIcon } from 'naive-ui'
import { ColumnHeightOutlined } from '@vicons/antd'
import { useTableStore } from './store/index'

const tableStore = useTableStore()

const options = [
  { label: '紧凑', key: 'small' },
  { label: '适中', key: 'medium' },
  { label: '宽松', key: 'large' }
]
const onSelect = (size: 'small' | 'medium' | 'large') => {
  tableStore.size = size
}
</script>
