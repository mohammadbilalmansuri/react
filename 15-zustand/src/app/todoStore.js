import { create } from "zustand";

import { devtools, persist } from "zustand/middleware"; // here persist is for local storage.

const todoStore = (set) => ({
  todos: [], // initial state of the store.
  addTodo: (todo) => {
    // here set is use to do changes in the stete of zustand and state gives the access to get values from store.
    set((state) => ({
      todos: [todo, ...state.todos],
    }));
  },
  removeTodo: (todoId) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    }));
  },
  toggleTodoStatus: (todoId) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  updateTodo: (todoId, text) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, text: text } : todo
      ),
    }));
  },
});

// with the help of this we can use zustand store
const useTodoStore = create(
  devtools(
    persist(todoStore, {
      name: "todos",
    })
  )
);

export default useTodoStore;
