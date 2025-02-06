import React from "react";
import "./Card.css"
import { NavLink } from "react-router-dom";

export default function Card({ curData }) {


  return (
    <li>
      <div className="main-container">
        <div className="poster-container">
     
          <img
            src={curData.Poster}
            className="poster"
            alt={curData.movie || "Movie Poster"}
          />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <NavLink to={`/movie/${curData.imdbID}`}>
            <button className="ticket__buy-btn">Watch Now</button>
            </NavLink>
              
          </div>
        </div>
      </div>
    </li>
  );
}
