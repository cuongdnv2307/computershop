import axios from 'axios'

const baseUrl = 'http://localhost:3001/todos'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newTodo => {
  return axios.post(baseUrl, newTodo) 
}

const remove = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

const update = (id, changedPart) => {
  return axios.patch(`${baseUrl}/${id}`, changedPart)
}

export default {
  getAll,
  create,
  remove,
  update
}