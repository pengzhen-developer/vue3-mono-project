<template>
  <div v-if="showAction" class="flex items-center justify-between mb-4">
    <div class="text-lg"><slot name="header"> </slot></div>

    <NSpace>
      <PeaceTableActionReload :loadData="loadData"></PeaceTableActionReload>
      <PeaceTableActionResize></PeaceTableActionResize>
      <PeaceTableActionColumns :columns="columns"></PeaceTableActionColumns>
    </NSpace>
  </div>

  <NDataTable
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
import { computed } from 'vue'
import { useTable } from 'peace-library'
import { useTableStore } from './store/index'
import PeaceTableActionReload from './PeaceTableActionReload.vue'
import PeaceTableActionResize from './PeaceTableActionResize.vue'
import PeaceTableActionColumns from './PeaceTableActionColumns.vue'

const tableStore = useTableStore()

const props = defineProps({
  showAction: { type: Boolean, default: () => true },
  columns: Array as PropType<TableColumns<any>>,
  rowKey: Function as PropType<(rowData: object) => number | string>,
  fetch: Function as PropType<(...arg: any[]) => Promise<any>>,
  params: Object
})

tableStore.columns = props.columns

const { loading, data, pagination, reset, loadData, reloadData, handlePageChange, handlePageSizeChange, handleSorterChange } = useTable({
  fetch: props.fetch,
  params: props.params
})

const bindProps = computed(() => {
  return {
    ...props,

    size: tableStore.size,
    columns: tableStore.columns,

    reset,
    loadData,
    reloadData,
    handlePageChange,
    handlePageSizeChange,
    handleSorterChange
  }
})

defineExpose({
  reset,
  loadData,
  reloadData,
  handlePageChange,
  handlePageSizeChange,
  handleSorterChange
})
</script>
