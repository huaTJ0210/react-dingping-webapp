import axios from 'axios'

const instance = axios.create({
  timeout: 10 * 1000,
  baseURL: 'http://localhost:3000',
})

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status === 200) {
      // 此处需要处理data中的code值；这部分会设置业务错误编码，已对应不同的错误处理规则
      return response.data
    } else {
      return Promise.reject(new Error('response error'))
    }
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default instance
