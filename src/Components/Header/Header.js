import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container className='Container'>
          <Navbar.Brand href='/'>
           {' '}
            <i className="fa-solid fa-utensils"></i> Oh My Restaurnt
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header