//  把 compose(f, g, h) 转换成 (...args) => f(g(h(...args)))
const compose = (...funcs) =>
  funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )

export default function applyMiddleware(...middlewares) {
  return createStore => (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState)
    const middlewareAPI = {
      getState: store.getState,
    }
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    const dispatch = compose(...chain)(store.dispatch)
    store.dispatch = dispatch
    return store
  }
}
