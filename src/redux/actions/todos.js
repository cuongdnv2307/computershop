import todoServices from '../../services'

const fetchTodos = allTodos => ({
  type: 'FETCH_TODOS',
  allTodos
})

const addTodo = newTodo => ({
  type: 'ADD_TODO',
  newTodo
})

const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

const toggleTodo = updatedTodo => ({
  type: 'TOGGLE_TODO',
  updatedTodo
})

export const fetchTodosAsync = () => {
  return dispatch => {
    todoServices
      .getAll()
      .then(res => dispatch(fetchTodos(res.data)))
      .catch(e => console.error(e))
  }
}

export const addTodoAsync = newTodo => {
  return dispatch => {
    todoServices
      .create(newTodo)
      .then(res => dispatch(addTodo(res.data)))
      .catch(e => console.error(e))
  }
}

export const removeTodoAsync = todoId => {
  return dispatch => {
    todoServices
      .remove(todoId)
      .then(() => dispatch(removeTodo(todoId)))
      .catch(e => console.error(e))
  }
}

export const toggleTodoAsync = (todoId, updatedTodo) => {
  return dispatch => {
    todoServices
      .update(todoId, updatedTodo)
      .then(res => dispatch(toggleTodo(res.data)))
      .catch(e => console.error(e))
  }
}