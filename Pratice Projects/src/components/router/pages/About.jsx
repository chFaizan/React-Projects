import React from 'react'


export default function About() {
  const styleColor = {
    color: "white",
  };

  return (
    <main className="about-page">
    <section className="section-about">
      <div className="container">
        <div className="cons">        
          <h1 style={styleColor} className="about-heading">About Netflix Explorer</h1>
        <p style={styleColor} className="about-intro">
          Welcome to <strong>Netflix Explorer</strong>, your ultimate hub for discovering the best movies and TV shows! Whether you're into thrilling dramas, romantic comedies, or action-packed blockbusters, we've got you covered.
        </p>
        <p style={styleColor} className="about-details">
          Our platform is designed to help movie enthusiasts explore, track, and dive into the world of entertainment. With a sleek interface and detailed insights into the latest releases, we bring the excitement of Hollywood right to your fingertips.
        </p>
        <p style={styleColor} className="about-end">
          Join us on this cinematic journey, and let us help you find your next binge-worthy obsession!
        </p>
        </div>

      </div>
    </section>
  </main>
  )
}
