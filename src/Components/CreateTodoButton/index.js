import React from 'react'
import './createTodoButton.css'

function CreateTodoButton({addTodo}) {
    return (
        <section className='createbutton_container'>
            <button className="CreateTodoButton" onClick={addTodo}>Add task</button>
        </section>
      );
}

export {CreateTodoButton}