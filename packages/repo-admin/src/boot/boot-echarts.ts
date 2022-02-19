import type { App } from 'vue'

import { registerTheme } from 'echarts'
import macarons from './echarts.macarons.json'
import chalk from './echarts.chalk.json'

// export boot install function
// async is optional
export default async function (app: App<Element>, configuration: Object) {
  registerTheme(macarons.themeName, macarons.theme)
  registerTheme(chalk.themeName, chalk.theme)
}
