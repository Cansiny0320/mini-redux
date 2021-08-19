const loggerMiddleware =
  ({ getState }) =>
  next =>
  action => {
    console.log('this state', getState)
    console.log('action', action)
    next(action)
    console.log('next state', getState)
  }

export default loggerMiddleware
