import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, todoComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const todoCompleted = () => {
    todoComplete(todo.id);
  };

  return (
    <div
      className={`flex rounded-lg p-3 gap-3 items-center transition-all duration-200 ${
        todo.completed ? "bg-teal-600" : "bg-blue-600"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-5"
        checked={todo.completed}
        onChange={todoCompleted}
      />
      <input
        type="text"
        className={`outline-none w-full text-lg bg-transparent
          ${isTodoEditable ? "underline" : ""} 
          ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        className="bg-white p-1 rounded text-sm transition-all duration-150 disabled:opacity-70"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      <button
        className="bg-white p-1 rounded text-sm "
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
