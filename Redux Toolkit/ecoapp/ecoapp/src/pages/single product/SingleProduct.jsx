import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../../data';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import "./SingleProduct.css";
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/cartSlice';

const SingleProduct = () => {

  const dispatch = useDispatch();
  const handleToCart = (product)=>{
    dispatch(addToCart(product))
  }

  const { id } = useParams();
  const product = allProducts.find((product) => product.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleCircleClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const colour = ["red", "purple", "teal", "green", "black"];
  const size = ["xs", "s", "m", "l", "xl"];

  return (
    <div className='singleProduct-container'>
      <NavBar />
      <div className="singleProduct-wrapper">
        <div className="singleProduct-imageSection">
          <img src={product.img} className='singleProduct-image' alt="" />
        </div>
        <div className="singleProduct-infoSection">
          <h2 className="singleProduct-title">{product.title}</h2>
          <p className="singleProduct-number">{product.price}</p>
          <h4 className='description-title'>Description</h4>
          <p className='singleProduct-description'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit possimus exercitationem libero sed, aliquam rerum quas quibusdam voluptatem eos qui quidem, earum voluptatum ad dolorem aliquid sit nulla placeat nemo.
          </p>
          
          <div className="singleProduct-options">
            <div className="colors-section">
              <h4>Colors</h4>
              <div className="colors">
                {
                  colour.map((color) => {
                    return (
                      <div
                        key={color}
                        className='color-circle'
                        style={{
                          backgroundColor: color,
                          outline: selectedColor === color ? `3px solid ${color}` : ""
                        }}
                        onClick={() => handleCircleClick(color)}
                      ></div>
                    );
                  })
                }
              </div>
            </div>
            <div className="sizes-section">
              <h4>Size</h4>
              <div className="sizes">
                {
                  size.map((size) => {
                    return (
                      <span 
                        key={size} 
                        className="size-option"
                        style={{
                          border: selectedSize === size ? "1px solid #ccc" : "",
                          padding: "5px",
                          margin: "5px",
                          cursor: "pointer"
                        }}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                      </span>
                    );
                  })
                }
              </div>
            </div>
          </div>
        
        <div className="addToCart">
          <button onClick={()=> handleToCart(product)}>Add to Cart</button>
          </div></div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
