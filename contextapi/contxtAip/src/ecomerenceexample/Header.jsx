import React, { useContext } from 'react'
import { CartContext } from './CreateContext'

export default function Header() {
    const {cart} = useContext(CartContext);
    return (
    
    <>
    <header>
        <h1>E Commerence</h1>
        <p>Cart Item: {cart.length}</p>
    </header>
    </>
  );
}
