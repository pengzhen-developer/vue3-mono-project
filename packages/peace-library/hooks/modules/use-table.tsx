import type { PaginationInfo } from 'naive-ui'
import { cloneDeep } from 'lodash'
import { reactive, ref } from 'vue'

export const useTable = ({ fetch, params }: any) => {
  const loading = ref(false)
  const data = ref([])
  const pagination: PaginationInfo = reactive({
    startIndex: NaN,
    endIndex: NaN,
    showSizePicker: true,
    page: 1,
    pageSize: 10,
    pageSizes: [10, 20, 30, 40, 50, 100],
    pageCount: 1,
    pageSlot: 7,
    itemCount: undefined,
    prefix: (PaginationInfo: PaginationInfo) => <div>共 {PaginationInfo.itemCount} 条</div>,
    suffix: (PaginationInfo: PaginationInfo) => undefined
  })
  const sorter = reactive({
    sorter: false,
    order: false,
    columnKey: undefined
  })
  const defaultParams = reactive(cloneDeep(params))

  const loadData = () => {
    loading.value = true

    const searchParams = {
      // 分页条件
      pagination,
      // 排序条件
      sorter,
      // 初始条件
      params
    }

    fetch(searchParams)
      .then((source: any) => {
        data.value = source.data.records || source.data
        pagination.itemCount = source.data.total
      })
      .finally(() => {
        loading.value = false
      })
  }

  const reloadData = () => {
    pagination.page = 1

    loadData()
  }

  const reset = () => {
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        params[key] = defaultParams[key]
      }
    }

    loadData()
  }

  const handlePageChange = (page: number): void => {
    pagination.page = page

    loadData()
  }

  const handlePageSizeChange = (pageSize: number): void => {
    pagination.pageSize = pageSize

    loadData()
  }

  const handleSorterChange = (sort: { sorter: boolean; order: boolean; columnKey: undefined }) => {
    sorter.sorter = sort.sorter
    sorter.order = sort.order
    sorter.columnKey = sort.columnKey

    loadData()
  }

  return {
    loading,
    data,
    pagination,

    reset,
    loadData,
    reloadData,
    handlePageChange,
    handlePageSizeChange,
    handleSorterChange
  }
}
