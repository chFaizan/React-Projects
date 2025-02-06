import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {thunk} from "redux-thunk";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/del";
const FETCH_DATA = "task/fetch";
const CLEAR_TASK = "task/clear";

const initialState = {
    task: [],
    isLoading: false,
};

//  Reducer function here
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload],
            };

            case DELETE_TASK:
                const updatedTask = state.task.filter((data,index) =>{
                    return index !== action.payload;
                });
                return {
                    task: updatedTask,
                }; 
    

        case CLEAR_TASK:
            return {
                ...state,
                task: [],
            };

        case FETCH_DATA:
            return {
                ...state,
                task: [...state.task, ...action.payload],
            };

        default:
            return state;
    }
};

// Redux Store
export const store = createStore(
    taskReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// Action Creators
export const addTask = (data) => ({
    type: ADD_TASK,
    payload: data,
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
});

export const clearAllTask = () => ({
    type: CLEAR_TASK,
});


store.dispatch(addTask("This is First Data"))
 store.dispatch(addTask("Kamran is Data Scienctist"))
 console.log("Current State is ", store.getState());

 
 
 store.dispatch(addTask("Bilal is Sports Man"))
 console.log("Current State is ", store.getState());

 
export const fetchTask = () => async (dispatch) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
        const data = await response.json();
        dispatch({
            type: FETCH_DATA,
            payload: data.map((item) => item.title),
        });
    } catch (error) {
        console.error("Failed to fetch tasks:", error);
    }
};
