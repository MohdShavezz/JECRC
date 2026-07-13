import React from 'react'

const ChildHeader = ({name,title}) => {
  // console.log('ChildHeader')
  return (
    <div style={{background:'green'}}>
      This is ChildHeader 
      <p>Name: {name}</p>
      <p>Title: {title}</p>
    </div>
  )
}

export default ChildHeader
