import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../App.css';

const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlog = blogs.filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="blog-card-grid">
      {filteredBlog.map((blog) => (
        <Link key={blog.id} to={`/blogs/${blog.id}`} className="blog-card">
          <div>
            <img src={blog.image} alt={blog.title} className="blog-card-image" />
          </div>
          <h3 className="blog-card-title">{blog.title}</h3>
          <p className="blog-card-author">
            <FaUser className="blog-card-author-icon" />
            {blog.author}
          </p>
          <p className="blog-card-date">Published: {blog.published_date}</p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
