import React, { useState } from 'react'
import { useLocalStorage } from '../useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider ({children}){
    const { item: todosList, saveItem: setTodosList, error, loading} = useLocalStorage('TODO_V1', [])
    const [searchText, setSearchText] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const completedTaks = todosList.filter(todo => !!todo.completed).length

    const searchedTodos = todosList.filter( (todo) => {
        const todoText = todo.text.toLowerCase()
        const searchValue = searchText.toLowerCase()
        return todoText.includes(searchValue)
    } )

    const completeTodo = (text) => {
        const auxTodos = [...todosList]
        const textIndex = auxTodos.findIndex((todo) => todo.text === text)
        auxTodos[textIndex].completed = !auxTodos[textIndex].completed
        setTodosList(auxTodos)
    }

    const addTodo = (text) => {
        const auxTodos = [...todosList]
        
        auxTodos.push({
            text: text,
            completed: false
        })
        setTodosList(auxTodos)
    }

    const deleteTodo = (text) => {
        const auxTodos = [...todosList]
        const textIndex = auxTodos.findIndex((todo) => todo.text === text)
        auxTodos.splice(textIndex, 1)
        setTodosList(auxTodos)
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
            setOpenModal}}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoProvider, TodoContext}