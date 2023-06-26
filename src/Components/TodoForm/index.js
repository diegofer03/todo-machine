import React, { useState } from 'react'
import './TodoForm.css'
import { useNavigate } from 'react-router-dom'

function TodoForm(props) {
    const [text, setText] = useState(props.textValue || '')
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        props.submitEvent(text)
        navigate('/')
    }

    const onCancel = () =>{
        navigate('/')
    }

    const onChange = (e) => {
        setText(e.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>{props.todoText}</label>
            <textarea placeholder='create flux capacitor' value={text} onChange={onChange}/>
            <div className='TodoForm-buttonContainer'>
                <button className='TodoForm-button' type='button' onClick={onCancel}>Cancel</button>
                <button className='TodoForm-button add' type='submit'>{props.todoTextBtn}</button>
            </div>
        </form>
    )
}

export {TodoForm}