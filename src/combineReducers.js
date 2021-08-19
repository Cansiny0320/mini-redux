export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers)
  return function combination(state, action) {
    const nextState = {}
    reducerKeys.forEach(key => {
      const reducer = reducers[key]
      // 之前的 key 的 state
      const previousStateForKey = state[key]
      // 执行 分 reducer，获得新的state
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    })
    return nextState
  }
}
