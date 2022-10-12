import request from './request'

// 获取分类列表
export const getCatagoryList = () => {
  return request.request({ url: '/getCatagory' })
}

// 获取推荐广告列表
export const getDiscountList = () => {
  return request.request({ url: '/getAD' })
}

// 获取商店列表
export const getShopList = (params) => {
  return request.request({ url: '/getShopList', params: params })
}

// 获取商店详情
export const getShopDetail = (params) => {
  return request.request({ url: '/getShopDetail', params: params })
}
