import request from './request'

// 用户登录
export const login = (params) => {
  return request.request({ url: '/user/login', method: 'post', data: params })
}
