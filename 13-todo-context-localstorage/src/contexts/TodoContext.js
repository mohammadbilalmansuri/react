import { createContext, useContext } from "react";

// Context Created
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  todoComplete: (id) => {},
});

// custom hook for using cotext value everywhere
export const useTodo = () => {
  return useContext(TodoContext);
};

// context provider
export const TodoProvider = TodoContext.Provider;
