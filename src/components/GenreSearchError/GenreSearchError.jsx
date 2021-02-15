import React from 'react'
import s from './GenreSearchError.module.css'

const GenreSearchError = (props) => {
    return <div className = {s.genreSearchError}>
        <div>There is not any film with such genre combination</div>
        <div>Please, double click on item to delete it from search genre list</div>
    </div>
}

export default GenreSearchError