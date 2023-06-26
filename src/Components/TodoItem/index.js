import React from 'react'
import './todoItem.css'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {FaCheck} from 'react-icons/fa'
import {MdEdit} from 'react-icons/md'

function TodoItem(props) {
    
    return (
        <>
            <li className={`todoItem ${props.completed && "todoItem-complete"}`}>
                <button className={`Icon icon-check ${props.completed && "Icon-check--active"} ${!props.completed && "icon-check"}`} onClick={props.onComplete}> <FaCheck/></button>
                <p className={`todoItem-p ${props.completed && "todoItem-p--complete"}`}>{props.text}</p>
                <button className={`Icon ${!props.completed && "icon-edit"}`} disabled={props.completed} onClick={props.onEdit}> <MdEdit/></button>
                <button className={`Icon icon-delete`} onClick={props.onDelete}> <RiDeleteBin6Fill/></button>
            </li>
        </>
    )
}
export {TodoItem}