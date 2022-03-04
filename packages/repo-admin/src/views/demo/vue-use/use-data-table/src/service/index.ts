import axios, { type AxiosRequestConfig } from 'axios'
import type { HttpResponse } from 'peace-library'

export const queryCatalogs = (params?: AxiosRequestConfig) => {
  const url = import.meta.env.VITE_APP_TIANJI_API + 'stand/dict/queryCatalogs'

  return axios.get<HttpResponse>(url, { params })
}
