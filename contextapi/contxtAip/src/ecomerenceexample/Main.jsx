import React from 'react'
import Header from './Header';
import Cart from './Cart';
import { CartProvider } from './CreateContext';

export default function Main() {
    return (
        <CartProvider>
          <Header />
          <Cart />
        </CartProvider>
      );
}

