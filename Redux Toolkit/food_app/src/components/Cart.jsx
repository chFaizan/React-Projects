import React, { useState } from 'react'
import ItemCard from "../components/ItemCard"
import { useSelector } from 'react-redux'
import { IoMdClose } from "react-icons/io";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';



const Cart = () => {
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart || []);
  const totalQty = cartItems.reduce((totalqty, item) => totalqty + item.qty, 0);
  const totalPrice = cartItems.reduce((totalprice, item) => totalprice + item.qty * item.price, 0);

  return (

    <>
      <div className={`cart-container ${activeCart ? "active" : "inactive"}`}>
        <div className="cart-header">

          <span>My Order</span>
          <IoMdClose onClick={() => setActiveCart(!activeCart)} className="close-btn" />

        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="cart-empty">Your cart is empty</h2>
        )}

        <div className="cart-footer">
          <h3>Items: {totalQty} </h3>
          <h3>Total Amount:  {totalPrice} </h3>
          <hr />
          <button onClick={() => navigate("/sucess")}>Checkout</button>

        </div>


      </div>
      <BsFillCartPlusFill
        className={`crt ${totalQty > 0 ? "bounce" : ""}`}
        onClick={() => setActiveCart(!activeCart)}
      />

    </>
  )
}

export default Cart