/**
 * Boot files are your "main.ts"
 **/

import createConfiguration from './boot/create-configuration'
import createApp from './boot/create-app'

import bootLibrary from './boot/boot-library'
import bootTailwind from './boot/boot-tailwind'
import bootEcharts from './boot/boot-echarts'

const install = async () => {
  const configuration = await createConfiguration()
  const app = await createApp()

  await bootLibrary(app, configuration)
  await bootEcharts(app, configuration)
  await bootTailwind(app, configuration)
}

install()
