import axios from 'axios'
import { notification } from 'antd'

const request = axios.create({
  withCredentials: true,
})

request.interceptors.response.use((response) => {
  console.log(response)
  const { status, data } = response
  if (status !== 200) {
    notification.error({
      message: '请求错误',
      description: '网络错误',
    })
    return Promise.reject()
  }
  if (data && data.code !== 200) {
    notification.error({
      message: data.message || '请求错误',
      description: '请求错误',
    })
    return Promise.reject()
  }
  return data.result
})

export default request
