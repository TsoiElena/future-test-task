import {booksAPI} from "../api";

const SET_BOOKS = 'SET_BOOKS'
const SET_START_INDEX = 'SET_START_INDEX'
const SET_TOTAL_BOOKS_COUNT = 'SET_TOTAL_BOOKS_COUNT'
const TOGAL_IS_FETCHING = 'TOGAL_IS_FETCHING'
const SET_MORE_BOOKS = 'SET_MORE_BOOKS'
const SET_TERM = 'SET_TERM'
const SET_SORTING = 'SET_SORTING'

let initialState = {
    books: [],
    pageSize: 30,
    totalBooksCount: 0,
    startIndex: 0,
    isFetching: false,
    term: '',
    sorting: ''
}

const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: action.books
            }

        case SET_START_INDEX:
            return {...state, startIndex: action.startIndex}

        case SET_TOTAL_BOOKS_COUNT:
            return {...state, totalBooksCount: action.totalCount}

        case TOGAL_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case SET_MORE_BOOKS:
            return {...state, books: [...state.books, ...action.books]}

        case SET_TERM:
            return {...state, term: action.term}

        case SET_SORTING:
            return {...state, sorting: action.sorting}

        default:
            return state
    }
}

export const setBooks = (books) => ({type: SET_BOOKS, books})
export const setStartIndex = (startIndex) => ({type: SET_START_INDEX, startIndex})
export const setTotalBooksCount = (totalCount) => ({type: SET_TOTAL_BOOKS_COUNT, totalCount})
export const togalIsFetching = (isFetching) => ({type: TOGAL_IS_FETCHING, isFetching})
export const setMoreBooks = (books) => ({type: SET_MORE_BOOKS, books})
export const setTerm = (term) => ({type: SET_TERM, term})
export const setSorting = (sorting) => ({type: SET_SORTING, sorting})

export const getBooksThunkCreator = (term, startIndex, sorting) => (dispatch) => {
    dispatch(togalIsFetching(true))
    booksAPI.getBooks(term, startIndex, initialState.pageSize, sorting).then(data => {
        dispatch(setBooks(data.items))
        dispatch(togalIsFetching(false))
        dispatch(setStartIndex(30))
        dispatch(setTotalBooksCount(data.totalItems))
        dispatch(setTerm(term))
        dispatch(setSorting(sorting))
    })
}

export const loadMoreThunkCreator = (term, startIndex, sorting) => (dispatch) => {
    dispatch(togalIsFetching(true))
    booksAPI.getBooks(term, startIndex, initialState.pageSize, sorting).then(data => {
        dispatch(togalIsFetching(false))
        dispatch(setStartIndex( startIndex + initialState.pageSize))
        dispatch(setMoreBooks(data.items))
        dispatch(setTotalBooksCount(data.totalItems))

    })
}

export default searchReducer
