import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const createTodo = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={createTodo} className="flex w-full">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full outline-none py-2 bg-white px-3 rounded-l-lg text-slate-900 text-lg font-semibold"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg py-2 px-5 text-lg font-semibold outline-none bg-teal-600 hover:bg-blue-600 transition-all duration-200"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
