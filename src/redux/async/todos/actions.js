import axios from 'axios';

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const PROCESS_TODO_SUCCESS = 'PROCESS_TODO_SUCCESS';
export const SET_EDIT_TODO = 'SET_EDIT_TODO';

// action creators
export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      const response = await axios.get('http://localhost:3000/todos');
      const data = await response.data;
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      dispatch({ type: PROCESS_TODO_SUCCESS, payload: { id, completed: true } });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const addTodo = (data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      await axios.post(`http://localhost:3000/todos`, data);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const updateTodo = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      await axios.put(`http://localhost:3000/todos/${id}`, data);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const updateTodoStatus = (id, completed) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      await axios.patch(`http://localhost:3000/todos/${id}`, { completed });
      dispatch({ type: PROCESS_TODO_SUCCESS, payload: { id, completed } });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const setEditTodo = (todo) => {
  return {
    type: SET_EDIT_TODO,
    payload: todo,
  };
};
