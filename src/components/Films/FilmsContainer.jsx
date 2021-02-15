import React from 'react'
import {connect} from 'react-redux' 
import {compose} from 'redux' 
import Films from './Films'
import Fetching from '../common/compon/Fetching'
import { setFilmInfo, changeReadyCurrentArrayPager,
setFilmInfoByGenre } from '../../store/paginationReducerCreators/paginationReducerThunkCreators'
import { setCurrentPage } from '../../store/paginationReducerCreators/paginationReducerActionCreators'
import movie from '../../selectors/movieSelector/movieSelector'
import pagination from '../../selectors/paginationSelector/paginationSelector'
import search from '../../selectors/searchSelector/searchSelector'

class FilmsContainer extends React.PureComponent {
    componentDidMount = () => {
        this.props.setFilmInfo(this.props.currentPage)
    }
    render() {
        if(this.props.isFetching)
            return <Fetching />
        return <Films {...this.props}/>
    }
}

const mstp = (state) => {
    return {
        showMovieList : movie.getMovieList(state),
        currentPage : pagination.getCurrnetPage(state),
        isFetching : pagination.getIsFetching(state),
        paginatorArray : pagination.getPaginationArray(state),
        itemPortion : pagination.getItemPortion(state),  
        pagesPortion : pagination.getPagesPortion(state),
        currentPageArrayElement : pagination.getCurrentPageArrayElement(state),
        fulledPageNumbers : pagination.getFulledPageNumbers(state),
        searchGenreIdsList : search.getSearchGenreIdsList(state),
        searchMode : search.getSearchMode(state)
    }
}
export default compose(  
connect(mstp, {setFilmInfo, setCurrentPage,  changeReadyCurrentArrayPager,
    setFilmInfoByGenre})
)(FilmsContainer) 


