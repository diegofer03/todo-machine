import React from 'react'
import './todoItem.css'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {FaCheck} from 'react-icons/fa'

function TodoItem(props) {
    
    return (
        <>
            <li className={`todoItem ${props.completed && "todoItem-complete"}`}>
                <span className={`Icon icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}> <FaCheck/></span>
                <p className={`todoItem-p ${props.completed && "todoItem-p--complete"}`}>{props.text}</p>
                <span className={`Icon icon-delete`} onClick={props.onDelete}> <RiDeleteBin6Fill/></span>
            </li>
        </>
    )
}
export {TodoItem}