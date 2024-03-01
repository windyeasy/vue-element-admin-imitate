import { BASE_URL, TIME_OUT } from './config'
import Request from './request'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 添加拦截器
  interceptors: {
    // 响应成功拦截
    responseSuccessFn(res) {
      return res.data
    },
  },
})
export default request
