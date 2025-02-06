import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetail({ cart, setCart}) {
  const style = {
    cursor: "pointer",
  };
  const addtoCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };
    setCart((prevCart) => [...prevCart, obj]);

    toast.success("Item added to Cart", {
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
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    const currentProduct = items.find((item) => item.id === Number(id)); 
    setProduct(currentProduct);

    if (currentProduct) {
      const related = items.filter(
        (item) =>
          item.category === currentProduct.category && item.id !== currentProduct.id
      );
      setRelatedProducts(related); 
    }
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <>
          <ToastContainer />
      <div className="detail-container">
        <div className="img">
          <img src={product.imgSrc} alt={product.title} />
        </div>
        <div className="detail-des">
          <div className="detail-title">
            <h3>{product.title}</h3>
          </div>
          <div className="detail-para">
            <p>{product.description}</p>
          </div>
          <div className="product-btn">
            <button className="pro-price">{product.price} Pkr</button>
            <button
                className="pro-cart"
                style={style}
                onClick={() =>
                  addtoCart(
                    product.id,
                    product.price,
                    product.title,
                    product.description,
                    product.imgSrc
                  )
                }
              >
                Add to Cart
              </button>
          </div>
        </div>
      </div>

      <h3 style={{ textAlign: "center", fontSize: "42px" }}>Related Products</h3>
      <div style={{ marginLeft: "100px" }}>
        <Product cart={cart} setCart={setCart} items={relatedProducts} />
      </div>
    </>
  );
}
