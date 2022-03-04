import type { PaginationInfo } from 'naive-ui'
import { cloneDeep } from 'lodash'
import { reactive, ref } from 'vue'

export const useDataTable = ({ fetch, params }: any) => {
  const loading = ref(false)
  const data = ref([])
  const pagination: PaginationInfo = reactive({
    startIndex: 0,
    endIndex: 0,
    showSizePicker: true,
    page: 1,
    pageSize: 10,
    pageSizes: [10, 20, 30, 40, 50, 100],
    pageCount: 1,
    pageSlot: 7,
    itemCount: 0,
    prefix: (PaginationInfo: PaginationInfo) => <div>共 {PaginationInfo.itemCount} 条</div>
  })
  const sorter = reactive({
    sorter: false,
    order: false,
    columnKey: ''
  })
  const defaultParams = reactive(cloneDeep(params))

  const load: () => Promise<any> = () => {
    loading.value = true

    const searchParams = {
      // 分页条件
      page: pagination.page,
      rows: pagination.pageSize,
      // 排序条件
      sortOrder: sorter.order ? sorter.order : undefined,
      sortBy: sorter.order ? sorter.columnKey : undefined,
      // 初始条件
      ...params
    }

    return fetch(searchParams)
      .then((source: any) => {
        data.value = source.data.rows || source.data.records || source.data
        pagination.itemCount = source.data.total
      })
      .finally(() => {
        loading.value = false
      })
  }

  const reload = () => {
    pagination.page = 1

    return load()
  }

  const reset = () => {
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        params[key] = defaultParams[key]
      }
    }

    return load()
  }

  const handlePageChange = (page: number): void => {
    pagination.page = page

    load()
  }

  const handlePageSizeChange = (pageSize: number): void => {
    pagination.pageSize = pageSize

    load()
  }

  const handleSorterChange = (sort: { sorter: boolean; order: boolean; columnKey: string }) => {
    sorter.sorter = sort.sorter
    sorter.order = sort.order
    sorter.columnKey = sort.columnKey

    load()
  }

  return {
    loading,
    data,
    pagination,

    reset,
    load,
    reload,
    handlePageChange,
    handlePageSizeChange,
    handleSorterChange
  }
}
