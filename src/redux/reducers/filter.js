import { FILTER } from '../../constant'

const initialState = FILTER.ALL

export default function(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_FILTER": {
      return action.filter
    }

    default:
      return state
  }
}
