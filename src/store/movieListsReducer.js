 
const SET_MOVIE_LIST = 'SET_MOVIE_LIST' 

const initialState = {
   showMovieList : []
}

const movieListReducer = (movieInfo = initialState, action)  => {
    switch (action.type) {
      case SET_MOVIE_LIST:
        return {
          ...movieInfo,
          showMovieList : [...action.movieList]
        } 
      default:
        return movieInfo
    }   
}

export const movieListSetter = (movieList) => ({type : SET_MOVIE_LIST, movieList}) 

export default movieListReducer
