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

export const systemUser = async (params: AxiosRequestConfig) => {
  const response = await axios.post<AxiosResponse>('http://localhost:40001/mock/11/system/user', params)

  return response.data
}
