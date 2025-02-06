import React from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import "./Products.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const Product = ({items, heading}) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleToCart = (item)=>{
      dispatch(addToCart(item))
    }
   

    const handleViewDetail = (id) => {
        navigate(`/products/${id}`);
      };
      
  return (
    <>
        <h1 className='heading'>{heading}</h1>
        <div className="products-container">
            {
                items.map((item)=>{
                    return(
                        <div className="product-container" key={item.id}>
                            <img src={item.img} alt="" className='product-image' />
                            <div className="product-desc">
                                <h3>{item.title}</h3>
                                <span>{item.price} PKR</span>

                            </div>
                            <div className="product-info">
                                
                                <button onClick={()=> handleToCart(item)} className='icon'>
                                    <CiShoppingCart /> Add to Cart
                                </button>
                                <button className='icon' onClick={() =>handleViewDetail(item.id)}>
                                    <CiSearch /> View Details
                                </button>

                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Product