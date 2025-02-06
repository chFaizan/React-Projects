import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/Slice/CategorySlice';
import FoodData from "./FoodData";
const CategoryMenu = () => {
  const dispatch= useDispatch();
  const selectedCategory = useSelector((state)=>state.category.category)
  const [categories, setCategories] = useState([]);
  const listUniqueCategories = ()=> {
    const uniqueCategories =[ ...new Set(FoodData.map((food)=>food.category)),];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);};

    useEffect(()=>{
      listUniqueCategories();
    }, []);
  return (
    <div className='cate-Container'>
        <div className="heading">
            <h3>Find The Best Food</h3>
        </div>
        <div className="button-section">
          <button onClick={()=>dispatch(setCategory("All"))} className={`btn ${selectedCategory === "All" && "btn-select"}`}>All</button>
          {
            categories.map((category,index) =>{
              return(
              <button onClick={()=>dispatch(setCategory(category))} key={index} className={`btn ${selectedCategory === category && "btn-select"}`}>
                {category}
              </button>
)            })
          }

        </div>
    </div>
  )
}

export default CategoryMenu