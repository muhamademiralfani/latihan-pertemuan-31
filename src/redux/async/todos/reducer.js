import { FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, PROCESS_TODO_SUCCESS, SET_EDIT_TODO } from './actions';

const initialState = {
  todos: [],
  loading: false,
  error: null,
  isSuccess: false,
  editTodo: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isSuccess: false,
        editTodo: null,
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PROCESS_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo)),
      };
    case SET_EDIT_TODO:
      return {
        ...state,
        editTodo: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
