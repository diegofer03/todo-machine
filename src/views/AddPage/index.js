import React from 'react'
import { TodoForm } from '../../Components/TodoForm'
import { TodoContext } from '../../Hooks/todoContext'

function AddPage() {
  const { addTodo} = React.useContext(TodoContext)
  return (
    <div>
      <TodoForm todoText={'Create TODO'} todoTextBtn={'Create'} submitEvent={addTodo}/>
    </div>
  )
}

export {AddPage}