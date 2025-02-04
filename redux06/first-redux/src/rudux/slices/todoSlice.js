import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // current 사용해야 현재 상태를 볼 수 있음
            console.log(current(state));
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            console.log(current(state));
            return state.slice(0, -1);
        },
        removeAll: (state, action) => {
            console.log(current(state));
            return initialState;
        },
    },
});

export const { addTodo, removeTodo, removeAll } = todoSlice.actions;

export default todoSlice.reducer;
