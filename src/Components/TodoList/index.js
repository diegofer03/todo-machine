import React from 'react'
import './todoList.css'

function TodoList(props) {
    return (
        <>
            <section className='list_container'>
                <ul>
                    {props.children}
                </ul>
            </section>
        </>
    )   
}

export {TodoList}