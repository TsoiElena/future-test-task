import {booksAPI} from "../api";

const SET_BOOK = 'SET_BOOK'
const TOGAL_IS_FETCHING = 'TOGAL_IS_FETCHING'

let initialState = {
    book: {},
    isFetching: false,
}

const bookReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_BOOK:
            return {
                ...state,
                book: action.book
            }

        case TOGAL_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}

export const setBook = (book) => ({type: SET_BOOK, book})
export const togalIsFetching = (isFetching) => ({type: TOGAL_IS_FETCHING, isFetching})

export const getBookThunkCreator = (id) => (dispatch) => {
    dispatch(togalIsFetching(true))
    booksAPI.getBook(id).then(data => {
        dispatch(setBook(data))
        dispatch(togalIsFetching(false))
    })
}



export default bookReducer
