import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import cart from './cart'
import user from './user'
import singleOrder from './singleOrder'

import product from './product'

const reducer = combineReducers({
  auth,
  user: user,
  order: singleOrder,
  cart,
  product
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './cart'
export * from './product'
