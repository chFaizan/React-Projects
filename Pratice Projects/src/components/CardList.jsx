import React from 'react'
import style from "./NetFlix.module.css";
import styled from 'styled-components';
import { BioProvider } from './contextapi';
export default function CardList( {data} ) {
  const {id, img_url, name,rating, description, genre, watch_url} = data;
  
  //style component
  const btn_Fazi = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) => (props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f")};
    color: var(--bg-color);
    font-weight: bold;
    cursor: pointer;
`;

  const ratingClass = rating>=8.5 ? style.super_hit : style.average;
  return (
    

        <li className={style.card}>
        <div>
    <img src={img_url} alt="images" width="40%" height="40%"   />
    </div>
    <div className={style["card-content"]}>
    <h1>Name: {name}</h1>
    <h2>Rating:<span className={(`${style.rating} ${ratingClass}`)}>{rating}</span></h2>
    <p>{description}</p>
    <p className='text-3xl font-bold underline'>Genre:{genre.join(", ")}</p>
      <a href= {watch_url} target="_blank">
      <btn_Fazi rating={rating}>Watch Now</btn_Fazi></a>
    </div>
    
    </li>
    );
  
}
