import loggerMiddleware from './middlewares/loggerMiddleware.js'
import exceptionMiddleware from './middlewares/exceptionMiddleware.js'
import timeMiddleware from './middlewares/timeMiddleware.js'
import createStore from './createStore.js'
import applyMiddleware from './applyMiddleware.js'
import combineReducers from './combineReducers.js'
import counterReducer from './reducers/counterReducer.js'
import infoReducer from './reducers/infoReducer.js'

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer,
})

const enhancer = applyMiddleware(
  exceptionMiddleware,
  timeMiddleware,
  loggerMiddleware
)

const store = createStore(reducer, {}, enhancer)

store.subscribe(() => {
  let state = store.getState()
  console.log('现在的state变为了:', state)
})

/*自增*/
store.dispatch({
  type: 'INCREMENT',
})
store.dispatch({
  type: 'SET_NAME',
  payload: 'cansiny0320',
})
