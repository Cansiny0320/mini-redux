const initState = {
  name: 'cansiny',
}

export default function infoReducer(state, action) {
  if (!state) {
    state = initState
  }
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.payload,
      }
    default:
      return state
  }
}
