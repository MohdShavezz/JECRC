import React from 'react'

const HOC = ({children}) => {
  return (
    <div style={{backgroundColor:'red'}}>
      {children}
    </div>
  )
}

export default HOC
