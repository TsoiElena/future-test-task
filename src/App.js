import './App.css';
import HeaderApi from "./components/Header/HeaderContainer";
import  { Route, BrowserRouter, Redirect } from 'react-router-dom'
import SearchApi from "./components/Search/SearchContainer";
import BookApi from "./components/Book/BookContainer";

const App = () => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderApi/>
          <div className='app-wrapper-content'>
              <Route exact path='/books'> <SearchApi/> </Route>
              <Route exact path='/books/:bookId'> <BookApi/> </Route>
              <Route
                  exact
                  path="/"
                  render={() => {
                      return <Redirect to="/books" />
                  }}
              />
          </div>
        </div>
          </BrowserRouter>
  )
}

export default App;
