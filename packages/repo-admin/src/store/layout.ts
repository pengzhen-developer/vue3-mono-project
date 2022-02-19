import { defineStore } from 'pinia'

export const useLayout = defineStore('layout', {
  // 开启数据缓存
  persist: {
    enabled: true
  },

  state: () => ({
    minWidth: 640,
    mode: 'vertical',

    fixedHeaderAndTab: true,

    // header
    headerHeight: 64,

    // tab
    tabVisible: true,
    tabHeight: 44,

    // side
    siderVisible: true,
    siderWidth: 240,
    siderCollapse: false,
    siderCollapsedWidth: 60
  }),

  actions: {}
})
