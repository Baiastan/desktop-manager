import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [],
  todos: [],
  isOverdue: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    addNewLink: (state, action) => {
      state.links = [action.payload, ...state.links];
    },
    updateLinks: (state, action) => {
      state.links = [...action.payload];
    },
    addNewTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    updateTodos: (state, action) => {
      state.todos = [...action.payload];
    },
    updateOverdue: (state) => {
      state.isOverdue = true;
    },
  },
});

export const { addNewLink, updateLinks, addNewTodo, updateTodos, updateOverdue } = globalSlice.actions;

export default globalSlice.reducer;
