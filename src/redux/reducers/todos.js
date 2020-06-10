const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TODOS": {
      return action.allTodos
    }

    case "ADD_TODO": {
      return [
        ...state,
        action.newTodo
      ]
    }

    case "REMOVE_TODO": {
      return state.filter(todo => todo.id !== action.id)
    }

    case "TOGGLE_TODO": {
      return state.map(todo =>
        todo.id === action.updatedTodo.id
          ? action.updatedTodo : todo
      )
    }

    default:
      return state
  }
}
