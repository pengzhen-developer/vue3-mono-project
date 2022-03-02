import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

export interface HttpResponse<T = unknown> {
  message: string
  code: number
  data: T
}

export const useAxios = () => {
  // request interceptors
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // response interceptors
  axios.interceptors.response.use(
    (response: AxiosResponse<HttpResponse>) => {
      const res = response.data
      // if the custom code is not 200, it is judged as an error.
      if (res.code !== 200) {
        window.$message?.info('系统异常')

        return Promise.reject(new Error(res.message || 'unkonw error'))
      }

      return res
    },
    (error) => {
      // 已知错误
      if (error.response) {
        switch (error.response.status) {
          case 401:
            window.$message?.warning('你的登录信息已过期，请重新登录')
            return Promise.reject(error)
          case 404:
            window.$message?.warning('你请求的资源不存在')
            return Promise.reject(error)
          case 405:
            window.$message?.warning('你请求的请求方法类型错误')
            return Promise.reject(error)
        }
      }

      // 网络错误
      if (!error.status) {
        window.$message?.warning('你的网络异常，请检查网络连接是否通常')
        return Promise.reject(error)
      }

      // 未知错误
      window.$message?.warning('未知错误')

      return Promise.reject(error)
    }
  )
}
