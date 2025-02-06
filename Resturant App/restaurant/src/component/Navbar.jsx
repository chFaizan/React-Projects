import React, {useRef} from 'react'
import Logo from "../assets/images/logo.png";
import "../App.css"; 
import { cart } from '../Data';

export default function NavBar() {
    const searchRef = useRef();
    const cardRef = useRef();
    const menuRef = useRef();

    const searchHandler = () =>{
        searchRef.current.classList.toggle("active");
        cardRef.current.classList.remove("active");
        menuRef.current.classList.remove("active");
    }
    const cardHandler = () =>{
        searchRef.current.classList.remove("active");
        cardRef.current.classList.toggle("active");
        menuRef.current.classList.remove("active");
    }
    
   
    const menuOn = () =>{
        searchRef.current.classList.remove("active");
        cardRef.current.classList.remove("active");
        menuRef.current.classList.toggle("active");
    }
  return (
    <>
    <header className='header'>
    <a href="#" className='logo'>
        <img src={Logo} alt="Image" />
    </a>
    <nav className="navbar" ref={menuRef}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Reviews</a>
        <a href="#blogs">Blogs</a>
        
    </nav>
    <div className="icons">
        <div className="fas fa-search" onClick={searchHandler}></div>
        <div className="fas fa-shopping-cart" onClick={cardHandler}></div>
        <div className="fas fa-bars" id='menu-btn' onClick={menuOn}></div>
    </div>
    <div className="search-form" ref={searchRef}>
        <input type="text" placeholder='Search Here...' id='search-box' />
        <label htmlFor="search" className='fas fas-search'></label>
    </div>
    <div className="cart-items-container" ref={cardRef}>
        {cart.map((item,index)=>(
            <div className="cart-item" key={index}>
                <span className='fas fa-times'></span>
                <img src={item.img} alt="" />
                <div className="content">
                    <h3>cart item 01</h3>
                    <div className="price">$15.99/-</div>
                </div>
            </div>
        ))}
                        <a className='btn' href="#">Checkout Now</a>
    </div>
    </header>
    </>
  )
}
