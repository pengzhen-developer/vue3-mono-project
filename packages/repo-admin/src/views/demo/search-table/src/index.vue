<template>
  <NSpace vertical>
    <NCard content-style="padding-bottom: 0">
      <PeaceResponsiveForm>
        <NForm inline label-placement="left" label-width="auto" @keyup.enter.prevent="loadData">
          <NFormItem label="栏位"> <NInput v-model:value="model.id"></NInput> </NFormItem>
          <NFormItem label="栏位"> <NSelect v-model:value="model.name"></NSelect> </NFormItem>
          <NFormItem label="栏位"> <NInput></NInput> </NFormItem>
          <NFormItem label="栏位"> <NSelect></NSelect> </NFormItem>
          <NFormItem label="栏位"> <NInput></NInput> </NFormItem>
          <NFormItem label="栏位"> <NSelect></NSelect> </NFormItem>
          <NFormItem label="栏位"> <NInput></NInput> </NFormItem>
          <NFormItem label="栏位"> <NSelect></NSelect> </NFormItem>
          <NFormItem label="栏位"> <NInput></NInput> </NFormItem>
          <NFormItem label="栏位"> <NSelect></NSelect> </NFormItem>
          <NFormItem label="栏位"> <NInput></NInput> </NFormItem>
          <NFormItem label="栏位"> <NSelect></NSelect> </NFormItem>
        </NForm>

        <template #suffix="{ collapsed, toggleCollapsed }">
          <NFormItem label="">
            <NSpace>
              <NButton type="primary" @click="loadData">Search</NButton>
              <NButton @click="reset">Reset</NButton>
              <NButton circle quaternary @click="toggleCollapsed">
                <NIcon>
                  <DownOutlined v-if="collapsed"></DownOutlined>
                  <UpOutlined v-else></UpOutlined>
                </NIcon>
              </NButton>
            </NSpace>
          </NFormItem>
        </template>
      </PeaceResponsiveForm>
    </NCard>

    <NCard>
      <template #header>
        <NSpace>
          <NButton type="primary">新增</NButton>
          <NButton>删除</NButton>
        </NSpace>
      </template>
      <NDataTable
        :remote="true"
        :loading="loading"
        :columns="columns"
        :data="data"
        :pagination="pagination"
        @update:sorter="handleSorterChange"
        @update:page="handlePageChange"
        @update:page-size="handlePageSizeChange"
      ></NDataTable></NCard
  ></NSpace>
</template>

<script setup lang="tsx">
import { onMounted, reactive } from 'vue'
import { NDataTable, NForm, NFormItem, NSpace, NButton, NInput, NSelect, NIcon, NCard, NImage } from 'naive-ui'
import { DownOutlined, UpOutlined } from '@vicons/antd'
import { PeaceResponsiveForm } from 'peace-component'
import { useTable } from 'peace-library'
import { systemUser } from './service/index'

const model = reactive({
  id: '1',
  name: '2'
})
const columns = reactive([
  { title: 'id', key: 'id', sorter: true },
  { title: 'name', key: 'name', sorter: true },
  {
    title: 'avatar',
    key: 'avatar',
    render: (rowData: object) => <NImage width="40" class="rounded-full" src={rowData.avatar}></NImage>
  },
  {
    title: '操作',
    key: 'action',
    fixed: 'right',
    width: 240,
    render: (rowData: object) => (
      <NSpace>
        <NButton>操作1</NButton>
        <NButton>操作1</NButton>
        <NButton>操作1</NButton>
      </NSpace>
    )
  }
])

const { loading, data, pagination, reset, loadData, handlePageChange, handlePageSizeChange, handleSorterChange } = useTable({
  fetch: systemUser,
  params: model
})

onMounted(() => {
  loadData()
})
</script>
