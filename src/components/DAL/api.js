import axios from 'axios'
const BaseURL = 'https://kinopoiskapiunofficial.tech/api/v2.1/'
const api_key = '2f13166a-179f-4aa3-a849-e5ed16cd37c0'

const instanse = axios.create({
    baseURL: BaseURL,
    headers : {
        'X-API-KEY' : api_key
    }
})

export const getFilms = {
    getMovieList: (page) => {
        return instanse.get(`films/search-by-filters?order=YEAR&page=${page}`)
    },
    getMovieByGenre : (genreIdArray, page = 1) => {
        return instanse.get(`films/search-by-filters?order=YEAR&genre=${genreIdArray}&page=${page}`)
    }
}

export const  searchBy = {
    genre : () => {
        return instanse.get('films/filters')
    }
}