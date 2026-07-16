import React, { useEffect, useMemo, useState } from 'react'

const RenderTodos = ({ todos, isPrivate, handleUpdate, handleDelete }) => {

    const [searchTerm, setSarchTerm] = useState('')
   
    const filterTodos=useMemo(()=>{
        return todos.filter((todo)=>{
            const search=searchTerm.toLocaleLowerCase() //
            return(
                todo.title.toLocaleLowerCase().includes(search)||
                todo.description.toLocaleLowerCase().includes(search)
            )
        })
    },[todos,searchTerm])


    return (
        <div className="todo-list">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <h1>Todo List</h1>
                <input value={searchTerm} style={{border:'1px solid' , borderRadius:'.5rem',padding:'.3rem 2rem'}} type="searchTerm" placeholder='search..' onChange={e => setSarchTerm(e.target.value)} />
            </div>

            {filterTodos.length > 0 ? (
                filterTodos.map((todo) => (
                    <div className="todo-item" key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        {
                            !isPrivate &&
                            <div className="todo-actions">
                                <button
                                    className="update-btn"
                                    onClick={() => handleUpdate(todo.id)}
                                >
                                    Update
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        }

                    </div>
                ))
            ) : (
                <p>No Todos Available</p>
            )}
        </div>
    )
}

export default RenderTodos
