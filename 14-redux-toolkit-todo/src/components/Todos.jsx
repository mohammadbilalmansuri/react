import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, todoToUpdate } from "../features/todo/todoSlice"; // Import the todoToUpdate action

function Todos() {
  const todos = useSelector((state) => state.todos); // Get todos from Redux store // use to get values from the store
  const dispatch = useDispatch();
  const todoToUpdateId = useSelector((state) => state.todoToUpdateId);

  console.log(todoToUpdateId);

  return (
    <div className="mt-3 flex flex-col w-full gap-3">
      <h3 className="text-xl font-semibold text-center">
        {todos.length === 0 ? "You have no todo." : "All Todos"}
      </h3>
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center bg-slate-700 py-2 px-3 rounded"
            key={todo.id}
          >
            <input
              type="text"
              value={todo.text}
              className="text-white bg-transparent outline-none"
              readOnly
            />
            <div className="flex gap-2">
              <button
                disabled={todoToUpdateId !== null ? true : false}
                onClick={() => dispatch(todoToUpdate(todo.id))} // Pass the id of the todo being updated
                className="text-white bg-blue-600 py-1 px-2 hover:bg-blue-700 rounded"
              >
                {todoToUpdateId !== null ? "Editing" : "Edit"}
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
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
