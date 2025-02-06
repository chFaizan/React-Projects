import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { FaCartArrowDown } from 'react-icons/fa6';


export default function Navbar({ setData, cart = [] }) {

  const location = useLocation();
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  const filterCategory = (category) => {
    if (category === "all") {
      setData(items);
    } else {
      const elements = items.filter((product) => product.category === category);
      setData(elements);
    }
  };

  const style = {
    cursor: "pointer",
  };

  const filterPrice = (price) => {
    const filteredItems = items.filter((product) => Number(product.price) >= price);
    setData(filteredItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchItem.trim()) return;
    navigate(`/search/${searchItem.trim()}`);
    setSearchItem("");
  };

  return (
    <>
      <header className="sticky">
        <div className="navbar">
          <Link to={"/"} className="heading">
            <h1>E-Commerce</h1>
          </Link>

          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          <Link to={"/cart"} className="icon-section custom-btn">
          <FaCartArrowDown style={{fontSize:"1.5rem"}} />

            <span className="custom-badge">{cart.length}</span>
            <span className="visually-hidden">unread messages</span>
          </Link>
        </div>
        {
          location.pathname == "/" && (
            <div className="nav-bar-wrapper">
            <div className="item" style={style} onClick={() => filterCategory("all")}>No Filter</div>
            <div className="item" style={style} onClick={() => filterCategory("mobiles")}>Mobiles</div>
            <div className="item" style={style} onClick={() => filterCategory("laptops")}>Laptops</div>
            <div className="item" style={style} onClick={() => filterCategory("tablets")}>Tablets</div>
            <div className="item" style={style} onClick={() => filterPrice(29999)}>{">="}29999</div>
            <div className="item" style={style} onClick={() => filterPrice(49999)}>{">="}49999</div>
            <div className="item" style={style} onClick={() => filterPrice(69999)}>{">="}69999</div>
            <div className="item" style={style} onClick={() => filterPrice(89999)}>{">="}99999</div>
          </div>
          )
        }

      </header>
    </>
  );
}
