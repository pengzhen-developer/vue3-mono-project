<template>
  <NSpace vertical>
    <NCard>
      <PeaceUpload></PeaceUpload>
    </NCard>

    <NCard content-style="padding-bottom: 0">
      <PeaceResponsiveForm>
        <NForm inline label-placement="left" label-width="auto">
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
      <NDataTable
        :row-key="rowKey"
        :remote="true"
        :loading="loading"
        :columns="columns"
        :data="data"
        @update:sorter="handleSorterChange"
        @update:page="handlePageChange"
        @update:page-size="handlePageSizeChange"
      ></NDataTable>
    </NCard>
  </NSpace>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { DownOutlined, UpOutlined } from '@vicons/antd'
import { PeaceResponsiveForm, PeaceUpload } from 'peace-component'
import { useTable } from 'peace-library'
import { systemDepartment } from './service/index'

const model = reactive({})
const columns = [{ type: 'selection' }, { title: 'id', key: 'id' }, { title: 'name', key: 'name' }]
const rowKey = (row) => row.id
const current = ref(1)

const { loading, data, loadData, reset, handlePageChange, handlePageSizeChange, handleSorterChange } = useTable({ fetch: systemDepartment, params: model })

onMounted(() => loadData())
</script>
