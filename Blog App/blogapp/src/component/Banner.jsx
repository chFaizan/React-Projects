import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h1 className="banner-title">Welcome to Our Blog</h1>
        <p className="banner-description">Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.</p>
        <div>
          <Link to="/" className="learn-more">Learn more <FaArrowRight className="arrow-icon" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
