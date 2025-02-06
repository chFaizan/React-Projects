import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { clearAllUser } from '../store/slices/UserSlice';

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const removeAll =()=>{
    dispatch(clearAllUser())
  }
  return <Wrapper>
    <>
    <button className='btn clear-btn' onClick={removeAll}>Clear Users</button>
    </>
    </Wrapper>
}


const Wrapper = styled.section`
.clear-btn{
  text-transform: capitalize;
  background-color:#db338a;
  margin-top:2rem;
  border:none;
}
`
export default DeleteAllUser