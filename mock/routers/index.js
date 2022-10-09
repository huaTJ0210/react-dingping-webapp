const Router = require('@koa/router')
const router = new Router()

const userController = require('../controllers/user')
const cmsController = require('../controllers/cms')

// ---- 用户信息 -----
router.post('/user/login', userController.login)
router.get('/user/info', userController.info)

// --- 获取cms的信息 ---
router.get('/getCatagory', cmsController.getCatagoryList)
router.get('/getAD', cmsController.getAD)
router.get('/getShopList', cmsController.getShopList)

module.exports = router
