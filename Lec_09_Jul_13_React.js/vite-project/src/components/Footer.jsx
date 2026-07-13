import React from 'react'

const Footer = (props) => {
  console.log(props)
  return (
    <div style={{background:'yellow'}}>
        <h2>
            Footer <br />
            <span>Hello {props.name}</span> <br />
            <span>Age: {props.age}</span>
        </h2>
    </div>
  )
}

export default Footer
