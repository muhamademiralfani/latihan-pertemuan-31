import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, deleteTodo, setEditTodo, updateTodoStatus } from "../redux/async/todos/actions";

const TodoList = () => {
  const lang = useSelector((state) => state.lang.lang);
  const { todos, loading, error, isSuccess } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // Get data pertama kali
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // Get data ketika isSuccess true
  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchTodos());
    }
  }, [dispatch, isSuccess]);

  const handleComplete = (id) => {
    dispatch(updateTodoStatus(id, true));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!todos.length) {
    return <p>{lang === "en" ? "No todos found" : "Tidak ada todo yang ditemukan"}</p>;
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <a
            onClick={() => handleComplete(todo.id)}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </a>
          <div>
            <button
              onClick={() => dispatch(setEditTodo(todo))}
              className="btn btn-warning btn-sm me-2"
            >
              {lang === "en" ? "Edit" : "Edit"}
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="btn btn-danger btn-sm"
            >
              {lang === "en" ? "Delete" : "Hapus"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
