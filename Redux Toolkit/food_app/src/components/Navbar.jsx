import React from 'react'
import { batch, useDispatch } from 'react-redux'
import { setSearch } from '../redux/Slice/SearchSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
  
    <div className='container'>
        <div className="h1">Food App</div>
      <div className="input">
        <input onChange={(e)=>dispatch(setSearch(e.target.value))} type="text" placeholder='Search Here' name='search' />
      </div>
      </div>
  )
}

export default Navbar

