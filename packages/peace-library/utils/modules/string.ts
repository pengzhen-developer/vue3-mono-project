import { name, version } from '../../package.json'

export const sign: (key: string) => string = (key) => {
  return `[${name}]-[${version}]:${key}`
}
