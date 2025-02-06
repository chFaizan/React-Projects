import React, { useContext } from 'react'
import { CartContext } from './CreateContext'

export default function Cart() {
    const {addToCart} = useContext(CartContext);
    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
      ];
      return (
    
        <>
        {
        products.map((data) => (
            <div style={{marginLeft:'100px'}} key={data.id}>
                <p>{data.name}</p>
                <button onClick={()=> addToCart(data)}>Add to Cart</button>
            </div>
        ))
    }
        </>
      );
}
