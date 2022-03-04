/*
 * @Date: 2018-12-21
 * @Description: Download for axios
 */

import type { AxiosResponse } from 'axios'

export const useAxiosDownload = (response: AxiosResponse, fileName?: string) => {
  // 获取文件名
  fileName = fileName ?? decodeURIComponent(response.headers['content-disposition'].split('filename=')[1])

  // 根据 blob 创建 object url
  const blobURL = window.URL.createObjectURL(new Blob([response.data]))

  // 生成临时 a 标签，进行下载
  const link = document.createElement('a')
  link.href = blobURL
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()

  // 删除临时 a 标签
  document.body.removeChild(link)
  // 释放 object url
  window.URL.revokeObjectURL(blobURL)
}
