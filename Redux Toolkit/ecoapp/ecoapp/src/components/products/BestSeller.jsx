import React from 'react'
import Product from './Product'
import {bestsellers} from "../../data";

const BestSeller = () => {
    return <Product items={bestsellers} heading="Best Sellers" />
}

export default BestSeller

