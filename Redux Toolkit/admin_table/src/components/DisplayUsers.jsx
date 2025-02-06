import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components";
import { removeUser } from '../store/slices/UserSlice';


const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) =>{
    return state.users;
  })
  const btnDelete = (id) =>{
    
    dispatch(removeUser(id));
  }
  return (
    <>
    <UserList >
   { data.map((user,id) =>{
     return (
<ul key={id}>
     <UserItem>

        <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
          {user}
          <button className='btn btn-delete' onClick={()=>btnDelete(id)}>
            <MdDeleteForever style={{background:'linear-gradient(135deg, #bab7cd 0%, #11aaf1 100%)'}} className='delete-icon' />
          </button>
        </li></UserItem>
      </ul>)
    })}</UserList>
    </>
  )
}

const UserList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Adds margin between users */
`;

const UserItem = styled.li`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const UserContent = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

export default DisplayUsers