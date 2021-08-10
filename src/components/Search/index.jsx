import React from "react";
import {NavLink} from "react-router-dom";
import style from './style.module.scss'

const Search = ({books, totalCount, loadMore}) => {

    return (
        <div className={style.search}>
            <h1>Found {totalCount} results</h1>
            <div className={style.results}>
                {books.map((book) => (
                    <div className={style.book} key={book.id}>
                        <NavLink to={`/books/${book.id}`}>
                            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt=""/>
                        </NavLink>
                        <div>
                            {book.volumeInfo.categories && book.volumeInfo.categories.map((categoria, index) => <span key={index}>{categoria}</span>)}
                        </div>
                        <div>
                            <span className={style.title}>{book.volumeInfo.title}</span>
                        </div>
                        <div>
                            {book.volumeInfo.authors && book.volumeInfo.authors.map((author, index) => <span key={index}>{author}</span>)}
                        </div>
                    </div>

                ))}
            </div>
            <button onClick={() => loadMore()}>Load More</button>
        </div>
    )
}

export default Search
