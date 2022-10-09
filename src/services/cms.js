import request from './request'

// 获取分类列表
export const getCatagoryList = () => {
  return request.request({ url: '/getCatagory' })
}

// 获取推荐广告列表
export const getAdList = () => {
  return request.request({ url: '/getAD' })
}

// 获取商店列表
export const getShopList = () => {
  return request.request({ url: '/getShopList' })
}
