import type { App } from 'vue'

import { registerTheme } from 'echarts'
import light from './echarts.light.json'
import dark from './ehcarts.dark.json'

// export boot install function
// async is optional
export default async function (app: App<Element>, configuration: Object) {
  registerTheme(light.themeName, light.theme)
  // registerTheme(dark.themeName, dark.theme)
}
