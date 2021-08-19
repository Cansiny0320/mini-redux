export default function createStore(reducer, preloadedState, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer, preloadedState)
  }
  let currentReducer = reducer
  let state = preloadedState
  let listeners = []

  function getState() {
    return state
  }

  function subscribe(listener) {
    let isSubscribed = true
    listeners.push(listener)
    return function unsubscribe() {
      if (!isSubscribed) return
      isSubscribed = false
      listeners.splice(index, 1)
    }
  }

  function dispatch(action) {
    state = currentReducer(state, action)
    listeners.forEach(listener => listener())
    return action
  }

  function replaceReducer(nextReducer) {
    currentReducer = nextReducer
    dispatch({ type: Symbol('REPLACE') })
    return store
  }

  dispatch({ type: Symbol('INIT') })

  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
  }
}
