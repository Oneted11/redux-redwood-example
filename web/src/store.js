import { createStore } from 'redux'

const rootReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'COUNT_UP':
      return { ...state, count: state.count + 1 }
    case 'COUNT_DOWN':
      return { ...state, count: state.count - 1 }
    case 'SET_COUNT':
      return { ...state, count: action.value }
    default:
      return state
  }
}

const store = createStore(rootReducer)
export default store
