import { getCatagoryList, getDiscountList } from '@services/cms'

// Action-Type
export const GET_CATAGORY = 'GET_CATAGORY'
export const GET_DISCOUNT = 'GET_DISCOUNT'
export const GET_SHOP_LIST = 'GET_SHOP_LIST'

const getCatagoryActionCreator = () => {
  return (dispatch) => {
    getCatagoryList().then((res) => {
      dispatch(getCatagoryAction(res))
    })
  }
}

function getCatagoryAction(catagoryList) {
  return {
    type: GET_CATAGORY,
    payload: { catagoryList },
  }
}

const getDiscountActionCreator = () => {
  return (dispatch) => {
    getDiscountList().then((res) => {
      dispatch(getDiscountAction(res))
    })
  }
}

function getDiscountAction(discountList) {
  return {
    type: GET_DISCOUNT,
    payload: { discountList },
  }
}

// Action-Creator
export const cmsActionCreators = {
  getCatagoryList: getCatagoryActionCreator,
  getDiscountList: getDiscountActionCreator,
}

// reducer
const initialState = {
  catagoryList: [],
  discountList: [],
}
export function cmsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATAGORY:
      return {
        ...state,
        catagoryList: action.payload.catagoryList,
      }
    case GET_DISCOUNT:
      return {
        ...state,
        discountList: action.payload.discountList,
      }
    default:
      return state
  }
}
