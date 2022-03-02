import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  // 开启数据缓存
  persist: {
    enabled: true
  },

  state: () => ({
    user: {}
  }),

  actions: {
    startup() {
      this.setToken()
    },

    setToken() {
      axios.defaults.headers.common['Token'] = (this.user as any).token
    },

    setUserInfo(userInfo: any) {
      this.user = userInfo
    }
  }
})
