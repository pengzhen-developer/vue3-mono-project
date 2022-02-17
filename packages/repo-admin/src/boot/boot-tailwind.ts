import type { App } from 'vue'

// support tailwind css
import './../assets/css/tailwind.css'

// export boot install function
// async is optional
export default async function (app: App<Element>, configuration: Object) {
  // fix naive ui with tailwind.css
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}
