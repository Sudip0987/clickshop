import React, { useState } from 'react';
import { Nav, Navbar as BootNavbar, Container, NavDropdown, Col } from 'react-bootstrap';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import user_icon from '../Assets/user_icon.png';
import search_icon from '../Assets/search_icon.png';
import './Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
    console.log("textbox is focused:", isActive);
  };

  return (
<BootNavbar expand = "lg">
  <BootNavbar.Brand>
    <img src= {logo} alt='click shop logo'/>
  </BootNavbar.Brand>
  <BootNavbar.Toggle/>
  <BootNavbar.Collapse className = "right-aligned">
  <Nav>
  <NavDropdown title="Shop"   id="basic-nav-dropdown">
              <NavDropdown.Item href="#Men">Men</NavDropdown.Item>
              <NavDropdown.Item href="#Women">Women</NavDropdown.Item>
              <NavDropdown.Item href="#Kids">Kids</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">New Arrivals</Nav.Link>
            <Nav.Link href="#home">On Sale</Nav.Link>
            <Nav.Link href="#home">Brands</Nav.Link>
           
  </Nav>
  </BootNavbar.Collapse>


  
</BootNavbar>

  );
}

export default Navbar;
