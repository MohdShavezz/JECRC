import React, { useCallback, useState } from 'react'

const Child=({fn})=>{
    return <>
            <button onClick={fn}>INC from Child</button>
    </>
}

const Parent = () => {

    const [count,setCount]=useState(0)
    const [theme,setTheme]=useState('light')

    // function handleInc(){
    //     console.log('handle Inc run.')
    //     setCount(count+1)
    // }

    const handleInc=useCallback(()=>{ // function memoize
        console.log('handle Inc run.')
        setCount(count+1)
    },[count])

    console.log('parent comp run..')

  return (
    <div>
      <p>Count: {count}</p>
      <p>Theme: {theme}</p>

       <Child fn={handleInc}/> <br />
      <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>ToggleTheme</button>
    </div>
  )
}

export default Parent
