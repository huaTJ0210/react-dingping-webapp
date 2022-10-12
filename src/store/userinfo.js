// Action-Type
// 获取用户所在的城市
export const USER_CURRENTCITY = 'USER_CURRENTCITY'
// 设置token
export const SET_TOKEN = 'SET_TOKEN'

// Action-Creator
function updateCityActionCreator(cityName) {
  return {
    type: USER_CURRENTCITY,
    payload: {
      cityName,
    },
  }
}

function setTokenActionCreator(token) {
  return {
    type: SET_TOKEN,
    payload: {
      token,
    },
  }
}

export const userInfoActionCreators = {
  updateCity: updateCityActionCreator,
  setToken: setTokenActionCreator,
}

// reducer
const initialState = {
  cityName: '北京',
  token: localStorage.getItem('x-token') || '',
}
export function userInfoReducer(state = initialState, action) {
  switch (action.type) {
    case USER_CURRENTCITY:
      return {
        ...state,
        cityName: action.payload.cityName,
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      }
    default:
      return state
  }
}
