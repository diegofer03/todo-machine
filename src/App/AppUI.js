import React, { useContext } from 'react'
import './App.css';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoItem } from '../Components/TodoItem';
import { TodoList } from '../Components/TodoList';
import { TodoSearch } from '../Components/TodoSearch';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodoLoading } from '../Components/TodoLoading';
import { TodoErrors } from '../Components/TodoErros';
import { TodoEmpty } from '../Components/TodoEmpty';
import { TodoContext } from '../Hooks/todoContext';
import { Modal } from '../Components/Modal';
import { TodoForm } from '../Components/TodoForm';
import { UpdateAlerttWithStorageListener } from '../Hooks/updateAlert';

function AppUI() {
    const {error,
      loading,
      searchText,
      todosList,
      setSearchText,
      completedTaks,
      searchedTodos,
      completeTodo,
      deleteTodo,
      sincronize,
      openModal, 
      setOpenModal} = useContext(TodoContext)
    return (
        <>
          <div className='App'>
            <TodoCounter completed={completedTaks} todo={todosList.length}/>
            <TodoSearch searchText={searchText} setSearchText={setSearchText} />
            <UpdateAlerttWithStorageListener sincronize={sincronize}/>
            {loading && <><TodoLoading/> <TodoLoading/> <TodoLoading/></>}
            {error && <TodoErrors/>}
            {(!loading && searchedTodos.length === 0 && todosList.length !== 0) && < TodoEmpty type={'search'}/>}
            {(!loading && todosList.length === 0) && < TodoEmpty type={'load'}/>}
            {(!loading && !error) && <TodoList>
              {searchedTodos.map(todo => (
                <TodoItem key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={ () => completeTodo(todo.text) }
                onDelete={()=>deleteTodo(todo.text)}
                />
              ))}
            </TodoList> }
            
            <CreateTodoButton setOpenModal={setOpenModal}/>
            {openModal && <Modal>
                <TodoForm/>
              </Modal>}
          </div>
        </>
      );
}

export {AppUI}