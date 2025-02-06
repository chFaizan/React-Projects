import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from '../components/CardsData';
import "./style.css";
import { useDispatch } from "react-redux";
import {ADD} from '../redux/actions/Action';
export default function Cards() {
  const dispatch = useDispatch();
  const addToCart = (e) =>{
    dispatch(ADD(e));
  }
  const [data, setData] = useState(Cardsdata);
  console.log(Cardsdata);
  return (
    <>
    <div className="container mt-5">
      <h2 className='text-center'>Add to Cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((curData,index) =>{
            return(
              <>
               <Card key={index} style={{ width: '22rem',border:'none' }} className='mx-2 mt-4 card_style'>
      <Card.Img variant="top" src={curData.imgdata} style={{height:'16rem'}} className='mt-3' />
      <Card.Body>
        <Card.Title>{curData.rname}</Card.Title>
        <Card.Text>
          Price : {curData.price}
        </Card.Text>
        <div className="button_div d-flex justify-content-center">
        <Button style={{
          width:'100%'
        }} variant="primary" onClick={()=> addToCart(curData)}>Add to Cart</Button>
        </div>      </Card.Body>
    </Card>
              </>
            )
          })
        };
     
        
      </div>
    </div>
    </>
  )
}
