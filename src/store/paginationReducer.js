export const FETCHING_TOGGLE = 'FETCHING_TOGGLE'
export const SET_CURRENT_PAGE = 'CURRENT_PAGE'
export const SET_FULLED_NULL = 'SET_FULLED_NULL'
export const SET_FULLED_PAGENUMBERS = 'SET_FULLED_PAGENUMBERS'
export const SET_CURRENT_ARRAY_PAGER = 'SET_CURRENT_ARRAY_PAGER'


const initialState = {
  currentPage: 1,
  itemPortion: 10,
  currentPageArrayElement: 1,
  isFetching: false,
  pagesPortion: 3,
  paginationArray: [],
  fulledPageNumbers: []
}

const paginationReducer = (paginationInfo = initialState, action) => {
  switch (action.type) {
    case FETCHING_TOGGLE:
      return {
        ...paginationInfo,
        isFetching: action.status
      }

    case SET_CURRENT_PAGE:
      return {
        ...paginationInfo,
        currentPage: action.currentPage
      }
    case SET_FULLED_PAGENUMBERS:
      return {
        ...paginationInfo,
        fulledPageNumbers: action.fulledPageNumbers
      }

    case SET_FULLED_NULL:
      return {
        ...paginationInfo,
        fulledPageNumbers: []
      }


    case SET_CURRENT_ARRAY_PAGER:
      return {
        ...paginationInfo,
        currentPageArrayElement: action.curAP
      }
    
 
    default:
      return paginationInfo
  }
}

export default paginationReducer
