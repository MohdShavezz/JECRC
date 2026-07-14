import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [users,setUsers]=useState([])


//    const res= fetch('https://dummyjson.com/users').then((data)=>{
//        return data.json()
//    })
//    res.then(data=>console.log(data.users))

 async function getUsers(){
   const res= await fetch('https://dummyjson.com/users')
    const data = await res.json()
    setUsers(data.users)
    // console.log(data.users)
 }

 useEffect(()=>{
    getUsers()
 },[])

console.log(users)
  return (
    <div>
      <h2>USERLIST</h2>

      {
        users.length>0&&
        users.slice(0,10).reverse().map(user=>(
            <div key={user.id}>
               ID: {user?.id}
               NAME:  {user?.firstName}
               AGE: {user?.age}
            </div>
        ))
      }
    </div>
  )
}

export default UserList
