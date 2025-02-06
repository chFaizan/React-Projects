import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    task: [],
};

//create Slice
export const taskReducer = createSlice({
    name:'task',
    initialState,
    reducers:{
    addTask(state,action) {
        state.task.push(action.payload);
    },
    deleteTask(state,action) {
        state.task =state.task.filter((data, index) => index !== action.payload);
    },
    
    clearAllTask(state){
        state.task=[];
    },
    },
});
console.log(taskReducer);
export const {addTask,deleteTask, clearAllTask} = taskReducer.actions;
