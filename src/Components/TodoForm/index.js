import React, { useContext, useState } from 'react'
import './TodoForm.css'
import { TodoContext } from '../../Hooks/todoContext'

function TodoForm() {
    const { setOpenModal, addTodo} = useContext(TodoContext)
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setOpenModal(false)
    }

    const onCancel = () =>{
        setOpenModal(false)
    }

    const onChange = (e) => {
        setText(e.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Create new Task</label>
            <textarea placeholder='create flux capacitor' value={text} onChange={onChange}/>
            <div className='TodoForm-buttonContainer'>
                <button className='TodoForm-button cancel' type='button' onClick={onCancel}>Cancel</button>
                <button className='TodoForm-button add' type='submit'>Create</button>
            </div>
        </form>
    )
}

export {TodoForm}