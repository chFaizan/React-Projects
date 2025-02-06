
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    carts:[]
}

const cartSlice = createSlice(
    {
        name:'cartslice',
        initialState,
        reducers:{
            addToCart:(state,action)=>{
                const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
                if(itemIndex >= 0) {
                    state.carts[itemIndex].qnty +=1;

                }  
                else{
                    const temp = {...action.payload, qnty:1}
               state.carts= [...state.carts, temp];
                }
               
            },
            removeCart:(state,action)=>{
                const dataremove = state.carts.filter((ele) => ele.id!== action.payload);
                state.carts = dataremove;
            
        },
        removeOneDec:(state,action)=>{
            const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id)
            if(state.carts[itemIndex_dec].qnty >= 1) {
                state.carts[itemIndex_dec].qnty -=1;

            }  
        },
        emptycartitem:(state,action)=>{
            state.carts= []
        }
    }
    }
);

export const {addToCart, removeCart,removeOneDec,emptycartitem} = cartSlice.actions;

export default cartSlice.reducer;