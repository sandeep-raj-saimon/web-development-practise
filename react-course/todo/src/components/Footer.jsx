import React from 'react'
import { useState } from 'react'

const Footer = ({ setTodos, todos }) => {
    const [todo, setTodo] = useState('')
  return (
    <div>
        <input type="text" value={todo} placeholder='add new todo' onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={() => setTodos([...todos, todo])}>Add Todo</button>
    </div>
  )
}

export default Footer