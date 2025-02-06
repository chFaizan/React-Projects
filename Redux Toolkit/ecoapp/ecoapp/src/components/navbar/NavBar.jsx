
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cartItem = useSelector((state) => state.cart.cartItems) || []; 
  const totalItem = cartItem.length;

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
        
          <div className="navbar-left">
            <span className="navbar-language">EMSTORE</span>
          
          </div>
          <Link to="/">
          <div className="navbar-center">
            <h1 className="navbar-logo">Shopping App</h1>
          </div>
          </Link>

          <div className="navbar-right">
            <Link to="/register">
              <div className="navbar-menuItem">Register</div>
            </Link>
            <Link to="/login">
              <div className="navbar-menuItem">Logout</div>
            </Link>
            <Link to="/cart">
            <div className="navbar-menuItem">
              <MdOutlineShoppingCart className="icon" />
              {totalItem > 0 && <span className="cart-badge">{totalItem}</span>}
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
