import {applyMiddleware, combineReducers, createStore, compose} from "redux"

import thunkMW from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import paginationReducer from './paginationReducer'
import movieListReducer from "./movieListsReducer"
import searchReducer from "./searchReducer"

let reducersList = combineReducers({
    form : formReducer,
    pagination : paginationReducer,
    movie : movieListReducer,
    search : searchReducer
}) 

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMW)
);
let store = createStore(reducersList, enhancer)

export default store