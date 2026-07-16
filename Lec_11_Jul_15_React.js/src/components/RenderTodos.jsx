import React from 'react'

const RenderTodos = ({todos,isPrivate,handleUpdate,handleDelete}) => {
    return (
        <div className="todo-list">
            <h1>Todo List</h1>

            {todos.length > 0 ? (
                todos.map((todo) => (
                    <div className="todo-item" key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                    {
                        !isPrivate&&
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
