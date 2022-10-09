const Koa = require('koa')
const app = new Koa()

const koaStatic = require('koa-static')
const router = require('./routers/index')
const CatchErrorMiddlewares = require('./middlewares/exception')

app.use(CatchErrorMiddlewares())
app.use(router.routes())
app.use(router.allowedMethods())

// 设置静态资源访问 ：node的执行目录在整个项目根目录下，故需要设置 ./mock/static
// 否则静态资源无法访问
app.use(koaStatic('./mock/static'))

app.listen(3000, () => {
  console.log('...3000启动')
})
