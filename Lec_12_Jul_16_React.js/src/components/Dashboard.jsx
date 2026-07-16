import React, { useEffect, useState } from "react";
import "./dashboard.css";
import RenderTodos from "./RenderTodos";

// const todos=[
//   {id:1,title:'reading',description:'i m reading'},
// ]

const Dashboard = () => {

  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [editId, setEditId] = useState(null)

  function saveLocalstorage(list){
      setTodos(list)
      // console.log(list)
      localStorage.setItem('todos',JSON.stringify(list))
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !desc) return;

    if (editId) {
      //update todo
      const updated=todos.map(todo=>todo.id===editId?{...todo,title,description:desc}:todo)
      // console.log(updated)
      // setTodos(updated)
      saveLocalstorage(updated)
      setEditId(null)
      setTitle('')
      setDesc('')

    } else {
      //add todoz
      let newTodo = {
        id: Date.now(),
        title: title,
        description: desc
      }
      // setTodos(todos => [...todos, newTodo])
      const newArr=[...todos,newTodo]
      saveLocalstorage(newArr)
    }

  }


  function handleUpdate(todoid) {
    // get that todo with id and put it in form
    let todo=todos.find(todo=>todo.id===todoid)
    // console.log(todo)
    setEditId(todo.id)
    setTitle(todo.title)
    setDesc(todo.description)
  }
  function handleDelete(todoid) {
    // setTodos(todos.filter(todo=>todo.id!==todoid))
    saveLocalstorage(todos.filter(todo=>todo.id!==todoid))
  }

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem('todos')) ||[])
  },[])

  return (
    <div className="dashboard">
      <div className="todo-card">
        <h2>Add New Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
          />

          <textarea
            name="description"
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter description"
            rows="5"
            value={desc}
          ></textarea>

          <button type="submit">{editId?"Update Todo":"Add Todo"}</button>
        </form>
      </div>
      <RenderTodos 
      todos={todos} 
      isPrivate={false}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
      />
    </div>
  );
};

export default Dashboard;