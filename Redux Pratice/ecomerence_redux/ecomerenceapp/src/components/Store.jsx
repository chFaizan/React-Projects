import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootred from "../redux/reducer/Main";

const store = createStore(
    rootred,
    composeWithDevTools() 
);

export default store;
