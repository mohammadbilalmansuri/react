import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const todoComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, todoComplete }}
    >
      <h1 className="text-2xl font-bold">Manage Your To Do's</h1>
      <div className="w-[600px] flex flex-col gap-5">
        <TodoForm />

        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}

export default App;
