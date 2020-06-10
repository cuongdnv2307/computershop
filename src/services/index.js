import axios from 'axios'

const baseUrl = 'https://5ee0dd0e30deff0016c3f77c.mockapi.io/products'

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
  return axios.put(`${baseUrl}/${id}`, changedPart)
}

export default {
  getAll,
  create,
  remove,
  update
}