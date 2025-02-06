import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import information from '../api/blogsData';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';
import '../App.css';

const BlogPage = () => {
  const [blogs, setBlogs] = useState(information);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const filteredBlogs = selectedCategory
      ? information.filter((blog) => blog.category === selectedCategory)
      : information;
    setBlogs(filteredBlogs);
  }, [selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="blog-page-container">
      <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
      <div className="blog-main-content">
        <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
        <SideBar />
      </div>
      <Pagination
        blogs={blogs}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogPage;
