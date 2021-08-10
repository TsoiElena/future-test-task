import React from "react";
import style from './style.module.scss'

const Book = ({book}) => {
    return (
        <div className={style.book}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
            <div className={style.info}>
                <div>
                    {book.volumeInfo.categories && book.volumeInfo.categories.map((categoria, index) => <span key={index}>{categoria}</span>)}
                </div>
                <div>
                    <span className={style.title}>{book.volumeInfo.title}</span>
                </div>
                <div>
                    {book.volumeInfo.authors && book.volumeInfo.authors.map((author, index) => <span key={index}>{author}</span>)}
                </div>
                <div dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}/>
            </div>
        </div>
    )
}

export default Book
