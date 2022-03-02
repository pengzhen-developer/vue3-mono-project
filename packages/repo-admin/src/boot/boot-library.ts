import type { App } from 'vue'
import { useAxios } from 'peace-library'

// export boot install function
// async is optional
export default async function (app: App<Element>, configuration: Object) {
  useAxios()
}
