import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

import App from '@/App.vue'
import router from '@/router'

export default async function () {
  const app = createApp(App)
  const store = createPinia()
  store.use(piniaPluginPersist)

  app.use(store)
  app.use(router)

  app.mount('#app')

  return app
}
