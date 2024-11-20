import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Navbar from './layouts/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card shadow'>
              <div className='card-body'>
                <h1 className='card-title text-center mb-4'>To-Do List</h1>
                <TodoInput />
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
