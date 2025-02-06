import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../redux/Slice/CartSlice";
import CategorySlice from "../redux/Slice/CategorySlice"
import SearchSlice from "./Slice/SearchSlice";
const store = configureStore({
    reducer : {
        cart: CartSlice,
        category: CategorySlice,
        search: SearchSlice,
    }
});

export default store;