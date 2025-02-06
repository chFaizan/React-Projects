import React from 'react'
import Product from './Product'
import {newArrivals} from "../../data";

const NewArrival = () => {
  return <Product items={newArrivals} heading="New Arrivals" />
    
  
}

export default NewArrival