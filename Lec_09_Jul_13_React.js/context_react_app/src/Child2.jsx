import React, { useContext } from 'react'
import { MyContext } from './Context'

const Child2 = () => {
    const data = useContext(MyContext)
    console.log('Child2', data)


    return (
        <div>
            Child2 Age: {data.age}
        </div>
    )
}

export default Child2
