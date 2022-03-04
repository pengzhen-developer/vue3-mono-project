<template>
  <NSpace vertical>
    <template v-if="$slots.form">
      <NCard content-style="padding-bottom: 0;">
        <slot name="form" :loading="loading" :reset="reset" :load="load" :reload="reload"></slot>
      </NCard>
    </template>

    <template v-if="$slots.default">
      <NCard>
        <div class="flex items-center justify-between mb-4">
          <slot name="table-header-left" :data="data" :load="load" :reload="reload"> </slot>
          <slot name="table-header-right" :data="data" :load="load" :reload="reload"></slot>
        </div>

        <slot
          name="default"
          :remote="true"
          :pagination="pagination"
          :loading="loading"
          :data="data"
          :load="load"
          :reset="reset"
          :reload="reload"
          :handlePageChange="handlePageChange"
          :handlePageSizeChange="handlePageSizeChange"
          :handleSorterChange="handleSorterChange"></slot>
      </NCard>
    </template>
  </NSpace>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { useDataTable } from 'peace-library'

const props = defineProps({
  fetch: Function as PropType<(...arg: any[]) => Promise<any>>,
  params: Object as PropType<any>
})

const { loading, data, pagination, reset, load, reload, handlePageChange, handlePageSizeChange, handleSorterChange } = useDataTable({
  fetch: props.fetch,
  params: props.params
})

defineExpose({
  loading,
  data,
  pagination,
  reset,
  load,
  reload,
  handlePageChange,
  handlePageSizeChange,
  handleSorterChange
})
</script>
