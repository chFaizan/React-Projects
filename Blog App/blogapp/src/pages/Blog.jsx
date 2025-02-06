import React from 'react';
import BlogPage from '../component/BlogPage';
import '../App.css';

const Blog = () => {
  return (
    <>
      <div className="hero-section">
        <h2 className="hero-title">Blog Page</h2>
      </div>
      <div className="blog-container">
        <BlogPage />
      </div>
    </>
  );
}

export default Blog;
