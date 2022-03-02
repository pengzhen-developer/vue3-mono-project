<template>
  <NCard>
    <NButton @click="alert"></NButton>
    <PeaceTable ref="table" :columns="columns" :fetch="fetch" :params="{}">
      <template #header>
        <NSpace>
          <NButton>新增</NButton>
          <NButton>删除</NButton>
        </NSpace>
      </template>
    </PeaceTable>
  </NCard>
</template>

<script setup lang="tsx">
import type { TableColumns } from 'naive-ui/lib/data-table/src/interface'
import { onMounted, ref } from 'vue'
import { NButton } from 'naive-ui'
import { PeaceTable } from 'peace-component'
import { systemUser as fetch } from './service/index'

const table = ref()

const columns = ref<TableColumns<any>>([
  {
    type: 'selection',
    width: 80
  },
  {
    title: 'id',
    key: 'id',
    width: 240
  },
  {
    title: 'name',
    key: 'name'
  },
  {
    title: '操作',
    key: 'action',
    width: 80,
    render() {
      return <NButton text>操作</NButton>
    }
  }
])

onMounted(() => {
  table.value.loadData()
})
</script>
