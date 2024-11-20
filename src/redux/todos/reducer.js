// import { ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_EDIT_TODO } from './actions';

// const initialState = {
//   todos: [
//     { id: 1, text: 'Learn React', completed: false },
//     { id: 2, text: 'Build a To-Do List', completed: false },
//     { id: 3, text: 'Celebrate', completed: false },
//   ],
//   editTodo: null, // Tambahkan ini untuk menyimpan todo yang sedang diedit
// };

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };
//     case DELETE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     case UPDATE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, ...action.payload.data } : todo)),
//         editTodo: null, // Hapus todo dari mode edit setelah diperbarui
//       };
//     case SET_EDIT_TODO:
//       return {
//         ...state,
//         editTodo: action.payload, // Set todo yang sedang diedit
//       };
//     default:
//       return state;
//   }
// };

// export default todoReducer;
