import { createSlice, nanoid } from "@reduxjs/toolkit";

// a slice the is the collection of reducers to perform operations related this file.
// reducers are functions who perform operations of this slice in the state.

// this defines the initial state of the this slice means what will the values will be present in this slice.
const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
  todoToUpdateId: null, // To keep track of the todo being edited
};

export const todoSlice = createSlice({
  name: "todo", //this is name of the slice, here we can not change the key it will always be name.
  initialState, // we can also declate initial state here.

  // here in the reducer we have access of two variables one is state and one is actions.
  // state is used to get access of the values present in the state of the slice.
  // action is used to manupulate values present in the slice so the values will be changed in the store.
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // this generated a unique id for every todo.
        text: action.payload, // here action.payload use to get values to save in the text key in the todo.
      };
      state.todos.push(todo); // in the context api every time we need to spread values but here we can use methods.
    },
    todoToUpdate: (state, action) => {
      state.todoToUpdateId = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
      state.todoToUpdateId = null;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, todoToUpdate, removeTodo, updateTodo } =
  todoSlice.actions; // here we are exporting every reducers because we can use then seperatly in various file.

export default todoSlice.reducer; // here we are passing the collection of all stores of this slice for store.
