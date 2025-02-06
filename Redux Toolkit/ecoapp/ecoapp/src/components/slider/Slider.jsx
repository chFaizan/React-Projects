import React, { useState } from 'react'
import { IoMdArrowDropleft,IoMdArrowDropright} from "react-icons/io";
import {sliderItems} from "../../data";
import "./Slider.css";
import { Link } from 'react-router-dom';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleSlide = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }
  return (
    <>
    <div style={{paddingLeft:10}} className="slider-container">
        <div className="arrow" direction="left" onClick={()=> handleSlide('left')}>
            <IoMdArrowDropleft className='icon' />
        </div>
        <div className="slider-wrapper" style={{transform: `translate(${slideIndex * -100}vw)`}}>
            {
                sliderItems.map((item)=>(
                    <div key={item.id} className='slide' style={{backgroundColor: `${item.bg}`}}>
                    <div className="img-container">
                        <img src={item.img} className='img' alt="" />
                        </div>
                        <div className="info-container">
                        <h1 className='title'>{item.title}</h1>
                        <p className='desc'>{item.desc}</p>
                    
                        <Link to="/products">
                        <button className='button'>Shop Now</button>
                        </Link>
                        </div>
                        
                        </div>
                ))
            }
        </div>
        <div className="arrow" direction="right" onClick={()=> handleSlide("right")}>
            <IoMdArrowDropright className='icon' />
        </div>
    </div>
    </>
  )
}

export default Slider