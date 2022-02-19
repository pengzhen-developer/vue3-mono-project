<template>
  <NDataTable
    :remote="true"
    :loading="loading"
    :columns="columns"
    :data="data"
    :pagination="pagination"
    @update:sorter="handleSorterChange"
    @update:page="handlePageChange"
    @update:page-size="handlePageSizeChange"
  ></NDataTable>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { NDataTable } from 'naive-ui'
import { useTable } from 'peace-library'
import { systemUser } from './service/index'

const params = {
  id: '1',
  name: '2'
}
const columns = [
  { title: 'id', key: 'id', width: '120', sorter: true },
  { title: 'name', key: 'name', width: '120' }
]

const { loading, data, pagination, loadData, handlePageChange, handlePageSizeChange, handleSorterChange } = useTable({ fetch: systemUser, params })

onMounted(() => {
  loadData()
})
</script>
