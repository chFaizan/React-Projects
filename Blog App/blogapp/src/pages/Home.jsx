import React from 'react';
import Banner from '../component/Banner';
import BlogPage from '../component/BlogPage';
import '../App.css';

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container_hme">
        <BlogPage />
      </div>
    </>
  );
};

export default Home;
