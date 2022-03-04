<template>
  <n-space vertical>
    {{ value }}
    <n-select v-model:value="value" :options="options" :clearable="true" />
  </n-space>
</template>

<script setup lang="ts">
import type { SelectMixedOption } from 'naive-ui/lib/select/src/interface'
import { ref } from 'vue'

const value = ref()
const options: SelectMixedOption[] = [{ label: '1', value: '2' }]
</script>
