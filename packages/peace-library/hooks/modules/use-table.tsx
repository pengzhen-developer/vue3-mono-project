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
    itemCount: NaN,
    prefix: (PaginationInfo: PaginationInfo) => <div>共 {PaginationInfo.itemCount} 条</div>
  })
  const sorter = reactive({
    sorter: false,
    order: false,
    columnKey: ''
  })
  const defaultParams = reactive(cloneDeep(params))

  const loadData: () => Promise<any> = () => {
    loading.value = true

    const searchParams = {
      // 分页条件
      page: pagination.page,
      rows: pagination.pageSize,
      // 排序条件
      order: sorter.order ? sorter.order : undefined,
      orderBy: sorter.order ? sorter.columnKey : undefined,
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

  const handleSorterChange = (sort: { sorter: boolean; order: boolean; columnKey: string }) => {
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
