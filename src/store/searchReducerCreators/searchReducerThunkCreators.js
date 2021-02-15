import { movieListSetter } from "../movieListsReducer"
import { makeProposeOfCurrentInput, setGenreList } from "./searchReducerActionCreators"
import {getFilms, searchBy} from '../../components/DAL/api'

export const setGenreListThunk = () => async (dispatch) => {
    const response = await searchBy.genre()
    if (!response.statusText) {
        dispatch(setGenreList(response.data.genres))
        dispatch(makeProposeOfCurrentInput(''))
    }
    else
        console.warn(response.statusText)
}
export const searchByGenre = (genreIdList) => async (dispatch) => {
    let response = await getFilms.getMovieByGenre(genreIdList.join())
    if (!response.statusText)
        dispatch(movieListSetter(response.data.films))
}

