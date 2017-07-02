import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // don't mutate state, just return a new instance of state
      // that's why concat is good here because it creates a new array
      // or with ES6 we can use the spread syntax "..."
      return [ action.payload.data, ...state ]
  }
  return state
}