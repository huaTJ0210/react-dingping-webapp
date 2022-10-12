import store from '@store/index'

export function isLogin() {
  const token = store.getState().userInfo.token || ''
  return token.length > 0
}
