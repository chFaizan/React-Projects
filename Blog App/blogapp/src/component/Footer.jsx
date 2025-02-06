import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import "../App.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-grid">
        
          <div>
            <p className="footer-section-title">Category</p>
            <ul className="footer-list">
              <li><a href="/" className="footer-link">News</a></li>
              <li><a href="/" className="footer-link">World</a></li>
              <li><a href="/" className="footer-link">Games</a></li>
              <li><a href="/" className="footer-link">References</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-section-title">Apples</p>
            <ul className="footer-list">
              <li><a href="/" className="footer-link">Webs</a></li>
              <li><a href="/" className="footer-link">eCommerce</a></li>
              <li><a href="/" className="footer-link">Business</a></li>
              <li><a href="/" className="footer-link">References</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-section-title">Cherry</p>
            <ul className="footer-list">
              <li><a href="/" className="footer-link">Media</a></li>
              <li><a href="/" className="footer-link">Education</a></li>
              <li><a href="/" className="footer-link">Projects</a></li>
              <li><a href="/" className="footer-link">References</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-section-title">Business</p>
            <ul className="footer-list">
              <li><a href="/" className="footer-link">Personal</a></li>
              <li><a href="/" className="footer-link">eCommerce</a></li>
              <li><a href="/" className="footer-link">Wiki</a></li>
              <li><a href="/" className="footer-link">Forums</a></li>
            </ul>
          </div>
        </div>

        <div className="subscribe-section">
          <p className="footer-section-title">Subscribe for you</p>
          <form className="subscribe-form">
            <input 
              type="email" 
              id="email" 
              className="email-input" 
              placeholder="Enter your email"
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
          <p className="copyright-text mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">© Copyright 2025 | All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="footer-link">
              <FaTwitter className="social-icon" />
            </a>
            <a href="#" className="footer-link">
              <FaInstagram className="social-icon" />
            </a>
            <a href="#" className="footer-link">
              <FaFacebook className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;