<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <div>
        <NDropdown trigger="click" placement="bottom-end" :show-arrow="true" :options="options" @select="handleSelect">
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
import type { PropType } from 'vue'
import { ColumnHeightOutlined } from '@vicons/antd'

type TSize = 'small' | 'medium' | 'large' | undefined

const props = defineProps({
  size: String as PropType<TSize>
})

const emit = defineEmits(['update:size'])

const options = [
  { label: '紧凑', key: 'small' },
  { label: '适中', key: 'medium' },
  { label: '宽松', key: 'large' }
]

const handleSelect = (size: 'small' | 'medium' | 'large') => {
  emit('update:size', size)
}
</script>
