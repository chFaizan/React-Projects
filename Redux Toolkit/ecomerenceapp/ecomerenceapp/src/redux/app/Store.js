import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/CartSlices"

export const store = configureStore({
    reducer:{
        allcart:cartSlice
    }
})
