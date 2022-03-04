<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <div>
        <NPopover trigger="click" placement="bottom-end">
          <template #trigger>
            <NButton circle>
              <NIcon><SettingOutlined></SettingOutlined></NIcon>
            </NButton>
          </template>
          <template #header>
            <div>显示列</div>
          </template>
          <div>
            <NCheckboxGroup v-model:value="checkedColumns" @update:value="handleChangeColumn">
              <NSpace vertical>
                <NCheckbox v-for="column in filterColumns" :value="column.key" :label="column.title" />
              </NSpace>
            </NCheckboxGroup>
          </div>
        </NPopover>
      </div>
    </template>

    <span>列配置</span>
  </NTooltip>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { ref } from 'vue'
import { SettingOutlined } from '@vicons/antd'
import { cloneDeep } from 'lodash'

const props = defineProps({
  columns: Array as PropType<DataTableColumns<any>>
})
const emit = defineEmits(['update:columns'])

const cloneColumns = cloneDeep<any>(props.columns)
const filterColumns = cloneColumns.filter((item: any) => item.type !== 'selection')
const checkedColumns = ref(cloneColumns.map((item: any) => item.key))

const handleChangeColumn = (item: any) => {
  const columns = cloneColumns.filter((column: any) => item.includes(column.key))

  emit('update:columns', columns)
}
</script>
