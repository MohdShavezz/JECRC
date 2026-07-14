import React from 'react'
import CounterComp from '../components/CounterComp'
import Parent from '../components/Parent'
import HOC from '../components/HOC'

const Counter = () => {
  return (
    <div>
      <h3>Counter Page</h3>
      <HOC>
        <CounterComp />
      </HOC>
      <hr />
      <Parent />

    </div>
  )
}

export default Counter
