import React from "react";
import connect from 'react-redux/lib/connect/connect'
import {loadMoreThunkCreator} from "../../redux/search-reducer";

import Search from "./index";
import Preloader from "../common/Preloader/Preloader";

const SearchApi = ({term, books, totalCount, isFetching, startIndex, sorting, loadMoreThunkCreator}) => {

    if (books.length === 0) return <> {isFetching ? <Preloader/> : null} <div>1</div></>

    const loadMore = () => {
        loadMoreThunkCreator(term, startIndex, sorting)
    }

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Search
                books={books}
                totalCount={totalCount}
                loadMore={loadMore}
            />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        term: state.searchPage.term,
        books: state.searchPage.books,
        totalCount: state.searchPage.totalBooksCount,
        isFetching: state.searchPage.isFetching,
        startIndex: state.searchPage.startIndex,
        sorting: state.searchPage.sorting,
    }
}

export default connect(mapStateToProps, {loadMoreThunkCreator})(SearchApi)
