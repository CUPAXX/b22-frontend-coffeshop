import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancers(
    applyMiddleware(
      thunk,
      logger
    )
  )
)

export default store
