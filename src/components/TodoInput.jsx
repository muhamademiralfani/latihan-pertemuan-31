/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../redux/async/todos/actions';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = () => {
  const lang = useSelector((state) => state.lang.lang);
  const editTodo = useSelector((state) => state.todo.editTodo);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text); // Isi input dengan text todo yang sedang diedit
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTodo) {
      dispatch(updateTodo(editTodo.id, { text }));
    } else {
      dispatch(addTodo({ id: uuidv4(), text, completed: false }));
    }
    setText('');
  };
  return (
    <div className='mb-3'>
      <form onSubmit={handleSubmit} className='input-group'>
        <input value={text} onChange={(e) => setText(e.target.value)} type='text' className='form-control' placeholder={lang === 'en' ? 'Add a new todo' : 'Tambahkan todo baru'} required />
        <button type='submit' className='btn btn-primary'>
          {lang === 'en' ? (editTodo ? 'Save' : 'Add') : editTodo ? 'Simpan' : 'Tambah'}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
