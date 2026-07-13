import React, { useEffect, useState } from 'react'

const Counter = () => {

  const [count,setCount] = useState(0)
  const [age,setAge] = useState(18)
  
  function handleINC(){
      // console.log('handleClick ...')
      setCount(count+1)
      // setAge(age+1)
  }
  function handleDEC(){
      // console.log('handleClick ...')
      setCount(count-1)
  }

  // component RERENDER every time, if any of the state changes
  console.log('Counter Component Mount...')
  
  useEffect(()=>{
    console.log('useEffect runs with expensive operation..')


    return ()=>{  // cleanup method
      console.log('unmount...')
    }
  },[age])// decpendency array , deps: responsible for rerendering the component

  return (
    <div style={{background:'lightgray',padding:'2rem', borderRadius:'10px',border:'1px solid', textAlign:'center'}}>
        <h1>this is counter app</h1>
        <h2>Count : {count}</h2>
        <button onClick={handleINC}>INC</button>
        <button onClick={handleDEC}>DEC</button>

    </div>
  )
}

export default Counter
