import React, { useState } from 'react'
import s from './SearchField.module.css'

const SearchField = ({searchGenreIdsList, setSearchGenreIdsList, presumedGenreArray,
    searchMode, filterGenreList, setGenreListThunk, searchModeToggle, setCurrentPage,
    setCurrentArrayPager, setFilmInfo, setFilmInfoByGenre, makeProposeOfCurrentInput,
    ...props}) => {

    const selectedGenres =  searchGenreIdsList.map((val, index) => 
    <div key = {index} onDoubleClick = {() => filterSelected(val.id)}>{val.genre}</div>)
    const presumedGenres = presumedGenreArray.map((val, index) => 
    <div key = {index} className = {s.persumedArray}
    onClick = {() => setSearchGenreIdsList(val.id)}>{val.genre}</div>)

    let [localSearchMode, setLocalSearchMode] = useState(searchMode)
    let [searchValue, setSearchValue] = useState('')
    const filterSelected = (filterId) => {
        filterGenreList(filterId)
    }
    const toSearch = () => {
        setLocalSearchMode(true)
        setGenreListThunk()
    }
    const toNotSearch = () => {
        setLocalSearchMode(false)
        searchModeToggle(false)
        setCurrentPage(1)
        setCurrentArrayPager(1)
        setFilmInfo(1)
    }
    const searchFilmsByGenre = () => {
        searchModeToggle(true)
        setFilmInfoByGenre(1, 1 , 1,  searchGenreIdsList.map(obj => obj.id))
    }
    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
        makeProposeOfCurrentInput(e.target.value)
    }
    return <div>
        {!localSearchMode && <button onClick={toSearch}>
            Search by genre
        </button>}
        {localSearchMode && <div><button onClick={toNotSearch}>
            Exit Search Mode
        </button>
        <button onClick={searchFilmsByGenre}>
                get films
        </button>
            <input placeholder='quick genre search ' onChange={onChangeSearchInput}
             type='text' value={searchValue} />
            <div className={s.selectedGenres}> {selectedGenres} </div>
            <div className={s.persumedGenreArray}>{presumedGenres}</div>
        </div>}
    </div>
}

export default SearchField