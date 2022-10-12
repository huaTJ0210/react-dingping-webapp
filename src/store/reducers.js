import { combineReducers } from 'redux'
import { userInfoReducer } from './userinfo'
import { cmsReducer } from './cms'

export default combineReducers({ userInfo: userInfoReducer, cms: cmsReducer })
