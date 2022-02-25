import { defineStore } from 'pinia'

type RootState = {
  size: 'small' | 'medium' | 'large'
  columns: any
}

export const useTableStore = defineStore('table', {
  state: () =>
    ({
      size: 'medium',
      columns: []
    } as RootState),

  actions: {
    setColumns(columns: any) {
      this.columns = columns
    }
  }
})
