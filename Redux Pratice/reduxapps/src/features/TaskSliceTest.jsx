import {store} from "../StoreToolKit"
import { addTask, deleteTask } from "./app/TaskSlice";


store.dispatch(addTask("Faizan is Software Enginner"))
store.dispatch(addTask("Numan is Software Enginner"))
store.dispatch(deleteTask(1))
console.log("Delete State is ", store.getState());
store.dispatch(addTask("Javed is Software Enginner"))
console.log("Current State is ", store.getState());

store.dispatch(addTask("Bilal is Sports Man"))
console.log("Current State is ", store.getState());
