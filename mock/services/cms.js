const { catagoryList } = require('../models/catagory')
const { ad } = require('../models/ad')
const { shopList } = require('../models/shoplist')

module.exports = {
  async getCatagoryListService(ctx) {
    // 深拷贝后再进行转化
    const list = JSON.stringify(catagoryList)
    const res = JSON.parse(list)
    res.forEach((items) => {
      items.forEach((item) => {
        item['img'] = `http://localhost:3000/image/catagory/${item['img']}`
      })
    })
    return res
  },
  async getADService(ctx) {
    const list = JSON.stringify(ad)
    const res = JSON.parse(list)
    res.forEach((item) => {
      item['img'] = `http://localhost:3000/image/ad/${item['img']}`
    })
    return res
  },
  async getShopListService(ctx) {
    const list = JSON.stringify(shopList)
    const res = JSON.parse(list)
    res.forEach((item) => {
      item['img'] = `http://localhost:3000/image/shop/${item['img']}`
    })
    return res
  },
}
