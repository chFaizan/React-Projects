import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import {DEL} from "../redux/actions/Action";



const Header = () => {
  const [price, setPrice] = useState(0);
    console.log(price);
    const dispatch = useDispatch();
   const getData =  useSelector((state)=>state.cartreducer.carts);
   
   const total = () => {
    let price = 0;
    getData.map((datas,k) => {
      price += datas.price + price;
    });
    setPrice(price);
  };
 
  useEffect(() => {
    total();
  }, [total]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dlt = (id) =>{
    dispatch(DEL(id));
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className='text-light' style={{ textDecoration: "none", marginRight: "34px" }}>Add To Cart</NavLink>
          <Nav className="me-auto">
            <NavLink className="text-decoration-none text-light" to="/">Home</NavLink>
          </Nav>
          <Badge badgeContent={getData.length} color="primary" id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: 'pointer' }}></i>
          </Badge>

        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          getData.length ?
          <div className='card_details' style={{width:'24rem', padding:10}}>

            <Table>
              <thead>
                <tr>
                  <th>Photo</th>

                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  getData.map((curData) =>{
                    return(
                      <>
                      <tr>
                        <td>
                          
                          <NavLink to={`/cart/${curData.id}`} onClick={handleClose}>
                        <img src={curData.imgdata} style={{width:'5rem', height:'5rem'}} alt="img" />
                        </NavLink></td>
                        <td>
                        <p>  {curData.rname}</p>
                        <p>Price : {curData.price}</p>
                        <p>Quantity: {curData.qnty}</p>
                        <p style={{color:'red', fontSize:20,cursor:'pointer'}} onClick={()=>dlt(curData.id)}><i className='fas fa-trash smalltrash'></i></p>
                        </td>
                        <td className='mt-5' style={{color:'red', fontSize:20,cursor:'pointer'}} onClick={()=>dlt(curData.id)}><i className='fas fa-trash largetrash'></i></td>
                        </tr>
                        </>
                    )
                  })
                }
                <p className='text-center'>Total: {price}</p>
              </tbody>
            </Table>

          </div>:
              <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
              <i className='fas fa-close smallclose'
              onClick={handleClose}
               style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
              <p style={{fontSize:22}}>Your Carts is empty</p>
              <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
             </div>

        }
       
   

      </Menu>
      </Navbar>


    </>
  )
}

export default Header;


