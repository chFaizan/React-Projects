import React from 'react'
import { menu } from '../Data'
export default function Menu() {
  return (
    <>
    <section id='menu' className='menu'>
        <h1 className='heading'>
            our <span>Menu</span>
        </h1>
        <div className="box-container">
            {
                menu.map((item,index)=>(
                    <div className="box">
                    <img src={item.img} alt="images" />
                    <h3>Tasty and healty</h3>
                    <div className="price">
                    $15.99 <span>$20.99</span></div>
                    <button className='btn'>Add to Cart</button>
                    </div>   ))
            }
        </div>
        </section>
        </>
  )
}
