import React, { useState } from "react";
import useTodoStore from "../app/todoStore";

function Todos() {
  const [todoToUpdate, setTodoToUpdate] = useState({ id: null, text: "" });
  const { todos, updateTodo, removeTodo, toggleTodoStatus } = useTodoStore();

  return (
    <div className="mt-3 flex flex-col w-full gap-3">
      <h3 className="text-xl font-semibold text-center">
        {todos.length === 0 ? "You have no todos." : "All Todos"}
      </h3>
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center bg-slate-700 py-2 px-3 rounded"
            key={todo.id}
          >
            <div className="flex gap-3 items-center">
              <input
                checked={todo.completed}
                type="checkbox"
                onChange={() => toggleTodoStatus(todo.id)}
              />

              <input
                type="text"
                value={
                  todoToUpdate.id === todo.id ? todoToUpdate.text : todo.text
                }
                className={`text-white bg-transparent outline-none ${
                  todo.completed && "line-through"
                }`}
                readOnly={todoToUpdate.id !== todo.id}
                onChange={(e) =>
                  setTodoToUpdate({ id: todo.id, text: e.target.value })
                }
                disabled={todo.completed}
              />
            </div>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => {
                  if (todoToUpdate.id === todo.id) {
                    updateTodo(todo.id, todoToUpdate.text);
                    setTodoToUpdate({ id: null, text: "" });
                  } else {
                    setTodoToUpdate({ id: todo.id, text: todo.text });
                  }
                }}
                className={`text-white bg-blue-600 py-1 px-2 hover:bg-blue-700 rounded ${
                  todo.completed && "opacity-70 pointer-events-none"
                }`}
                disabled={todo.completed}
              >
                {todoToUpdate.id === todo.id ? "Update" : "Edit"}
              </button>

              <button
                onClick={() => removeTodo(todo.id)}
                className="text-white bg-red-600 py-1 px-2 hover:bg-red-700 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
