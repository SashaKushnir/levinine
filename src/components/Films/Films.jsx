import React from 'react'
import FilmItem from '../common/compon/FilmItem'
import Paginator from '../Paginator/Paginator'
import s from './Films.module.css'

const Films = (props) => {
    let movies
    if (props.currentPage % 2 === 1){ 
        movies = props.showMovieList.filter((val,index)=> index < props.itemPortion)
        .map((item, arrayElem) => <FilmItem fItem = {item} 
        arrayElem = {arrayElem} key = {arrayElem}/>)
        }
    else {
        movies = props.showMovieList.filter((val,index)=> index >= props.itemPortion)
        .map((item, arrayElem) => <FilmItem fItem = {item} 
        arrayElem = {arrayElem} key = {arrayElem}/>)
    }
    return <div>    
        <div className={s.filmsWrapper}>
            {movies} 
        </div>
        <div className = {s.toCenter}>
            <Paginator {...props}/>
        </div>
    </div>
}

export default Films