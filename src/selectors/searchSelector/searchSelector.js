const search = {
    getGenreList : (state) => state.search.genreList,
    getSearchGenreIdsList : (state) => state.search.searchGenreIdsList,
    getPresumedGenreArray : (state) => state.search.presumedGenreArray,
    getSearchMode : (state) => state.search.searchMode,
    getShowSearchGenreError : (state) => state.search.showSearchGenreError
}

export default search
