import { getToDos, refreshToDos, setToDos, removeTodos } from "./addremove.js";

const clearToDoItems = () => {
  const todos = getToDos();
  const newToDos = removeTodos((todo) => !todo.completed, todos);
  localStorage.setItem("todos", JSON.stringify(newToDos));
  setToDos(newToDos);
  refreshToDos();
};

export default clearToDoItems;
