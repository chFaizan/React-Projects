import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <>
   <header className="section-navbar">

  <div className="container">
    <div className="navbar-brand">
      <NavLink to="/">
        <p style={{color:"black", fontWeight: "700"}}>NetFlix</p>
      </NavLink>
    </div>

    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" >
            about
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="movie" className="nav-link" >
            movies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="contact" className="nav-link">contact</NavLink>
        </li>
      </ul>
    </nav>
  </div>
</header>

      </>
  )
}
