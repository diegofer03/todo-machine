import React from 'react'
import './TodoEmpty.css'

function TodoEmpty({type}) {
    return (
        <div className='error_container'>
            {type === 'search' && <p>Nothing to show</p>}
            {type === 'load' && <p>Add new Tasks</p>}
        </div>
    )
}

export {TodoEmpty}