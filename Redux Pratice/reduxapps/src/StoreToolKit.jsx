import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./features/app/TaskSlice";

// 2 create the redux store using reducers
export const store = configureStore({
    reducer: {
        taskReducer:taskReducer.reducer,
    },
});


 


