import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import information from '../api/blogsData';

const SideBar = () => {

  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    setPopularBlogs(information);
  }, []);

  return (
    <div className="sidebar">
      <div>
        <h3 className="sidebar-title">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div key={blog.id} className="sidebar-item">
              <h4 className="sidebar-item-title">{blog.title}</h4>
              <Link to="/" className="read-more">
                Read more <FaArrowRight className="read-more-icon" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="sidebar-title">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(5, 10).map((blog) => (
            <div key={blog.id} className="sidebar-item">
              <h4 className="sidebar-item-title">{blog.title}</h4>
              <Link to="/" className="read-more">
                Read more <FaArrowRight className="read-more-icon" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
