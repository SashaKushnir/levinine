import React from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import FilmsContainer from './components/Films/FilmsContainer';
import SearchFieldContainer from './components/SearchField/SearchFieldContainer';
import search from './selectors/searchSelector/searchSelector';
import GenreSearchError from './components/GenreSearchError/GenreSearchError'

class App extends React.Component {
  catchUnhandledErrors = (reason, promiseRejectionEvent) => { // compDidCatch don`t forget ! 
    console.error(promiseRejectionEvent)
    console.error(reason)
  }
  componentDidMount = () => {
    window.addEventListener('unhandlerejection', this.catchUnhandledErrors)
  }
  componentWillUnmount = () => {
    window.removeEventListener('unhandlerejection', this.catchUnhandledErrors)
  }
  render() {
    if (this.props.showSearchGenreError)
      return <GenreSearchError />
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Redirect exact from='/' to='/list' />
            <Route path='/list' render={() => <div className='listRouteWrapper'>
              <FilmsContainer />
              <SearchFieldContainer />
            </div>
            } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mstp = (state) => {
  return {
    showSearchGenreError: search.getShowSearchGenreError(state) 
  }
}

export default compose(connect(mstp))(App);

