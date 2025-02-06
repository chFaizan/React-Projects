import React from 'react';
import about from '../assets/about.png';
import arthor1 from '../assets/img1.jpg';
import arthor2 from '../assets/img2.jpg';
import '../App.css';

const authors = [
  {
    name: "Adrio Devid",
    role: "Director of Operations",
    articles: 12,
    image: arthor1,
  },
  {
    name: "Rayna Mario",
    role: "Content Writer",
    articles: 8,
    image: arthor2,
  },
  {
    name: "Devid Tac",
    role: "Head of Marketing",
    articles: 5,
    image: arthor1,
  },
  {
    name: "Mark Jacob",
    role: "Head of Marketing",
    articles: 5,
    image: arthor2,
  },
];

const About = () => {
  return (
    <>
      <div className="hero-section">
        <h2 className="hero-title">About Us Page</h2>
      </div>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={about} alt="About Us" />
          </div>
          <div className="about-content">
            <p className="highlight-text">Who we are</p>
            <h2 className="section-title">
              We provide high quality <br /> Articles & blogs
            </h2>
            <p className="section-description">
              Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper. 
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
              per inceptos himenaeos congue dui nec dui lobortis maximus.
            </p>
            <p className="section-description">
              Curabitur pretium, libero vitae pharetra rhoncus, tellus urna auctor orci, 
              eu dictum diam diam nec neque. Pellentesque.
            </p>
          </div>
        </div>
      </section>

      <section className="authors-section">
        <h2 className="section-title">Top Authors</h2>
        <div className="authors-grid">
          {authors.map((author, index) => (
            <div key={index} className="author-card">
              <img style={{marginLeft:"80px"}} src={author.image} alt={author.name} className="author-image" />
              <h3 className="author-name">{author.name}</h3>
              <p className="author-role">{author.role}</p>
              <p className="author-articles"> {author.articles} Articles Published</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
