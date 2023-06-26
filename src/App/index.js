import React from 'react'
import { TodoProvider } from '../Hooks/todoContext';
import { HomePage } from '../views/HomePage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AddPage } from '../views/AddPage';
import { EditPage } from '../views/EditPage';

function App() {
  return (
    <HashRouter>
      <TodoProvider>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/add' element={<AddPage />}/>
          <Route path='/edit/:id' element={<EditPage />}/>
          <Route path='*' element={<p>Not Found</p>}/>
        </Routes>
      </TodoProvider>
    </HashRouter>
  );
}

export default App;
