import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product({ items = [], cart, setCart }) {
  if (!Array.isArray(items) || items.length === 0) {
    return <p> No Products Found.</p>;
  }
  const style = {
    cursor: "pointer",
  };
  const addtoCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };
    setCart((prevCart) => [...prevCart, obj]);

    toast.success("Item added to Cart!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  };

  return (
    <>
      <ToastContainer />
      <div className="product-main">
        {items.map((curData) => (
          <div className="products-card" key={curData.id}>
            <Link to={`product/${curData.id}`}>
              <div className="product-img">
                <img src={curData.imgSrc} alt="Image is Loading" />
              </div>
            </Link>
            <div className="product-header">{curData.title}</div>
            <div className="product-des">{curData.description}</div>
            <div className="product-btn">
              <button className="pro-price">{curData.price} Pkr</button>
              <button
              style={style}
                className="pro-cart"
                onClick={() =>
                  addtoCart(
                    curData.id,
                    curData.price,
                    curData.title,
                    curData.description,
                    curData.imgSrc
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
