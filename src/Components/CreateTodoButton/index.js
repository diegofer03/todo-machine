import React from 'react'
import './createTodoButton.css'

function CreateTodoButton({setOpenModal}) {
    return (
        <section className='createbutton_container'>
            <button className="CreateTodoButton" onClick={()=>{ setOpenModal(state => !state) }}>Add task</button>
        </section>
      );
}

export {CreateTodoButton}