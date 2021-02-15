import React from 'react'
import s from './FilmItem.module.css'


const FilmItem = ({ fItem, ...props }) => {
    const genreList = fItem.genres.map((gItem,index) => <div key = {index}>{gItem.genre}  </div>)
    return <div className={s.filmItemWrapper}>
        <div className = {s.toRight}>
            <img className = {s.images}  src={fItem.posterUrl} alt='FilmPhoto'/>
        </div>
        <div className = {s.paddingLeft}>
            <div>
                <b> {fItem.nameRu} </b> <span> {fItem.year} </span>
            </div>
         <div>
            {genreList}
         </div>
        </div>
    </div>
}

export default FilmItem