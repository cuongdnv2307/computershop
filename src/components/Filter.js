import React from 'react'
import FilterItem from './FilterItem'
import { FILTER } from '../constant'

export default function Filter() {
  return (
    <div style={{ paddingTop: 10 }}>
      Show:
      <FilterItem text={FILTER.ALL} />
      <FilterItem text={FILTER.ACTIVE} />
      <FilterItem text={FILTER.COMPLETED} />
    </div>
  )
}
