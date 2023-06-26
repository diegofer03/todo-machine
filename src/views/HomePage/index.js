import React, { useContext, useState } from 'react'
import './App.css';
import { TodoCounter } from '../../Components/TodoCounter';
import { TodoItem } from '../../Components/TodoItem';
import { TodoList } from '../../Components/TodoList';
import { TodoSearch } from '../../Components/TodoSearch';
import { CreateTodoButton } from '../../Components/CreateTodoButton';
import { TodoLoading } from '../../Components/TodoLoading';
import { TodoErrors } from '../../Components/TodoErros';
import { TodoEmpty } from '../../Components/TodoEmpty';
import { TodoContext } from '../../Hooks/todoContext';
import { Modal } from '../../Components/Modal';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navegate = useNavigate()
    const {error,
      loading,
      searchText,
      todosList,
      setSearchText,
      completedTaks,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal, 
      setOpenModal} = useContext(TodoContext)
    const [selectedTodo, setSelectedTodo] = useState({
      id: '',
      text: ''
    })

    const openDelete = (todo) => {
      setSelectedTodo({id: todo.id, text: todo.text})
      setOpenModal(state => !state)
    }
    return (
        <>
          <div className='App'>
            <TodoCounter completed={completedTaks} todo={todosList.length}/>
            <TodoSearch searchText={searchText} setSearchText={setSearchText} />
            {loading && <><TodoLoading/> <TodoLoading/> <TodoLoading/></>}
            {error && <TodoErrors/>}
            {(!loading && searchedTodos.length === 0) && < TodoEmpty type={'search'}/>}
            {(!loading && todosList.length === 0) && < TodoEmpty type={'load'}/>}
            <TodoList>
              {searchedTodos.map(todo => (
                <TodoItem key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onComplete={ () => completeTodo(todo.id) }
                onDelete={()=> openDelete(todo)}
                onEdit={()=>navegate(`edit/${todo.id}`,{
                  state: todo
                })}
                />
              ))}
            </TodoList>
            <CreateTodoButton addTodo={() => navegate('/add')}/>
            {openModal && <Modal>
              <div className='delete-container '>
                <label className='delete-title'>Delete TODO</label>
                <p className='delete-textarea'>{selectedTodo.text}</p>
                <div className='delete-buttonContainer'>
                  <button className='delete-button' onClick={() => setOpenModal(state => !state)}>Cancel</button>
                  <button className='delete-button delete' onClick={()=>deleteTodo(selectedTodo.id)}>Delete</button>
                </div>
              </div>
              </Modal>}
          </div>
        </>
      );
}

export {HomePage}