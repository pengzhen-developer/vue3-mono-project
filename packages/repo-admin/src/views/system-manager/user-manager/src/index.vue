<template>
  <NSpace :vertical="true">
    <NCard content-style="padding-bottom: 0;">
      <PeaceResponsiveForm>
        <NForm ref="formRef" inline label-placement="left" label-width="auto" label-align="left" :model="model" :rules="rules">
          <NFormItem label="用户名称" path="userName"> <NInput v-model:value="model.userName"></NInput> </NFormItem>
          <NFormItem label="很长的查询条件" path="longField"> <NInput v-model:value="model.longField"></NInput> </NFormItem>
          <NFormItem label="很长的查询条件" path="longField"> <NInput v-model:value="model.longField"></NInput> </NFormItem>
          <NFormItem label="很长的查询条件" path="longField"> <NInput v-model:value="model.longField"></NInput> </NFormItem>
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
      <PeaceTable :columns="columns" :fetch="fetch" :params="model" :row-key="rowKey">
        <template #header> 科室信息 </template>
      </PeaceTable>
    </NCard>
  </NSpace>
</template>

<script setup lang="ts">
import type { TableColumns } from 'naive-ui/lib/data-table/src/interface'
import { ref } from 'vue'
import { PeaceResponsiveForm, PeaceTable } from 'peace-component'
import { SearchOutlined } from '@vicons/antd'

const fetch = () => {
  return Promise.resolve({
    code: 200,
    message: '',
    data: {
      rows: [
        {
          name: '07akioni',
          index: '07'
        },
        {
          name: '11akioni',
          index: '11'
        }
      ],
      total: 200
    }
  })
}

const formRef = ref()

const model = ref({
  userName: '',
  longField: ''
})
const rules = {
  userName: {
    required: true,
    message: '请输入用户名称',
    trigger: 'blur'
  }
}
const rowKey = (row: any) => row.index
const columns = ref<TableColumns<any>>([
  {
    type: 'selection'
  },
  {
    title: '用户编码',
    key: 'index'
  },
  {
    title: '用户名称',
    key: 'name'
  }
])
</script>
