import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import SearchField from './SearchField'
import { setGenreListThunk, searchByGenre } from '../../store/searchReducerCreators/searchReducerThunkCreators'
import {makeProposeOfCurrentInput, setSearchGenreIdsList, searchModeToggle,
filterGenreList } from '../../store/searchReducerCreators/searchReducerActionCreators'
import { setCurrentPage, setCurrentArrayPager } from '../../store/paginationReducerCreators/paginationReducerActionCreators'
import { setFilmInfoByGenre, setFilmInfo } from '../../store/paginationReducerCreators/paginationReducerThunkCreators'
import search from '../../selectors/searchSelector/searchSelector'

class SearchContainer extends React.PureComponent {
    render() {
        return <SearchField {...this.props} />
    }
}

const mstp = (state) => {
    return {
        genreList: search.getGenreList(state),
        presumedGenreArray: search.getPresumedGenreArray(state),
        searchGenreIdsList: search.getSearchGenreIdsList(state),
        searchMode : search.getSearchMode(state)
    }
}
export default compose(
    connect(mstp, {
        setGenreListThunk, searchByGenre, setSearchGenreIdsList, makeProposeOfCurrentInput,
        filterGenreList,searchModeToggle,setFilmInfoByGenre, setFilmInfo, setCurrentPage,
        setCurrentArrayPager
    })
)(SearchContainer)


