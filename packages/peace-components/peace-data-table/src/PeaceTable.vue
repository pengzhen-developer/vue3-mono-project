<template>
  <NDataTable
    ref="table"
    :remote="true"
    :data="data"
    :loading="loading"
    :pagination="pagination"
    v-bind="bindProps"
    @update:sorter="handleSorterChange"
    @update:page="handlePageChange"
    @update:page-size="handlePageSizeChange"></NDataTable>
</template>

<script setup lang="tsx">
import type { PropType } from 'vue'
import type { TableColumns } from 'naive-ui/lib/data-table/src/interface'
import { computed, ref } from 'vue'
import { useDataTable } from 'peace-library'

const table = ref()

const props = defineProps({
  columns: Array as PropType<TableColumns<any>>,
  rowKey: Function as PropType<(rowData: object) => number | string>,
  fetch: Function as PropType<(...arg: any[]) => Promise<any>>,
  params: Object as PropType<any>
})

const { loading, data, pagination, load, reload, reset, handlePageChange, handlePageSizeChange, handleSorterChange } = useDataTable({
  fetch: props.fetch,
  params: props.params
})

const bindProps = computed(() => {
  return {
    ...props,

    handlePageChange,
    handlePageSizeChange,
    handleSorterChange
  }
})

defineExpose({
  load,
  reload,
  reset,

  table
})
</script>
