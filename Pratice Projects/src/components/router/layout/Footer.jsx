import React from 'react'

export default function Footer() {
  const heading_color ={
    color:"black",
    fontWeight:"600",
  }
  const para_color ={
    color:"white",
  }
  return (
    <footer className="section-footer">
    <div className="footer-container container">
      <div className="content_1">
        <img style={{height:"50px", width:"77px"}} src="logo.png" alt="logo" />
        <p style={para_color}>
          Welcome to EcomStore, your ultimate destination for
          cutting-edge gadgets!
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div className="content_2">
        <h4 style={heading_color}>SHOPPING</h4>
        <a style={para_color} href="#">Computer Store</a>
        <a style={para_color} href="#">Laptop Store</a>
        <a style={para_color} href="#">Accessories</a>
        <a style={para_color} href="#">Sales & Discount</a>
      </div>
      <div className="content_3">
        <h4 style={heading_color}>Experience</h4>
        <a style={para_color} href="./contact.html">Contact Us</a>
        <a style={para_color} href="" target="_blank">
          Payment Method
        </a>
        <a style={para_color} href="" target="_blank">
          Delivery
        </a>
        <a style={para_color} href="" target="_blank">
          Return and Exchange
        </a>
      </div>
      <div className="content_4">
        <h4 style={heading_color}>NEWSLETTER</h4>
        <p style={para_color}>
          Be the first to know about new
          <br />
          arrivals, sales & promos!
        </p>
        <div className="f-mail">
          <input type="email" placeholder="Your Email" />
          <i className="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    <div className="f-design">
      <div className="f-design-txt">
        <p style={heading_color}>Design and Code by Faizan</p>
      </div>
    </div>
  </footer>

  )
}
