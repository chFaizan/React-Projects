import React from 'react';
import { useParams } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa';
import SideBar from './SideBar';
import information from '../api/blogsData';

const SingleBlog = () => {
  const { id } = useParams();
  const blog = information.find(blog => blog.id.toString() === id);

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h1 className="blog-not-found-heading">404 - Blog Not Found</h1>
        <p>The blog you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="single-blog-container">
      <header className="blog-header">
        <h1 className="blog-header-title">Single Blog Post</h1>
      </header>

      <div className="blog-main-container">
        <main className="blog-primary-content">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="blog-featured-image" 
          />
          <h2 className="blog-post-title">{blog.title}</h2>
          
          <div className="blog-meta">
            <p className="blog-meta-paragraph">
              <FaUser />
              {blog.author} | {blog.published_date}
            </p>
            <p className="blog-meta-paragraph">
              <FaClock />
              {blog.reading_time}
            </p>
          </div>

          <div className="blog-content">
            <p>{blog.content}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero consectetur aut optio, eligendi ipsa aliquid dolore rem deleniti sapiente cum laboriosam nulla veritatis nihil velit eius voluptatibus repellendus minus!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero consectetur aut optio, eligendi ipsa aliquid dolore rem deleniti sapiente cum laboriosam nulla veritatis nihil velit eius voluptatibus repellendus minus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero consectetur aut optio, eligendi ipsa aliquid dolore rem deleniti sapiente cum laboriosam nulla veritatis nihil velit eius voluptatibus repellendus minus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero consectetur aut optio, eligendi ipsa aliquid dolore rem deleniti sapiente cum laboriosam nulla veritatis nihil velit eius voluptatibus repellendus minus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero consectetur aut optio, eligendi ipsa aliquid dolore rem deleniti sapiente cum laboriosam nulla veritatis nihil velit eius voluptatibus repellendus minus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero consectetur aut optio, eligendi ipsa aliquid dolore rem deleniti sapiente cum laboriosam nulla veritatis nihil velit eius voluptatibus repellendus minus!</p>

          </div>
        </main>

        <aside className="blog-sidebar">
          <SideBar />
        </aside>
      </div>
    </div>
  );
};

export default SingleBlog;