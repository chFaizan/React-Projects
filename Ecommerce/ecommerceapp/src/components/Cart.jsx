import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart({ cart, setCart }) {
  const style = {
    cursor: "pointer",
  };
  return (
    
    <>
      <div className="containers">
        {
          cart.length == 0 ? (
            <>
              <h1>Your Cart is Empty</h1>
              <Link to={"/"} className='carts'>Continue Shopping...</Link>
            </>
          ) :
            cart.map((product) => {
              return (
                <>
                  <div className="card-container" style={{ width: '700px' }}>
                    <div className="card-row">
                      <div className="card-img-container">
                        <img src={product.imgSrc} className="card-img" alt="..." />
                      </div>
                      <div className="card-content-container">
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.description}</p>
                          <div className="btns-cart">
                            <button style={style} className="pro-price">{product.price} Pkr</button>
                            <button style={style} className="pro-cart">Buy Now</button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
        }

</div>
        {
          cart.length!=0 &&(
            <div className="container">
            <button style={style} className='pro-cart'>CheckOut</button>
            <button  style={{backgroundColor:"red"}} onClick={()=>setCart("")} className='pro-price'>Clear Cart</button>
          </div>
          )
        }

    </>
  )
}
