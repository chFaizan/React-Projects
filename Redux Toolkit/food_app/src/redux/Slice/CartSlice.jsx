import { createSlice } from "@reduxjs/toolkit";

const CartSlice =  createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addtoCart:(state,action)=>{
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
              state.cart[itemIndex].qty += 1;
            } else {
              state.cart.push({...action.payload, qty: 1});
            }
      
        },
        removeCart:(state,action)=>{
            state.cart = state.cart.filter((items)=> items.id!==action.payload.id)
        },
        removeOneDec:(state,action)=>{
            const itemIndex_dec = state.cart.findIndex((item) => item.id === action.payload.id)
            if (state.cart[itemIndex_dec].qty >= 1) {
                state.cart[itemIndex_dec].qty -= 1;

            }  
        },
    },
})

export const  {addtoCart,removeCart,removeOneDec} = CartSlice.actions;
export default CartSlice.reducer;