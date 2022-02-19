<template>
  <NSpace vertical :size="16">
    <NAlert :show-icon="false" type="info"> 响应式表单，尝试调整屏幕大小 </NAlert>

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
            <NButton>Search</NButton>
            <NButton>Reset</NButton>
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
  </NSpace>
</template>

<script setup lang="ts">
import { PeaceResponsiveForm } from 'peace-component'
import { NForm, NFormItem, NSpace, NButton, NInput, NSelect, NIcon, NAlert } from 'naive-ui'
import { DownOutlined, UpOutlined } from '@vicons/antd'
</script>
