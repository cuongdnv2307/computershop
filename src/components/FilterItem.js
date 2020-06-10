import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateFilter } from '../redux/actions/filter'

export default function FilterItem({ text }) {
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  return (
    <button 
      onClick={() => dispatch(updateFilter(text))}
      disabled={filter === text}
    >
      {text}
    </button>
  )
}
