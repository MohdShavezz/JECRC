import React, { useMemo, useState } from 'react'

function ExpensiveFn() {
    let sum = 0
    for (let index = 0; index < 10000000; index++) {
        sum += index
    }
    console.log('expensive fn executed.')
    return sum // 2345666
}

const CounterComp = () => {

    const [count, setCount] = useState(0)
    const [exp,setExp]=useState(1)
    
    // setCount(count+1)
    // setCount(c=>c+1)  better

     // 2345666
    const res=useMemo(()=>{ // memoize value
        return ExpensiveFn()
    },[exp])


    console.log('render countercomp')


    return (
        <div>
            Count: {count}
            <br />
            <button onClick={() => setCount(val => val + 1)}>INC</button>
            <button onClick={() => setCount(val => val - 1)}>DEC</button>
            <button onClick={() => setCount(0)}>RESET</button>
        </div>
    )
}

export default CounterComp
