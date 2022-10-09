import { combineReducers } from 'redux'
import { userInfoReducer } from './userinfo'

export default combineReducers({ userInfo: userInfoReducer })
