<template>
  <NCard>
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

        <template #suffix>
          <NFormItem>
            <NSpace>
              <NButton>Search</NButton>
              <NButton>Reset</NButton>
            </NSpace>
          </NFormItem>
        </template>
      </PeaceResponsiveForm>
    </NSpace>
  </NCard>
</template>

<script setup lang="ts">
import { PeaceResponsiveForm } from 'peace-component'
</script>
