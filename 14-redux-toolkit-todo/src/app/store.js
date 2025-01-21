import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// this is the store of redux toolkit. this file manages all states.
export const store = configureStore({
  reducer: todoReducer, // here we atach the all reducers of todoSlice file. we also can add multiple reducers here.
});
