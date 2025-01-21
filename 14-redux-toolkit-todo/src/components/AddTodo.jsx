import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); // Dispatch function for Redux actions, use to manipulate values in the store
  const todoToUpdateId = useSelector((state) => state.todoToUpdateId); // Get the id of the todo being edited
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    if (todoToUpdateId !== null) {
      const todoToUpdate = todos.find((todo) => todo.id === todoToUpdateId);
      if (todoToUpdate) {
        setInput(todoToUpdate.text);
      }
    }
  }, [todoToUpdateId, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      return;
    }
    if (todoToUpdateId !== null) {
      dispatch(updateTodo({ id: todoToUpdateId, text: input }));
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
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
        {todoToUpdateId !== null ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default AddTodo;
