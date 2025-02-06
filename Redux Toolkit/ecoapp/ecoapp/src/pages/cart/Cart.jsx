import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import NavBar from '../../components/navbar/NavBar';
import { BiShoppingBag } from 'react-icons/bi';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/cartSlice';
import { IoClose } from 'react-icons/io5';
import Footer from '../../components/footer/Footer';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleProceedToCheckout = () => {
        navigate("/thank-you");
    };

    return (
        <div>
            <NavBar />
            <div className="cart-container">
                <div className="cart-title-container">
                    <BiShoppingBag className="cart-icon" />
                    <h2 className="cart-title">Shopping Cart</h2>
                </div>
                {cartItems.length === 0 ? (
                    <p className="empty-cart emp">
                        Your Cart is Empty. <Link to="/products"><span className='em-span'>Shop Now</span></Link>
                    </p>
                ) : (
                    <>
                        <div className="cart-content">
                            <div className="cart-items-section">
                                <div className="cart-header">
                                    <div className="header-item">Product</div>
                                    <div className="header-item">Price</div>
                                    <div className="header-item">Quantity</div>
                                    <div className="header-item">Total</div>
                                </div>
                                {cartItems.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <div className="cart-product">
                                            <img
                                                src={item.img || 'path/to/default-image.jpg'}
                                                className="cart-product-image"
                                                alt={item.title}
                                            />
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="cart-price">{item.price}</div>
                                        <div className="cart-quantity">
                                            <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                                        </div>
                                        <div className="cart-total">
                                            {parseFloat(item.price * item.quantity).toFixed(2)}
                                        </div>
                                        <button
                                            className="remove-btn"
                                            onClick={() => dispatch(removeFromCart(item))}
                                        >
                                            <IoClose size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-summary">
                                <h3 className="summary-title">Order Summary</h3>
                                <div className="summary-item">
                                    <span>Price:</span>
                                    <span>{totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="summary-item">
                                    <span>Delivery:</span>
                                    <span>Free</span>
                                </div>
                                <div className="summary-item">
                                    <span>Total:</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <button className="checkout-btn" onClick={handleProceedToCheckout}>
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
