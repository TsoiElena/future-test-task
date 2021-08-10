import React from "react";
import connect from 'react-redux/lib/connect/connect'
import {getBooksThunkCreator} from "../../redux/search-reducer";
import {useHistory} from 'react-router-dom'
import Header from "./index";

const HeaderApi = ({startIndex, getBooksThunkCreator}) => {

    const history = useHistory()

    const getBooks = (term, sorting) => {
        getBooksThunkCreator(term, startIndex, sorting)
        history.push({pathname: '/books'})
    }

    return (
            <Header
                getBooks={getBooks}
            />
    )
}

const mapStateToProps = (state) => {
    return {
        startIndex: state.searchPage.startIndex,
    }
}

export default connect(mapStateToProps, {getBooksThunkCreator}) (HeaderApi)
