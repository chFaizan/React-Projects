import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const addToCart =(item) => setCart((pre) => [...pre, item]);
    const clearCart = () => setCart([]);

    return(
        <CartContext.Provider value={{cart,addToCart,clearCart}}>{children}</CartContext.Provider>

    )
}