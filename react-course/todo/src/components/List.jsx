import React from 'react'

const List = ({ todo }) => {
  return (
    <div>
        <input type="checkbox" id={todo} name={todo} value={todo}/>
        <label htmlFor={todo}>{todo}</label>
    </div>
  )
}

export default List