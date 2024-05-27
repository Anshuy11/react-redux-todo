import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date().getTime(),
        todoList: action.payload, 
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
     
    const deleteData = state.todos.filter((item)=>{
      return item.id !== action.payload

    });
    state.todos=deleteData
    },
    
  },
});
export default todoSlice.reducer;

export const { addTodo, removeTodo } = todoSlice.actions;
