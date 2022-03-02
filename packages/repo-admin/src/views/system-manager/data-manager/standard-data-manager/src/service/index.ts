import axios, { type AxiosRequestConfig } from 'axios'

interface AxiosResponse {
  code: number
  message: string
  data: Data
}

interface Data {
  foo: string
  bar: number
}

export const queryCatalogs = (params: AxiosRequestConfig) => {
  const url = 'http://10.10.10.152:8080//fusion_ecsp/stand/dict/queryCatalogs'
  return axios.get<AxiosResponse>(url, { params })
}
