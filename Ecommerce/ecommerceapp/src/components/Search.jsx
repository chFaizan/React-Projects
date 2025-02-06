import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

export default function Search({cart,setCart}) {
  const {term} = useParams();
  const [filterdata, setFilterdata] = useState([]);

  useEffect(() => {
    const filterData = () => {
      const data = items.filter((e) =>
        e.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterdata(data);
    };

    filterData(); 
  }, [term]);

  return (
    <>
  <Product cart={cart} setCart={setCart} items={filterdata}/>
    </>
  )
}
