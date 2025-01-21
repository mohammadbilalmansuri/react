import React, { useState } from "react";
import useTodoStore from "../app/todoStore";

function AddTodo() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (!input) return setError("Please enter todo");

    addTodo({
      id: Math.ceil(Math.random() * 1000000),
      text: input,
      completed: false,
    });
    setInput("");
    setError("");
  };

  return (
    <>
      <form onSubmit={handleTodoSubmit} className="flex w-full">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full outline-none py-2 bg-slate-100 text-gray-900 px-3 rounded-l-lg font-bold placeholder:text-gray-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg py-2 px-5 text-lg font-semibold outline-none bg-teal-600 hover:bg-teal-700 transition-all duration-200"
        >
          Add
        </button>
      </form>
      {error && (
        <p className="text-red-500 font-medium text-lg text-center">{error}</p>
      )}
    </>
  );
}

export default AddTodo;
