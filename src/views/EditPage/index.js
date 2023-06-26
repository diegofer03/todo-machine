import React from 'react'
import { TodoForm } from '../../Components/TodoForm'
import { TodoContext } from '../../Hooks/todoContext'
import { useLocation, useParams } from 'react-router-dom'

function EditPage() {
  const { editTodo, getText, loading} = React.useContext(TodoContext)
  const location = useLocation()
  const {id} = useParams()
  const selectedId = Number(id)
  let text
  if(location.state?.todo) 
    text = location.state.todo.text
  else if (loading)
    return <p>Loading...</p>
  else {
    let auxText = getText(selectedId)
    console.log(auxText)
    if(!auxText) return <p>Not Found</p>
    text = auxText
  }  
  return (
    <div>
      <TodoForm todoText={'Edit TODO'} todoTextBtn={'Edit'} textValue={text} submitEvent={(newText)=>editTodo(selectedId, newText)}/>
    </div>
  )
}

export {EditPage}