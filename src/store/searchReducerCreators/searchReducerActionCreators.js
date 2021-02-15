import { FILTER_GENRE_LIST, SEARCH_BY_GENRE_ERROR, SEARCH_PRESUMED_GENRE, SET_GENRE_LIST, SET_SEARCH_GENRE_ARRAY, SET_SEARCH_MODE } from '../searchReducer'




export const setGenreList = (genreList) => ({type : SET_GENRE_LIST, genreList})

export const makeProposeOfCurrentInput = (valueForSearchPresumedGenre) => ({type : SEARCH_PRESUMED_GENRE,valueForSearchPresumedGenre}) 

export const setSearchGenreIdsList = (genreId) => ({type : SET_SEARCH_GENRE_ARRAY, genreId}) 

export const filterGenreList = (filterId) => ({type : FILTER_GENRE_LIST, filterId})

export const searchModeToggle = (searchStatus) => ({type : SET_SEARCH_MODE, searchStatus})

export const genreSearchError = (genreSearchErrorStatus) => ({ type: SEARCH_BY_GENRE_ERROR, genreSearchErrorStatus })
