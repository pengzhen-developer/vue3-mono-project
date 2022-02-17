import { defineStore } from 'pinia'

export const useLayout = defineStore('layout', {
  state: () => ({
    minWidth: 800,
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
