
export const SET_GENRE_LIST = 'SET_GENRE_LIST'
export const FILTER_GENRE_LIST = 'FILTER_GENRE_LIST'
export const SET_SEARCH_GENRE_ARRAY = 'SET_SEARCH_GENRE_ARRAY'
export const SEARCH_PRESUMED_GENRE = 'SEARCH_PRESUMED_GENRE'
export const SET_SEARCH_MODE = 'SET_SEARCH_MODE'
export const SEARCH_BY_GENRE_ERROR = 'SEARCH_BY_GENRE_ERROR'

const initialState = {
  genreList : [],
  searchGenreIdsList : [],
  presumedGenreArray : [],
  searchMode : false,
  showSearchGenreError : false
}

const searchReducer = (searchInfo = initialState, action)  => {
    switch (action.type) {
      case FILTER_GENRE_LIST : 
        return {
          ...searchInfo,
          searchGenreIdsList : [...searchInfo.searchGenreIdsList.filter(val => val.id !== action.filterId)] 
        } 
      case SET_GENRE_LIST : 
        return {
          ...searchInfo,
          genreList : [...action.genreList]
        }
      
      case SET_SEARCH_GENRE_ARRAY : 
      let flagToPushOrNot = true  
      if(searchInfo.searchGenreIdsList.length !== 0){
        flagToPushOrNot = searchInfo.searchGenreIdsList.reduce((acum,val) => {
          if(val.id === action.genreId)
            acum = false
          return acum 
        },true)
      }
        return {
          ...searchInfo,
          searchGenreIdsList : flagToPushOrNot ? [ ...searchInfo.searchGenreIdsList.concat(
            ...searchInfo.genreList.filter((obj, index) => obj.id === action.genreId ))]
            : [...searchInfo.searchGenreIdsList]
        }
        case  SEARCH_BY_GENRE_ERROR : 
        return {
          ...searchInfo,
          showSearchGenreError : action.genreSearchErrorStatus
        }
        case SEARCH_PRESUMED_GENRE : 
        return {
          ...searchInfo,
          presumedGenreArray : [...searchInfo.genreList.filter((obj,index) => {
            return obj.genre.toLowerCase().includes(action.valueForSearchPresumedGenre.toLowerCase())
          })]
        }
        case SET_SEARCH_MODE : 
        return {
          ...searchInfo,
          searchMode : action.searchStatus
        }
      default:
        return searchInfo
    }   
}

export default searchReducer
