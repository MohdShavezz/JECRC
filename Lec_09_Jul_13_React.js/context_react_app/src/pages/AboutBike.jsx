import React, { useContext } from 'react'
import { MyContext } from '../Context'

const AboutBike = () => {

  const data = useContext(MyContext)
  console.log('AboutBike', data)
  return (
    <div>
      AboutBike
    </div>
  )
}

export default AboutBike
