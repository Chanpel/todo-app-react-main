import React from 'react'

const Todo = ({todo, onDelete}) => {
  

  return (
    <div className='todo'>
        <h3>{todo.text}</h3>
        <button className='btn-sm' onClick={()=> onDelete(todo.id)}>x</button>
    </div>
  )
}

export default Todo