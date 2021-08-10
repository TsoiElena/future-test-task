import React, {useEffect} from "react";
import {useParams} from 'react-router-dom'
import connect from 'react-redux/lib/connect/connect'
import {getBookThunkCreator} from "../../redux/book-reducer";
import Book from "./index";
import Preloader from "../common/Preloader/Preloader";

const BookApi = ({book, isFetching, getBookThunkCreator}) => {
    const {bookId} = useParams()
    useEffect(() => {
        getBookThunkCreator(bookId)
    }, [bookId])

    if (isFetching) return <Preloader/>
    if (!book.volumeInfo) return null

    return (
        <Book book={book}/>
    )
}

const mapStateToProps = (state) => {
    return {
        book: state.book.book,
        isFetching: state.book.isFetching
    }
}


export default connect(mapStateToProps, {getBookThunkCreator})(BookApi)
