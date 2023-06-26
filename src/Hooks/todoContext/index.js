import React, { useState } from 'react'
import { useLocalStorage } from '../useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider ({children}){
    const { item: todosList, saveItem: setTodosList, error, loading} = useLocalStorage('TODO_V2', [])
    const [searchText, setSearchText] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const completedTaks = todosList.filter(todo => !!todo.completed).length

    const searchedTodos = todosList.filter( (todo) => {
        const todoText = todo.text.toLowerCase()
        const searchValue = searchText.toLowerCase()
        return todoText.includes(searchValue)
    } )

    const completeTodo = (id) => {
        const auxTodos = [...todosList]
        const textIndex = auxTodos.findIndex((todo) => todo.id === id)
        auxTodos[textIndex].completed = !auxTodos[textIndex].completed
        setTodosList(auxTodos)
    }

    const addTodo = (text) => {
        const auxTodos = [...todosList]
        
        auxTodos.push({
            id: todoId(),
            text: text,
            completed: false
        })
        setTodosList(auxTodos)
    }

    const editTodo = (id, text) => {
        const auxTodos = [...todosList]
        const textIndex = auxTodos.findIndex((todo) => todo.id === id)
        auxTodos[textIndex].text = text
        setTodosList(auxTodos)
    }

    const getText = (id) => {
        const auxTodos = [...todosList]
        const textIndex = auxTodos.findIndex((todo) => todo.id === id)
        return auxTodos[textIndex]?.text || null
    }

    const deleteTodo = (id) => {
        const auxTodos = [...todosList]
        const textIndex = auxTodos.findIndex((todo) => todo.id === id)
        auxTodos.splice(textIndex, 1)
        setTodosList(auxTodos)
        setOpenModal(false)
    }
    return (
        <TodoContext.Provider value={{error,
            loading,
            searchText,
            todosList,
            setSearchText,
            completedTaks,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            addTodo,
            editTodo,
            getText, 
            setOpenModal}}>
            {children}
        </TodoContext.Provider>
    )
}

const todoId = () => ( Date.now() )

export {TodoProvider, TodoContext}