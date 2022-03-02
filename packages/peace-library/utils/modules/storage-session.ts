import { sign } from './string'
import { getStorage } from './storage-web'

const __sessionStorage = getStorage('session')

export function setSessionStorage(key: string, value: any) {
  key = sign(key)

  return __sessionStorage.set(key, value)
}

export function getSessionStorage(key: string) {
  key = sign(key)

  return __sessionStorage.getItem(key)
}

export function removeSessionStorage(key: string) {
  key = sign(key)

  return __sessionStorage.remove(key)
}

export function clearSessionStorage() {
  const singKey = sign('')

  for (const key in window.sessionStorage) {
    if (key.includes(singKey)) {
      window.sessionStorage.removeItem(key)
    }
  }
}
