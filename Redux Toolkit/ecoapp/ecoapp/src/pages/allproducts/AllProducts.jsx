import React from 'react'
import NavBar from "../../components/navbar/NavBar"
import Product from "../../components/products/Product"
import Footer from "../../components/footer/Footer"
import { allProducts } from '../../data'


const AllProducts = () => {
  return (
    <>
    <NavBar />
    <Product heading="Products" items={allProducts} />
    <Footer />
    </>
  )
}

export default AllProducts