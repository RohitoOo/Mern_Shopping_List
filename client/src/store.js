import { createStore , applyMiddleware , compose } from 'redux'

import thunk from 'redux-thunk'

import rootReducer from './reducers'

const initialState = {};

// Middleware for creating a store ( Boiler Plate )

const middleware = [thunk];

// https://github.com/zalmoxisus/redux-devtools-extension

const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware)
));

export default store ;
