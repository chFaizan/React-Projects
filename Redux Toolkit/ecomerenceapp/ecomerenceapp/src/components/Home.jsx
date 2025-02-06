import React, { useState } from 'react'
import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardData from './CardData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/CartSlices';
import toast from 'react-hot-toast';

const Home = () => {
  const [data, setData] = useState(CardData);
  const dispatch = useDispatch();
  
  const send = (e)=>{
  
    dispatch(addToCart(e));
    toast.success("Item added in your Cart")
  } 
  return (
    <section className='iteam_section mt-4 container'>
      <h2 className='px-4' style={{ fontWeight: 400 }}>Welcome to Gujrat Restaurant</h2>
      <div className="row mt-2 d-flex justify-content-around align-items-center">
        {
          data.map((curdata, index) => {
            return (
              <Card key={index} style={{ width: '22rem', border: "none" }} className='hove mb-4'>

                <Card.Img variant='top' key={index} className="cd" src={curdata.imgdata} />
                <div className="card_body">
                  <div className="upper_data d-flex justify-content-between align-items-center">
                    <h4 className='mt-2'>{curdata.dish}</h4>
                    <span>{curdata.rating}&nbsp;★</span>
                  </div>

                  <div className="lower_data d-flex justify-content-between ">
                    <h5>{curdata.address}</h5>
                    <span>{curdata.price} PKR</span>
                  </div>
                  <div className="extra"></div>

                  <div className="last_data d-flex justify-content-between align-items-center">
                    <img src={curdata.arrimg} className='limg' alt="" />
                    <Button style={{ width: "150px", background: "#ff3054db", border: "none" }} variant='outline-light'
                      className='mt-2 mb-2'
                      onClick={()=>send(curdata)}
                    >Add TO Cart</Button>
                    <img src={curdata.delimg} className='laimg' alt="" />

                  </div>
                </div>
              </Card>
            )
          })}

      </div>
    </section>
  )
}

export default Home