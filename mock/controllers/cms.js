const {
  getCatagoryListService,
  getADService,
  getShopListService,
} = require('../services/cms')

module.exports = {
  async getCatagoryList(ctx) {
    try {
      const list = await getCatagoryListService(ctx)
      ctx.body = JSON.stringify(list)
    } catch (error) {}
  },
  async getAD(ctx) {
    console.log(ctx)
    try {
      const list = await getADService(ctx)
      ctx.body = JSON.stringify(list)
    } catch (error) {}
  },
  async getShopList(ctx) {
    console.log(ctx)
    try {
      const list = await getShopListService(ctx)
      ctx.body = JSON.stringify(list)
    } catch (error) {}
  },
}
