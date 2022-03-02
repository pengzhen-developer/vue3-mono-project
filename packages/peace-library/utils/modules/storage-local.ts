import { sign } from './string'
import { getStorage } from './storage-web'

const __LocalStorage = getStorage('local')

export function setLocalStorage(key: string, value: any) {
  key = sign(key)

  return __LocalStorage.set(key, value)
}

export function getLocalStorage(key: string) {
  key = sign(key)

  return __LocalStorage.getItem(key)
}

export function removeLocalStorage(key: string) {
  key = sign(key)

  return __LocalStorage.remove(key)
}

export function clearLocalStorage() {
  const singKey = sign('')

  for (const key in window.localStorage) {
    if (key.includes(singKey)) {
      window.localStorage.removeItem(key)
    }
  }
}
