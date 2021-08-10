import React, {useState} from "react";
import style from './style.module.scss'

const Header = ({getBooks}) => {
    const [term, setTerm] = useState('')
    const [categoria, setCategoria] = useState('all')
    const [sorting, setSorting] = useState('relevans')

    const handleSubmit = (e) => {
        e.preventDefault()
        getBooks(term, sorting)
    }

    return (
        <form className={style.header} onSubmit={(e) => handleSubmit(e)}>
            <h1>Search for books</h1>
            <div className={style.search}>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} required/>
                <button type='submit'>search</button>
            </div>
            <div className={style.select}>
                <div className={style.categories}>
                    <span>Categories</span>
                    <select name="Categories" onChange={(e) => setCategoria(e.target.value)}>
                        <option value="all"  defaultValue>all</option>
                        <option value="art">art</option>
                        <option value="biography">biography</option>
                        <option value="computers">computers</option>
                        <option value="history">history</option>
                        <option value="medical">medical</option>
                        <option value="poetry">poetry</option>
                    </select>
                </div>
                <div className={style.sorting}>
                    <span>Sorting by</span>
                    <select name="Sorting by" onChange={(e) => setSorting(e.target.value)}>
                        <option value="relevance" defaultValue>relevance</option>
                        <option value="newest" >newest</option>
                    </select>
                </div>
            </div>
        </form>
    )
}

export default Header
