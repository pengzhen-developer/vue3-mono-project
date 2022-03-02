import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    minWidth: 640,
    mode: 'vertical',

    fixedHeaderAndTab: true,

    // header
    headerHeight: 56,

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
