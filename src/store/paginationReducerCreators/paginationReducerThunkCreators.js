import { getFilms } from "../../components/DAL/api"
import { movieListSetter } from "../movieListsReducer"
import { genreSearchError, searchModeToggle } from "../searchReducerCreators/searchReducerActionCreators"
import { fetchingPaginatorToggle, setCurrentArrayPager,
setCurrentPage, setFulledNull, setFulledPageNumbers } from "./paginationReducerActionCreators"


export const setFilmInfo = (page, currentArrayPager = null, myCurrPage = null, filmsByGenre = false) => async (dispatch) => {
  try {
    dispatch(fetchingPaginatorToggle(true))
    let response
    if (!filmsByGenre)
      response = await getFilms.getMovieList(page)
    else
      response = await getFilms.getMovieByGenre(page)

    if (!response.statusText) {
      dispatch(movieListSetter(response.data.films))
      dispatch(setFulledNull())
      dispatch(setFulledPageNumbers([page * 2 - 1, page * 2]))
      if (currentArrayPager)
        dispatch(setCurrentArrayPager(currentArrayPager))
      if (myCurrPage)
        dispatch(setCurrentPage(myCurrPage))
    } else {
      console.warn('Something went wrong')
    }
    dispatch(fetchingPaginatorToggle(false))
  } catch (error) {
    console.warn(error)
  }
}

export const setNonLocalUsersByDimaTK = (currentArrayElement, currentPage, searchMode) =>
  async (dispatch) => {
    if(searchMode)
      dispatch(setFilmInfoByGenre(currentArrayElement))
    else
      dispatch(setFilmInfo(currentArrayElement))
  }

export const changeReadyCurrentArrayPager = (page, currentPageArrayElement) => (dispatch) => {
  dispatch(setCurrentArrayPager(currentPageArrayElement))
  dispatch(setCurrentPage(page))
}


export const setFilmInfoByGenre = (page, currentArrayPager = null, myCurrPage = null, genreIdList) => async (dispatch) => {
  try {
    dispatch(fetchingPaginatorToggle(true))
    const response = await getFilms.getMovieByGenre(genreIdList, page)

    if (!response.statusText) {
      dispatch(movieListSetter(response.data.films))
      dispatch(setFulledNull())
      dispatch(setFulledPageNumbers([page * 2 - 1, page * 2]))
      if (currentArrayPager)
        dispatch(setCurrentArrayPager(currentArrayPager))
      if (myCurrPage)
        dispatch(setCurrentPage(myCurrPage))
    } else {
      console.warn('Something went wrong')
    }
    dispatch(fetchingPaginatorToggle(false))
  } catch (error) {
    dispatch(fetchingPaginatorToggle(false))
    dispatch(genreSearchError(true))
    setTimeout(() => dispatch(genreSearchError(false)),3000)
    dispatch(searchModeToggle(false))
  }
}
