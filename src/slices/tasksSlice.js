import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    elements: []
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state) =>{
            console.log(state)
        },
        removeTask: (state) =>{
            console.log(state)
        }
    }
})

export const {addTask, removeTask} = tasksSlice.actions;
export default tasksSlice.reducer;