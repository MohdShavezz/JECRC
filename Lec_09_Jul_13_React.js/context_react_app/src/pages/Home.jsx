import React, { useContext, useState } from 'react'
import { MyContext } from '../Context'

const Home = () => {
  const {AddPhoneNumber}=useContext(MyContext)
  const [phone,setPhone]=useState('')

  function handleChange(e){
    setPhone(e.target.value)
  }
  function handleClick(e){
    e.preventDefault()
    if(!phone){
      alert('enter number')
      return
    }
    AddPhoneNumber(phone)
    console.log('phone number added..')
  }

  // console.log(AddPhoneNumber)

  return (
    <div>
      HOme
      <form >
        <input type="phone" placeholder='enter number' onChange={handleChange}/>
        <button onClick={handleClick}>Add Number</button>
      </form>
    </div>
  )
}

export default Home
