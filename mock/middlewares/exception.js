module.exports = () => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (error) {
      ctx.status = 'xxx'
      ctx.message = 'xxx'
    }
  }
}
