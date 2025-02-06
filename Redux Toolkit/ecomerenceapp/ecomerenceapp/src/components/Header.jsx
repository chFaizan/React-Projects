import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { carts } = useSelector((state) => state.allcart);

  return (
    <>
      <Navbar style={{ backgroundColor: 'black', height: '60px', color: 'white' }}>
        <Container>
          <NavLink style={({ isActive }) => ({
            color: 'white',
            margin: '0 1rem',
            textDecoration: isActive ? 'none' : 'none',
          })}
            to={"/"}> <h3 className="text-decoration-none text-light mx-2">Ecommerce</h3></NavLink>
          <NavLink to={'/cart'} className="text-decoration-none text-light mx-2">
            <div id="ex4">
              <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </NavLink>
        </Container>
      </Navbar>

    </>
  )
}

export default Header