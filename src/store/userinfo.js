export const name = 'hello'

// Action-Type
// 获取用户所在的城市
export const USER_CURRENTCITY = 'USER_CURRENTCITY'

// Action-Creator
function updateCityActionCreator(cityName) {
  return {
    type: USER_CURRENTCITY,
    payload: {
      cityName,
    },
  }
}

export const actionCreators = { updateCity: updateCityActionCreator }

// reducer
const initialState = {
  cityName: '北京',
}
export function userInfoReducer(state = initialState, action) {
  switch (action.type) {
    case USER_CURRENTCITY:
      return {
        ...state,
        cityName: action.payload.cityName,
      }
    default:
      return state
  }
}
