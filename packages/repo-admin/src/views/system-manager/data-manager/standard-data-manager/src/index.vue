<template>
  <NSpace :vertical="true">
    <NCard content-style="padding-bottom: 0;">
      <PeaceResponsiveForm>
        <NForm ref="formRef" inline label-placement="left" label-width="auto" label-align="left" :model="model">
          <NFormItem label="值域编码" path="userName"> <NInput v-model:value="model.catalog"></NInput> </NFormItem>
          <NFormItem label="值域名称" path="longField"> <NInput v-model:value="model.catalogDesc"></NInput> </NFormItem>
        </NForm>

        <template #suffix>
          <NButton type="primary">
            <template #icon>
              <NIcon><SearchOutlined /></NIcon>
            </template>
            查询
          </NButton>
        </template>
      </PeaceResponsiveForm>
    </NCard>

    <NCard>
      <PeaceTable ref="dataRef" :columns="columns" :fetch="queryCatalogs" :params="model" :row-key="rowKey">
        <template #header> 标准值域 </template>
      </PeaceTable>
    </NCard>
  </NSpace>
</template>

<script setup lang="tsx">
import type { TableColumns } from 'naive-ui/lib/data-table/src/interface'
import { onMounted, ref } from 'vue'
import { NButton, NSpace } from 'naive-ui'
import { SearchOutlined } from '@vicons/antd'
import { PeaceResponsiveForm, PeaceTable } from 'peace-component'
import { queryCatalogs } from './service/index'

const dataRef = ref()

const model = ref({
  catalog: '',
  catalogDesc: ''
})

const rowKey = (row: any) => row.index
const columns = ref<TableColumns<any>>([
  {
    type: 'expand',
    expandable: () => true,
    renderExpand() {
      return <div>123</div>
    }
  },
  {
    title: '值域代码',
    key: 'catalog'
  },
  {
    title: '值域名称',
    key: 'catalogDesc'
  },
  {
    title: '操作',
    key: 'action',
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
  dataRef.value.loadData()
})
</script>
