import React, { useEffect, useState } from 'react'
import RenderTodos from '../components/RenderTodos'
import { useAuth } from '../context/AuthContext'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const {user}=useAuth()

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')) || [])
  }, [])

  return (
    <div className='w-200' style={{margin:'auto'}}>
      <RenderTodos todos={todos} isPrivate={true} />
    </div>
  )
}

export default Todo
