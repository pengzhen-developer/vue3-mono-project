<template>
  <NSpace vertical>
    <NCard content-style="padding-bottom: 0;">
      <PeaceResponsiveForm>
        <NForm ref="formRef" inline label-placement="left" label-width="auto" label-align="left" :model="model" @keyup.enter="load">
          <NFormItem label="值域编码" path="catalog"> <NInput v-model:value="model.catalog"></NInput> </NFormItem>
          <NFormItem label="值域名称" path="catalogDesc"> <NInput v-model:value="model.catalogDesc"></NInput> </NFormItem>
          <NFormItem label="建议条件" path="catalog"> <NInput v-model:value="model.catalog"></NInput> </NFormItem>
          <NFormItem label="值域名称" path="catalogDesc"> <NInput v-model:value="model.catalogDesc"></NInput> </NFormItem>
        </NForm>

        <template #suffix>
          <PeaceTableActionLoad @click="load"></PeaceTableActionLoad>
          <PeaceTableActionReset @click="reset"></PeaceTableActionReset>
        </template>
      </PeaceResponsiveForm>
    </NCard>

    <NCard>
      <div class="flex justify-between items-center mb-4">
        <NSpace>
          <div class="text-lg font-bold">标题</div>
        </NSpace>
        <NSpace>
          <PeaceTableActionAdd></PeaceTableActionAdd>
          <PeaceTableActionEdit></PeaceTableActionEdit>
          <PeaceTableActionDelete></PeaceTableActionDelete>
          <PeaceTableActionImport></PeaceTableActionImport>
          <PeaceTableActionExport></PeaceTableActionExport>
          <PeaceTableActionPrint></PeaceTableActionPrint>
          <PeaceTableActionResize v-model:size="size"></PeaceTableActionResize>
          <PeaceTableActionColumns v-model:columns="columns"></PeaceTableActionColumns>
        </NSpace>
      </div>

      <NDataTable
        remote
        :size="size"
        :row-key="rowKey"
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :loading="loading"
        @update-page="handlePageChange"
        @update-page-size="handlePageSizeChange"
        @update-sorter="handleSorterChange"></NDataTable>
    </NCard>
  </NSpace>
</template>

<script setup lang="tsx">
import { onMounted, ref } from 'vue'
import { NButton, NSpace } from 'naive-ui'
import { useDataTable } from 'peace-library'
import {
  PeaceResponsiveForm,
  PeaceTableActionLoad,
  PeaceTableActionReset,
  PeaceTableActionAdd,
  PeaceTableActionEdit,
  PeaceTableActionDelete,
  PeaceTableActionImport,
  PeaceTableActionExport,
  PeaceTableActionPrint,
  PeaceTableActionResize,
  PeaceTableActionColumns
} from 'peace-components'
import { queryCatalogs } from './service/index'

const size = ref()
const model = ref({ catalog: '', catalogDesc: '' })
const { loading, data, pagination, load, reset, handlePageChange, handlePageSizeChange, handleSorterChange } = useDataTable({
  fetch: queryCatalogs,
  params: model.value
})

const rowKey = (row: any) => row.index
const columns = ref<any>([
  { title: '值域代码', key: 'catalog', width: 240, sorter: true },
  { title: '值域名称', key: 'catalogDesc', sorter: true },
  {
    title: '操作',
    key: 'action',
    fixed: 'right',
    width: 180,
    render() {
      return (
        <NSpace>
          <NButton text>查看</NButton>
          <NButton text>新增</NButton>
          <NButton text>编辑</NButton>
          <NButton text>删除</NButton>
        </NSpace>
      )
    }
  }
])

onMounted(() => {
  load()
})
</script>
