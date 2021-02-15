
import React from 'react'
import s from './Paginator.module.css'

const Paginator = ({currentPageArrayElement, pagesPortion, fulledPageNumbers, currentPage,
    setCurrentPage, searchMode, setFilmInfo, setFilmInfoByGenre, searchGenreIdsList,
    changeReadyCurrentArrayPager, ...props}) => {
    
    let pageNumberItems = []
    let leftBorder = (currentPageArrayElement - 1) * pagesPortion + 1;
    let rightBorder = currentPageArrayElement * pagesPortion;  
    for (let i = leftBorder; i <= rightBorder; i++) 
        pageNumberItems.push(i)
    
    let paginationElements = pageNumberItems.filter(val => ((val >= leftBorder) && (val <= rightBorder))).map(
        (val) => <span key = {val} onClick={() => changeCurrentPage(val)}
         className={currentPage === val ? s.selectedItem : s.item}>{val} </span>)

    const changeCurrentPage = (pageNum) => {
        if(fulledPageNumbers.includes(pageNum))
            setCurrentPage(pageNum)
        else {
            if(!searchMode)
                setFilmInfo( Math.ceil(pageNum / 2),null, pageNum)
            else
                setFilmInfoByGenre(Math.ceil(pageNum / 2), null, pageNum, searchGenreIdsList.map(obj => obj.id))
        }
    }
    const change5PaginatorsMin = () => {
        if(fulledPageNumbers.includes(leftBorder - 1)){
            changeReadyCurrentArrayPager(leftBorder - 1, currentPageArrayElement - 1)
        }   else
             if(!searchMode)
                 setFilmInfo(Math.ceil((leftBorder - pagesPortion)/2),  currentPageArrayElement - 1, leftBorder - pagesPortion)
                 else   
                    setFilmInfoByGenre(Math.ceil((leftBorder - pagesPortion)/2), currentPageArrayElement - 1,
                     leftBorder - pagesPortion, searchGenreIdsList.map(obj => obj.id))
    }
    const change5PaginatorsMax = () => {
        if(fulledPageNumbers.includes(rightBorder + 1)){
            changeReadyCurrentArrayPager(rightBorder + 1, currentPageArrayElement + 1)
        }   else
            if(!searchMode)
            setFilmInfo(Math.ceil((rightBorder + 1)/2),currentPageArrayElement + 1, rightBorder + 1)
                else
                setFilmInfoByGenre(Math.ceil((rightBorder + 1)/2), currentPageArrayElement + 1,
                rightBorder + 1, searchGenreIdsList.map(obj => obj.id))
    }

    return (
        <div>
            
            <button disabled = {currentPageArrayElement === 1} onClick={change5PaginatorsMin}>
                Previous 
            </button>
            {paginationElements}
            <button  onClick={change5PaginatorsMax}>
                Next 
            </button>
        </div>
    )
}

export default Paginator