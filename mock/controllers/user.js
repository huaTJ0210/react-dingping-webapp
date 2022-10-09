module.exports = {
  /*
  处理登录操作
*/
  async login(ctx) {
    ctx.body = {}
  },
  /*
  测试
*/
  async info(ctx) {
    console.log('info')
    ctx.body = [
      { id: 0, name: 'li' },
      { id: 1, name: 'wang' },
    ]
  },
}
