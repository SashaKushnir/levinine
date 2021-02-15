import { FETCHING_TOGGLE, SET_CURRENT_ARRAY_PAGER, SET_CURRENT_PAGE,
SET_FULLED_NULL, SET_FULLED_PAGENUMBERS } from "../paginationReducer"


export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setFulledNull = () => ({ type: SET_FULLED_NULL })

export const setFulledPageNumbers = (fulledPageNumbers) => ({ type: SET_FULLED_PAGENUMBERS, fulledPageNumbers })

export const fetchingPaginatorToggle = (status) => ({ type: FETCHING_TOGGLE, status })

export const setCurrentArrayPager = (curAP) => ({ type: SET_CURRENT_ARRAY_PAGER, curAP })