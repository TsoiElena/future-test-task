import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import searchReducer from "./search-reducer";
import bookReducer from "./book-reducer";

let reducers = combineReducers ({
    searchPage: searchReducer,
    book: bookReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
