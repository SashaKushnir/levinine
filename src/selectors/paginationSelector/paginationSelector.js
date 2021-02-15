const pagination = {
    getCurrnetPage : (state) => state.pagination.currentPage,
    getItemPortion : (state) => state.pagination.itemPortion,
    getCurrentPageArrayElement : (state) => state.pagination.currentPageArrayElement,
    getIsFetching : (state) => state.pagination.isFetching,
    getPagesPortion : (state) => state.pagination.pagesPortion,
    getPaginationArray : (state) => state.pagination.paginationArray,
    getFulledPageNumbers : (state) => state.pagination.fulledPageNumbers
}

export default pagination